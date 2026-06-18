# 公開前チェックメモ

このサイトは静的サイトです。ビルド作業やサーバー側プログラムは不要です。

## アップロードするもの

`profile-desktop-site` フォルダの中身を、公開先サーバーのドキュメントルートにアップロードします。

必要なファイル:

- `index.html`
- `styles.css`
- `script.js`
- `assets/`
- `robots.txt`

`README_EDITING.md` や `DEPLOYMENT.md` は公開しても大きな問題はありませんが、見せたくない場合はアップロードしなくても動きます。

## 対応している公開方法

- レンタルサーバーの `public_html` / `www` / `htdocs` などにアップロード
- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

どれでも、`index.html` がトップに来るように置けば表示できます。

## 訪問者カウンターについて

現状、このサイトに訪問者カウンターは実装していません。

訪問者数を表示したい場合は、公開後に以下のいずれかを追加します。

- サーバー側でカウントする小さなAPI
- Firebase / Supabase などのデータベース

静的HTMLだけでは、全員共通の正確なカウントは保存できません。

## 公開前に変えるとよいところ

- `index.html` の `<title>` と `meta description`（現在は氏名入りに設定済み）
- `About This Website` の文章
- Internet Explorer風ウィンドウのアドレスバーに表示しているURL（現在は GitHub プロフィール）
- 書道・42 Tokyo・AIの実際の画像やコード
- `og:image`: 現在は暫定で `assets/waterfront-wallpaper.jpg` を相対パスで設定しています。

独自ドメインを取ったら、`og:image` は専用のOGP画像を用意し、そのドメインの**絶対URL**（`https://example.com/assets/og.jpg` など）に差し替えると、SNS共有時のサムネイルが安定します。`og:url` も追加できます。

## 画像について

背景は `assets/waterfront-wallpaper.jpg` を使っています。

差し替え用に、花畑の `assets/flower-wallpaper.jpg`（軽量版）と `assets/flower-wallpaper.png`（元画像）も残してあります。背景を変える場合は `styles.css` の `url("./assets/waterfront-wallpaper.jpg")` を編集します。

## 連絡箱（右上アイコン）の設定

連絡箱は [Formspree](https://formspree.io/) を使って送信する形にしています。

1. Formspree に無料登録し、フォームを1つ作成すると `https://formspree.io/f/xxxxxxxx` のようなURL（フォームID付き）が発行されます。
2. `index.html` の連絡箱フォームの `action` を、その発行されたURLに置き換えます。

```html
<form class="contact-form" action="https://formspree.io/f/REPLACE_WITH_YOUR_ID" method="POST" data-contact-form>
```

未設定（`REPLACE_WITH_YOUR_ID` のまま）の間は、送信しても「送信先が未設定です」と表示されるだけで、メールは送られません。設定後は、送信内容が登録メールアドレスに届きます。メールアドレス欄に入力があれば、そのまま返信できます。

### スパム対策

- フォームには **ハニーポット（`name="_gotcha"` の隠し入力欄）** を入れてあり、ボットが自動入力するとFormspree側で弾かれます（人間には見えません）。
- さらに強化したい場合は、Formspreeダッシュボードのフォーム設定で **reCAPTCHA / Spam protection** を有効化できます。

## 掲示板の設定（Vercel + Upstash Redis）

掲示板は **全員共有のチャット**で、保存先は Vercel のサーバーレス関数 `api/board.js`（[Upstash Redis](https://upstash.com/)）です。動かすには無料のRedisをVercelに接続するだけです。

1. Vercel → 対象プロジェクト → **Storage** → **Create Database** → Marketplace の **Upstash (Redis)** を選んで作成（無料枠）。プロジェクトに接続すると、`KV_REST_API_URL` / `KV_REST_API_TOKEN`（または `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN`）が**環境変数として自動で入ります**。
2. 接続すると Vercel が自動で再デプロイし、`/api/board` が有効になります（追加のコードは不要）。

`api/board.js` の仕様:

- `GET /api/board` … 投稿の配列（古い順）を返す。各要素は `{ "message": string, "time": ISO8601 }`
- `POST /api/board` … `{ "message": string }` を受け取り保存（サーバー側でサニタイズ・最大200文字・同一IPは30秒で5件までのレート制限・最大200件保持）。

保存先を別のサーバーに変えたい場合は、`script.js` 冒頭の `BOARD_API`（既定 `"/api/board"`）を差し替えれば、その先のGET/POSTを使うようになります。環境変数が未設定の間は `/api/board` が `storage not configured` を返し、掲示板は空表示になります（接続すれば自動で動きます）。
