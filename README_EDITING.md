# 編集メモ

このフォルダがサイト一式です。

まず見るファイル:

- `index.html`: 画面に出る文章、アイコン、ウィンドウの中身
- `styles.css`: 色、サイズ、配置、背景、ボタンの見た目
- `script.js`: 入室/退室ボタン、時計、ウィンドウを開く動き
- `assets/waterfront-wallpaper.jpg`: 今使っている背景画像
- `assets/flower-wallpaper.jpg`: 公開用に軽量化した花畑の背景画像
- `assets/flower-wallpaper.png`: 元の花畑画像

## 開き方

`index.html` をブラウザで開くと、そのまま表示できます。

## よく変える場所

### 入口ページの文章

`index.html` のこのあたりを編集します。

```html
<h1>来てくれてありがとう！</h1>
<button class="enter-button" type="button" data-enter>入室</button>
<button class="leave-button" type="button" data-leave>退室</button>
```

### デスクトップのアイコン名

`index.html` の `<nav class="desktop-icons">` の中を編集します。

例:

```html
<span>書道<br />フォルダ</span>
```

### 自己紹介文

`index.html` のそれぞれの `data-panel` を探すと編集しやすいです。

- `data-panel="about"`: このWebサイトについて
- `data-panel="profile"`: プロフィール
- `data-panel="gakuchika"`: 学生時代力を入れたこと
- `data-panel="calligraphy"`: 書道フォルダ
- `data-panel="tokyo42"`: 42 Tokyo
- `data-panel="work"`: 職歴
- `data-panel="ai"`: AI専攻・自主学習
- `data-panel="license"`: 免許・資格
- `data-panel="browser"`: Internet Explorer
- `data-panel="terminal"`: コマンドプロンプト
- `data-panel="music"`: 音楽
- `data-panel="hobby"`: 趣味・写真
- `data-panel="memo"`: メモ帳
- `data-panel="mail"`: メール
- `data-panel="trash"`: ごみ箱

### 42 Tokyo のコード

`assets/42tokyo/` にコードを置いて、`script.js` の `codeFiles` 配列にファイルパスを追加すると、42 TokyoウィンドウのVS Code風ビューに読み込まれます。

### 退室ボタンのセリフ

`script.js` の `leaveMessages` を編集します。

```js
const leaveMessages = [
  "本当に退室しますか？",
  "もう少しだけ見ていきませんか。"
];
```

### 背景画像

画像を差し替える場合は、`assets/waterfront-wallpaper.jpg` を同じ名前で置き換えるのが一番かんたんです。

別名にする場合は、`styles.css` のこの部分を変えます。

```css
url("./assets/waterfront-wallpaper.jpg")
```

## 画像や作品の置き場

あとで追加しやすいように、空の置き場を作っています。

- `assets/calligraphy/`: 書道の写真や作品画像
- `assets/42tokyo/`: 42 Tokyo のコードやメモ
- `assets/ai/`: AI学習や制作物の画像
- `assets/hobby/`: 趣味フォルダに表示する写真

コードファイルも同じ考え方です。たとえば `assets/ai/data-analysis-study.py` を置いたら、`index.html` に次のようなリンクを追加できます。

```html
<a href="./assets/ai/data-analysis-study.py" target="_blank" rel="noopener">data-analysis-study.py</a>
```

42 Tokyo のコードは、`assets/42tokyo/` に置いて、42 Tokyoウィンドウ内のVS Code風サイドバーからリンクできます。

趣味の写真を増やす場合は、`assets/hobby/` に画像を置き、`script.js` の `hobbyPhotos` 配列に画像パスとラベルを追加します。

## 42 Tokyo のコードビューに反映する方法

今回の `ft_printf` や `push_swap` のようにコードをサイト内のVS Code風ビューで表示したい場合は、`script.js` の `codeFiles` 配列にパスを追加します。

例:

```js
const codeFiles = [
  "./assets/42tokyo/printf/ft_printf.c",
  "./assets/42tokyo/push_swap/main.c"
];
```

この配列に入れたファイルは、42 Tokyoウィンドウのサイドバーに自動でボタンとして表示されます。パスが実際のファイル名と一致していれば、公開サーバー上でコードが読み込まれて表示されます。

注意: `index.html` を直接ダブルクリックして `file://` で開いた場合、ブラウザの制限でコード読み込みが止まることがあります。公開サーバーやローカルサーバーで開くと正常に表示されます。

画像を実際に表示したい場合は、`index.html` の該当ウィンドウ内に `<img>` を追加します。

例:

```html
<img class="work-image" src="./assets/calligraphy/sample.jpg" alt="書道作品" />
```

そのあと `styles.css` に以下を追加すると、画像がきれいに収まります。

```css
.work-image {
  width: 100%;
  border: 1px solid #b6c6d8;
  background: white;
}
```

## 公開するとき

この `profile-desktop-site` フォルダごと、GitHub Pages、Netlify、Vercel などにアップロードできます。

静的サイトなので、サーバーやビルドは不要です。
