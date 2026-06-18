// 掲示板API（Vercel Serverless Function + Upstash Redis REST）
// 必要な環境変数（VercelでUpstash/KVを連携すると自動で入ります）:
//   KV_REST_API_URL / KV_REST_API_TOKEN  もしくは
//   UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN
// 依存パッケージ不要（Node標準の fetch で Upstash REST を呼び出します）。

const REDIS_URL =
  process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN =
  process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

const KEY = "board:comments";
const MAX_KEEP = 200; // 保持する最大件数
const MAX_RETURN = 100; // 一度に返す最大件数
const MAX_LEN = 200; // 1コメントの最大文字数
const RATE_LIMIT = 5; // 同一IPあたりの投稿数
const RATE_WINDOW = 30; // 秒

async function redis(command) {
  const response = await fetch(REDIS_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${REDIS_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(command)
  });
  if (!response.ok) throw new Error(`redis ${response.status}`);
  const data = await response.json();
  return data.result;
}

function sanitize(text) {
  const cleaned = Array.from(String(text))
    .map((ch) => {
      const code = ch.codePointAt(0);
      return code < 0x20 || code === 0x7f ? " " : ch; // 制御文字を空白化
    })
    .join("");
  return cleaned
    .replace(/ {3,}/g, "  ") // 過剰な空白を圧縮
    .trim()
    .slice(0, MAX_LEN);
}

async function rateLimited(ip) {
  const key = `board:rl:${ip}`;
  const count = await redis(["INCR", key]);
  if (count === 1) await redis(["EXPIRE", key, String(RATE_WINDOW)]);
  return count > RATE_LIMIT;
}

module.exports = async function handler(req, res) {
  if (!REDIS_URL || !REDIS_TOKEN) {
    res.status(500).json({ error: "storage not configured" });
    return;
  }

  try {
    if (req.method === "GET") {
      const raw = await redis(["LRANGE", KEY, String(-MAX_RETURN), "-1"]);
      const posts = (raw || [])
        .map((item) => {
          try {
            return JSON.parse(item);
          } catch {
            return null;
          }
        })
        .filter(Boolean);
      res.status(200).json(posts);
      return;
    }

    if (req.method === "POST") {
      const ip =
        (req.headers["x-forwarded-for"] || "").split(",")[0].trim() ||
        "unknown";
      if (await rateLimited(ip)) {
        res.status(429).json({ error: "rate limited" });
        return;
      }

      let body = req.body;
      if (typeof body === "string") {
        try {
          body = JSON.parse(body);
        } catch {
          body = {};
        }
      }
      const message = sanitize((body && body.message) || "");
      if (!message) {
        res.status(400).json({ error: "empty message" });
        return;
      }

      const post = { message, time: new Date().toISOString() };
      await redis(["RPUSH", KEY, JSON.stringify(post)]);
      await redis(["LTRIM", KEY, String(-MAX_KEEP), "-1"]);
      res.status(200).json({ ok: true, post });
      return;
    }

    res.status(405).json({ error: "method not allowed" });
  } catch {
    res.status(500).json({ error: "server error" });
  }
};
