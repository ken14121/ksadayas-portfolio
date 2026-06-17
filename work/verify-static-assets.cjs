const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const files = ["index.html", "styles.css", "script.js"];
const refs = new Set();
const assetRef = /(?:src|href)=["'](\.\/assets\/[^"']+)["']|url\(["']?(\.\/assets\/[^"')]+)["']?\)|["'](\.\/assets\/[^"']+)["']/g;

for (const file of files) {
  const text = fs.readFileSync(path.join(root, file), "utf8");
  for (const match of text.matchAll(assetRef)) {
    refs.add(match[1] || match[2] || match[3]);
  }
}

const missing = [];
for (const ref of refs) {
  const target = path.join(root, ref.replace("./", ""));
  if (!fs.existsSync(target)) missing.push(ref);
}

const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const script = fs.readFileSync(path.join(root, "script.js"), "utf8");
const styles = fs.readFileSync(path.join(root, "styles.css"), "utf8");

const checks = {
  hasCenteredEnterStyles: styles.includes("place-items: center") && styles.includes("--enter-width, 170px"),
  usesIconImages: (html.match(/assets\/icons\//g) || []).length >= 9,
  hasMailInbox: html.includes("data-mail-message=\"welcome\"") && html.includes("data-mail-clear"),
  unlocksMailOnPuzzle: script.includes("unlockClearMail();") && script.includes("謎解きクリアおめでとう"),
  hasPushSwapPreview: script.includes("./assets/42tokyo/push_swap/main.c")
};

const failed = Object.entries(checks).filter(([, ok]) => !ok).map(([name]) => name);

console.log(JSON.stringify({ checkedRefs: refs.size, missing, checks }, null, 2));

if (missing.length || failed.length) {
  if (failed.length) console.error(`Failed checks: ${failed.join(", ")}`);
  process.exit(1);
}
