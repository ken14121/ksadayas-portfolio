const login = document.querySelector("[data-login]");
const desktop = document.querySelector("[data-desktop]");
const enterButton = document.querySelector("[data-enter]");
const leaveButton = document.querySelector("[data-leave]");
const leaveMessage = document.querySelector("[data-leave-message]");
const openers = document.querySelectorAll("[data-window]");
const panels = document.querySelectorAll("[data-panel]");
const clock = document.querySelector("[data-clock]");
const terminalForm = document.querySelector("[data-terminal-form]");
const terminalInput = document.querySelector("[data-terminal-input]");
const terminalLog = document.querySelector("[data-terminal-log]");
const codeViewer = document.querySelector("[data-code-viewer]");
const codeTitle = document.querySelector("[data-code-title]");
const codeOpenLink = document.querySelector("[data-code-open]");
const codeFileList = document.querySelector("[data-code-file-list]");
const mailItems = document.querySelectorAll("[data-mail-message]");
const clearMailItem = document.querySelector("[data-mail-clear]");
const mailFrom = document.querySelector("[data-mail-from]");
const mailSubject = document.querySelector("[data-mail-subject]");
const mailBody = document.querySelector("[data-mail-body]");
const hobbyGallery = document.querySelector("[data-hobby-gallery]");
const bgmToggle = document.querySelector("[data-bgm-toggle]");
const mailIcon = document.querySelector('.desktop-icon[data-window="mail"]');
const contactForm = document.querySelector("[data-contact-form]");
const contactStatus = document.querySelector("[data-contact-status]");
const boardForm = document.querySelector("[data-board-form]");
const boardList = document.querySelector("[data-board-list]");
const boardNameInput = document.querySelector("[data-board-name]");
const boardMessageInput = document.querySelector("[data-board-message]");
const boardNote = document.querySelector("[data-board-note]");

// 掲示板の保存先。公開サーバーで API を用意したら URL を設定すると全員共有になります。
// 未設定（空文字）の間は、この端末の localStorage にだけ保存されます。
const BOARD_API = "";
const BOARD_STORAGE_KEY = "profileBoardPosts";

const leaveMessages = [
  "本当に退室しますか？",
  "もう少しだけ見ていきませんか。",
  "入室ボタン、大きくしておきました。",
  "退室より入室のほうが近いです。",
  "最後のチャンスです。たぶん。"
];

const codeFiles = [
  "./assets/42tokyo/README.md",
  "./assets/42tokyo/learning-log.md",
  "./assets/42tokyo/printf/ft_printf.c",
  "./assets/42tokyo/printf/ft_printf.h",
  "./assets/42tokyo/printf/ft_printf_hex.c",
  "./assets/42tokyo/printf/ft_printf_utils.c",
  "./assets/42tokyo/printf/Makefile",
  "./assets/42tokyo/push_swap/README.md",
  "./assets/42tokyo/push_swap/Makefile",
  "./assets/42tokyo/push_swap/free_matrix.c",
  "./assets/42tokyo/push_swap/ft_atol.c",
  "./assets/42tokyo/push_swap/ft_split.c",
  "./assets/42tokyo/push_swap/index.c",
  "./assets/42tokyo/push_swap/main.c",
  "./assets/42tokyo/push_swap/op_push.c",
  "./assets/42tokyo/push_swap/op_rev_rotate.c",
  "./assets/42tokyo/push_swap/op_rotate.c",
  "./assets/42tokyo/push_swap/op_swap.c",
  "./assets/42tokyo/push_swap/parse.c",
  "./assets/42tokyo/push_swap/push_swap.h",
  "./assets/42tokyo/push_swap/radix.c",
  "./assets/42tokyo/push_swap/sort_small.c",
  "./assets/42tokyo/push_swap/stack.c",
  "./assets/42tokyo/push_swap/utils.c"
];

const hobbyPhotos = [
  ["./assets/hobby/hobby-01.jpg", "御朱印巡り"],
  ["./assets/hobby/hobby-02.jpg", "御朱印巡り"],
  ["./assets/hobby/hobby-03.jpg", "御朱印巡り"],
  ["./assets/hobby/hobby-04.jpg", "御朱印巡り"],
  ["./assets/hobby/hobby-05.jpg", "御朱印帳"],
  ["./assets/hobby/hobby-06.jpg", "京都の記録"],
  ["./assets/hobby/hobby-07.jpg", "御朱印帳"],
  ["./assets/hobby/hobby-08.jpg", "御朱印帳"],
  ["./assets/hobby/hobby-09.jpg", "御朱印帳"],
  ["./assets/hobby/hobby-10.jpg", "御朱印帳"],
  ["./assets/hobby/hobby-11.jpg", "北海道神宮"],
  ["./assets/hobby/hobby-12.jpg", "旅先の記録"],
  ["./assets/hobby/hobby-13.jpg", "Esports"],
  ["./assets/hobby/hobby-14.jpg", "Meteor選手と"],
  ["./assets/hobby/hobby-15.jpg", "Ooodaさんと"],
  ["./assets/hobby/hobby-16.jpg", "Misaya選手と"],
  ["./assets/hobby/hobby-17.jpg", "Art選手と"],
  ["./assets/hobby/hobby-18.jpg", "DRXフォトグラファーOaksさんと"],
  ["./assets/hobby/hobby-19.jpg", "Stax選手と"],
  ["./assets/hobby/hobby-20.jpg", "Mako選手と"],
  ["./assets/hobby/hobby-21.jpg", "Rb選手と"],
  ["./assets/hobby/hobby-22.jpg", "Anthem選手と"],
  ["./assets/hobby/hobby-23.jpg", "Xnfri選手と"],
  ["./assets/hobby/hobby-24.jpg", "Raita選手と"],
  ["./assets/hobby/hobby-25.jpg", "boaster選手と"],
  ["./assets/hobby/hobby-26.jpg", "VALORANT Masters"],
  ["./assets/hobby/hobby-28.jpg", "Tarikさんと"],
  ["./assets/hobby/hobby-29.jpg", "サイン"],
  ["./assets/hobby/hobby-30.jpg", "サイン"],
  ["./assets/hobby/hobby-31.jpg", "サイン"],
  ["./assets/hobby/hobby-32.jpg", "友人と"],
  ["./assets/hobby/hobby-33.jpg", "広島県未来心の丘"],
  ["./assets/hobby/hobby-34.jpg", "大塚国際美術館"],
  ["./assets/hobby/hobby-35.jpg", "コミケ"],
  ["./assets/hobby/hobby-36.jpg", "街歩き"],
  ["./assets/hobby/hobby-37.jpg", "沖縄旅先の一枚"],
  ["./assets/hobby/hobby-38.jpg", "大阪夜の路地"],
  ["./assets/hobby/hobby-39.jpg", "名古屋"],
  ["./assets/hobby/hobby-40.jpg", "雨の名古屋タワー"],
  ["./assets/hobby/hobby-41.jpg", "名古屋"],
  ["./assets/hobby/hobby-42.jpg", "宮地嶽神社"],
  ["./assets/hobby/hobby-43.jpg", "北海道"],
  ["./assets/hobby/hobby-44.jpg", "小樽運河"],
  ["./assets/hobby/hobby-45.jpg", "桜島"],
  ["./assets/hobby/hobby-46.jpg", "宮崎神宮"],
  ["./assets/hobby/hobby-47.jpg", "旅の風景"],
  ["./assets/hobby/hobby-48.jpg", "日本最南端の駅にて"],
  ["./assets/hobby/hobby-49.jpg", "旅先で有名な方と"]
];

const mailMessages = {
  welcome: {
    from: "profile-desktop@site.local",
    subject: "訪問ありがとうございます",
    body: [
      "このサイトに来てくれてありがとうございます。",
      "アイコンを開いて、42 Tokyo、AI学習、書道、趣味、コマンドプロンプトの小さな謎解きを見ていってください。"
    ]
  },
  clear: {
    from: "command-prompt@site.local",
    subject: "謎解きクリアおめでとう",
    body: [
      "コマンドプロンプトの謎解きクリア、おめでとうございます。",
      "答えは「rain」。4つのゲームで集めた文字をつなげると、趣味フォルダの中にある雨の写真へたどり着きます。",
      "雨の名古屋タワーまで見つけてくれてありがとう。"
    ]
  }
};

let topZ = 20;
let leaveAttempts = 0;
let dragging = null;
let puzzleSolved = false;
let codeLoaded = false;
let audioContext = null;
let bgmTimer = null;
let bgmStep = 0;

const bgmNotes = [523.25, 659.25, 783.99, 987.77, 880, 783.99, 659.25, 587.33];
const riddleLetters = {
  stopgame: "r",
  breakoutclone: "a",
  numbergame: "i",
  quizgame: "n"
};
const riddleProgress = {
  stopgame: false,
  breakoutclone: false,
  numbergame: false,
  quizgame: false
};
const quizQuestions = [
  {
    text: "Q1. 僕の名前は？",
    choices: ["ドラえもん", "貞保健太郎", "村上杜夢"],
    answer: "2"
  },
  {
    text: "Q2. 大学で学んでいる分野として、このサイトに書かれているものは？",
    choices: ["情報工学・AI", "製菓", "考古学"],
    answer: "1"
  },
  {
    text: "Q3. 42 Tokyo のコードビューに入っている課題は？",
    choices: ["ft_printf と push_swap", "Minecraft Mod", "家計簿アプリ"],
    answer: "1"
  }
];

const goldbachMessages = [
  "おしい。まだ正しい証明にはなっていないようだ。",
  "その証明には穴があるようだ。もう一度。",
  "良い着眼点だが、すべての偶数では示せていない。",
  "あと少し。別の角度から考えてみよう。"
];

let goldbachTries = 0;
let playriddleUnlocked = false;
let riddleStarted = false;
let riddleCompleteAnnounced = false;
let numberTarget = null;
let quizIndex = 0;
let stopgameState = null;
let breakoutState = null;

function showDesktop() {
  login.classList.add("is-exiting");
  setTimeout(() => {
    login.hidden = true;
    desktop.classList.remove("is-hidden");
    openPanel("about");
  }, 280);
}

function moveLeaveButton() {
  leaveAttempts += 1;
  const effectiveAttempt = Math.min(leaveAttempts, 4);
  const maxWidth = Math.max(180, Math.min(window.innerWidth - 56, 520));
  const width = Math.min(170 + effectiveAttempt * 82, maxWidth);
  const height = Math.min(70 + effectiveAttempt * 24, Math.max(120, window.innerHeight - 360));
  enterButton.style.setProperty("--enter-width", `${width}px`);
  enterButton.style.setProperty("--enter-height", `${height}px`);
  enterButton.style.setProperty("--enter-font", `${Math.min(28 + effectiveAttempt * 5, 48)}px`);

  const rect = leaveButton.getBoundingClientRect();
  const maxX = Math.max(12, window.innerWidth - rect.width - 18);
  const maxY = Math.max(12, window.innerHeight - rect.height - 18);
  const x = Math.round(12 + Math.random() * (maxX - 12));
  const y = Math.round(84 + Math.random() * Math.max(30, maxY - 84));

  leaveButton.classList.add("is-floating");
  leaveButton.style.left = `${x}px`;
  leaveButton.style.top = `${y}px`;
  leaveButton.textContent = leaveAttempts > 3 ? "まだ退室？" : "退室";
  leaveMessage.textContent = leaveMessages[Math.min(leaveAttempts - 1, leaveMessages.length - 1)];
}

function openPanel(name) {
  const panel = document.querySelector(`[data-panel="${name}"]`);
  if (!panel) return;
  if (window.matchMedia("(max-width: 760px)").matches) {
    panels.forEach((item) => item.classList.remove("active"));
  }
  panel.classList.add("active");
  panel.style.zIndex = String(++topZ);
  if (name === "tokyo42" && !codeLoaded) {
    codeLoaded = true;
    loadAllCode(document.querySelector("[data-code-all]"));
  }
  if (name === "mail" && mailIcon) mailIcon.classList.remove("has-new-mail");
  if (name === "board") refreshBoard();
  if (name === "terminal" && terminalInput) {
    setTimeout(() => terminalInput.focus(), 120);
  } else if (name === "game-number") {
    setTimeout(() => document.querySelector("[data-number-input]")?.focus(), 120);
  } else {
    setTimeout(() => panel.focus({ preventScroll: true }), 120);
  }
}

function closePanel(button) {
  endDrag();
  const panel = button.closest("[data-panel]");
  if (panel) panel.classList.remove("active");
}

function updateClock() {
  const now = new Date();
  const time = new Intl.DateTimeFormat("ja-JP", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(now);
  const date = new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(now);
  clock.innerHTML = `${time}<br>${date}`;
}

function beginDrag(event, panel) {
  if (window.matchMedia("(max-width: 760px)").matches) return;
  if (event.button !== 0) return;
  if (event.target.closest("button, input, textarea, a")) return;
  const rect = panel.getBoundingClientRect();
  dragging = {
    panel,
    offsetX: event.clientX - rect.left,
    offsetY: event.clientY - rect.top,
    pointerId: event.pointerId
  };
  panel.style.zIndex = String(++topZ);
  panel.setPointerCapture(event.pointerId);
  event.preventDefault();
}

function dragPanel(event) {
  if (!dragging) return;
  const width = dragging.panel.offsetWidth;
  const height = dragging.panel.offsetHeight;
  const maxX = window.innerWidth - width - 8;
  const maxY = window.innerHeight - height - 62;
  const x = Math.min(Math.max(8, event.clientX - dragging.offsetX), Math.max(8, maxX));
  const y = Math.min(Math.max(8, event.clientY - dragging.offsetY), Math.max(8, maxY));
  dragging.panel.style.left = `${x}px`;
  dragging.panel.style.top = `${y}px`;
}

function endDrag(event) {
  if (!dragging) return;
  const pointerId = event?.pointerId ?? dragging.pointerId;
  if (pointerId !== undefined && dragging.panel.hasPointerCapture(pointerId)) {
    dragging.panel.releasePointerCapture(pointerId);
  }
  dragging = null;
}

function appendTerminalLine(text, className = "") {
  if (!terminalLog) return;
  const line = document.createElement("p");
  if (className) line.className = className;
  line.textContent = text;
  terminalLog.appendChild(line);
  terminalLog.scrollTop = terminalLog.scrollHeight;
}

function getRiddleKeys() {
  return Object.keys(riddleLetters);
}

function getRiddleKeyword() {
  return getRiddleKeys()
    .map((key) => (riddleProgress[key] ? riddleLetters[key] : "?"))
    .join("");
}

function allRiddleGamesDone() {
  return getRiddleKeys().every((key) => riddleProgress[key]);
}

function updateRiddleHub() {
  getRiddleKeys().forEach((key) => {
    const slot = document.querySelector(`[data-riddle-letter="${key}"]`);
    if (slot) {
      slot.textContent = riddleProgress[key] ? riddleLetters[key] : "?";
      slot.classList.toggle("is-found", riddleProgress[key]);
    }
  });

  document.querySelectorAll("[data-riddle-game]").forEach((button) => {
    const key = button.dataset.riddleGame;
    button.classList.toggle("is-complete", Boolean(riddleProgress[key]));
  });

  const hint = document.querySelector("[data-riddle-hint]");
  if (hint) {
    hint.textContent = allRiddleGamesDone()
      ? "キーワード完成: rain。この言葉が指すものを、サイトのどこかから自分で見つけよう。"
      : `現在のキーワード: ${getRiddleKeyword()}`;
  }
}

function completeRiddleGame(key) {
  if (!riddleLetters[key]) return;
  if (!riddleProgress[key]) {
    riddleProgress[key] = true;
    appendTerminalLine(`LETTER FOUND: ${riddleLetters[key]}`, "terminal-success");
  }
  updateRiddleHub();
  if (allRiddleGamesDone() && !riddleCompleteAnnounced) {
    riddleCompleteAnnounced = true;
    appendTerminalLine("KEYWORD COMPLETE: rain", "terminal-success");
    appendTerminalLine("この言葉が指すものを、自分の力で探し出そう。");
  }
}

function openRiddleClearWindow() {
  if (!allRiddleGamesDone()) return;
  openPanel("riddle-clear");
  unlockClearMail();
}

function startStopGame() {
  const time = document.querySelector("[data-stop-time]");
  const startButton = document.querySelector("[data-stop-start]");
  const stopButton = document.querySelector("[data-stop-stop]");
  const message = document.querySelector("[data-stop-message]");
  if (!time || !startButton || !stopButton || !message) return;

  if (stopgameState?.timer) window.clearInterval(stopgameState.timer);
  stopgameState = {
    startedAt: performance.now(),
    timer: null
  };
  time.textContent = "0.00";
  message.textContent = "10秒に近いと思ったところで stop を押してください。";
  startButton.disabled = true;
  stopButton.disabled = false;
  stopgameState.timer = window.setInterval(() => {
    const elapsed = (performance.now() - stopgameState.startedAt) / 1000;
    time.textContent = elapsed.toFixed(2);
  }, 30);
}

function stopStopGame() {
  const startButton = document.querySelector("[data-stop-start]");
  const stopButton = document.querySelector("[data-stop-stop]");
  const message = document.querySelector("[data-stop-message]");
  const time = document.querySelector("[data-stop-time]");
  if (!stopgameState || !message || !time) return;

  window.clearInterval(stopgameState.timer);
  stopgameState.timer = null;
  const elapsed = (performance.now() - stopgameState.startedAt) / 1000;
  time.textContent = elapsed.toFixed(2);
  if (startButton) startButton.disabled = false;
  if (stopButton) stopButton.disabled = true;

  if (elapsed >= 9.1 && elapsed <= 10.1) {
    message.textContent = `成功。${riddleLetters.stopgame} を獲得しました。`;
    completeRiddleGame("stopgame");
  } else {
    message.textContent = "失敗。9.1秒から10.1秒の間を狙ってください。";
  }
}

function resetNumberGame() {
  numberTarget = Math.floor(Math.random() * 10) + 1;
  const input = document.querySelector("[data-number-input]");
  const message = document.querySelector("[data-number-message]");
  if (input) input.value = "";
  if (message) message.textContent = "数字を入力して answer を押してください。";
}

function submitNumberGuess() {
  if (!numberTarget) resetNumberGame();
  const input = document.querySelector("[data-number-input]");
  const message = document.querySelector("[data-number-message]");
  if (!input || !message) return;

  const guess = Number(input.value);
  if (!Number.isInteger(guess) || guess < 1 || guess > 10) {
    message.textContent = "1から10までの整数を入力してください。";
    return;
  }
  if (guess === numberTarget) {
    message.textContent = `正解。${riddleLetters.numbergame} を獲得しました。`;
    completeRiddleGame("numbergame");
  } else {
    message.textContent = guess < numberTarget ? "もっと大きい数字です。" : "もっと小さい数字です。";
  }
  input.value = "";
  input.focus();
}

function renderQuizQuestion() {
  const question = document.querySelector("[data-quiz-question]");
  const choices = document.querySelector("[data-quiz-choices]");
  const message = document.querySelector("[data-quiz-message]");
  if (!question || !choices || !message) return;

  if (riddleProgress.quizgame) {
    question.textContent = "クイズはクリア済みです。";
    choices.innerHTML = "";
    message.textContent = `${riddleLetters.quizgame} を獲得済みです。`;
    return;
  }

  const current = quizQuestions[quizIndex];
  question.textContent = current.text;
  choices.innerHTML = "";
  current.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = `${index + 1}. ${choice}`;
    button.addEventListener("click", () => submitQuizAnswer(String(index + 1)));
    choices.appendChild(button);
  });
  message.textContent = `${quizIndex + 1} / ${quizQuestions.length}`;
}

function submitQuizAnswer(choice) {
  const message = document.querySelector("[data-quiz-message]");
  const current = quizQuestions[quizIndex];
  if (!current || !message) return;

  if (choice !== current.answer) {
    message.textContent = "不正解。サイト内の情報をもう一度探してみてください。";
    return;
  }

  quizIndex += 1;
  if (quizIndex >= quizQuestions.length) {
    message.textContent = `全問正解。${riddleLetters.quizgame} を獲得しました。`;
    completeRiddleGame("quizgame");
    renderQuizQuestion();
    return;
  }
  renderQuizQuestion();
}

function submitGoldbach() {
  const input = document.querySelector("[data-goldbach-input]");
  const message = document.querySelector("[data-goldbach-message]");
  if (!message) return;
  goldbachTries += 1;
  message.textContent = goldbachMessages[(goldbachTries - 1) % goldbachMessages.length];
  if (input) input.value = "";
}

function resetBreakoutState() {
  const canvas = document.querySelector("[data-breakout-canvas]");
  const message = document.querySelector("[data-breakout-message]");
  if (!canvas) return;

  const rows = 3;
  const cols = 5;
  const brickGap = 6;
  const brickWidth = (canvas.width - 44 - brickGap * (cols - 1)) / cols;
  const bricks = [];
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      bricks.push({
        x: 22 + col * (brickWidth + brickGap),
        y: 24 + row * 20,
        width: brickWidth,
        height: 14,
        alive: true
      });
    }
  }

  breakoutState = {
    canvas,
    context: canvas.getContext("2d"),
    bricks,
    balls: [{ x: canvas.width / 2, y: canvas.height - 62, dx: 2.4, dy: -2.8, r: 5 }],
    paddleX: canvas.width / 2 - 58,
    paddleWidth: 116,
    paddleHeight: 12,
    running: false,
    keys: { left: false, right: false }
  };
  if (message) message.textContent = "start を押して開始してください。";
  drawBreakout();
}

function drawBreakout() {
  if (!breakoutState) return;
  const { canvas, context, bricks, balls, paddleX, paddleWidth, paddleHeight } = breakoutState;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#05070b";
  context.fillRect(0, 0, canvas.width, canvas.height);

  bricks.forEach((brick) => {
    if (!brick.alive) return;
    context.fillStyle = "#f8fafc";
    context.fillRect(brick.x, brick.y, brick.width, brick.height);
    context.strokeStyle = "#111827";
    context.strokeRect(brick.x, brick.y, brick.width, brick.height);
  });

  context.fillStyle = "#e5e7eb";
  context.fillRect(paddleX, canvas.height - 24, paddleWidth, paddleHeight);
  context.fillStyle = "#7dd3fc";
  balls.forEach((ball) => {
    context.beginPath();
    context.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
    context.fill();
  });
}

function moveBreakoutPaddle() {
  if (!breakoutState) return;
  const speed = 9;
  if (breakoutState.keys.left) breakoutState.paddleX -= speed;
  if (breakoutState.keys.right) breakoutState.paddleX += speed;
  breakoutState.paddleX = Math.min(
    Math.max(0, breakoutState.paddleX),
    breakoutState.canvas.width - breakoutState.paddleWidth
  );
}

function updateBreakout() {
  if (!breakoutState?.running) return;
  moveBreakoutPaddle();
  const state = breakoutState;
  const { canvas, bricks } = state;
  const nextBalls = [];

  state.balls.forEach((ball) => {
    ball.x += ball.dx;
    ball.y += ball.dy;

    if (ball.x <= ball.r || ball.x >= canvas.width - ball.r) ball.dx *= -1;
    if (ball.y <= ball.r) ball.dy *= -1;

    const paddleTop = canvas.height - 24;
    if (
      ball.y + ball.r >= paddleTop &&
      ball.y - ball.r <= paddleTop + state.paddleHeight &&
      ball.x >= state.paddleX &&
      ball.x <= state.paddleX + state.paddleWidth &&
      ball.dy > 0
    ) {
      ball.dy = -Math.abs(ball.dy);
      ball.dx += (ball.x - (state.paddleX + state.paddleWidth / 2)) / 45;
    }

    bricks.forEach((brick) => {
      if (!brick.alive) return;
      const hit =
        ball.x + ball.r > brick.x &&
        ball.x - ball.r < brick.x + brick.width &&
        ball.y + ball.r > brick.y &&
        ball.y - ball.r < brick.y + brick.height;
      if (hit) {
        brick.alive = false;
        ball.dy *= -1;
      }
    });

    if (ball.y <= canvas.height + 30) nextBalls.push(ball);
  });

  state.balls = nextBalls.length
    ? nextBalls
    : [{ x: canvas.width / 2, y: canvas.height - 62, dx: 2.4, dy: -2.8, r: 5 }];

  if (bricks.every((brick) => !brick.alive)) {
    state.running = false;
    const message = document.querySelector("[data-breakout-message]");
    if (message) message.textContent = `クリア。${riddleLetters.breakoutclone} を獲得しました。`;
    completeRiddleGame("breakoutclone");
    drawBreakout();
    return;
  }

  drawBreakout();
  window.requestAnimationFrame(updateBreakout);
}

function startBreakoutGame() {
  if (!breakoutState || riddleProgress.breakoutclone) resetBreakoutState();
  if (!breakoutState) return;
  if (breakoutState.running) return;
  const message = document.querySelector("[data-breakout-message]");
  breakoutState.running = true;
  if (message) message.textContent = "ブロックを全部壊してください。";
  window.requestAnimationFrame(updateBreakout);
}

function initRiddleGames() {
  updateRiddleHub();
  resetNumberGame();
  renderQuizQuestion();
  resetBreakoutState();

  document.querySelector("[data-stop-start]")?.addEventListener("click", startStopGame);
  document.querySelector("[data-stop-stop]")?.addEventListener("click", stopStopGame);
  document.querySelector("[data-number-submit]")?.addEventListener("click", submitNumberGuess);
  document.querySelector("[data-number-reset]")?.addEventListener("click", resetNumberGame);
  document.querySelector("[data-breakout-start]")?.addEventListener("click", startBreakoutGame);

  const numberInput = document.querySelector("[data-number-input]");
  numberInput?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") submitNumberGuess();
  });

  document.querySelector("[data-goldbach-submit]")?.addEventListener("click", submitGoldbach);
  document.querySelector("[data-goldbach-input]")?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") submitGoldbach();
  });

  const canvas = document.querySelector("[data-breakout-canvas]");
  canvas?.addEventListener("pointermove", (event) => {
    if (!breakoutState || !breakoutState.running) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = rect.width ? canvas.width / rect.width : 1;
    const x = (event.clientX - rect.left) * scaleX;
    breakoutState.paddleX = Math.min(
      Math.max(0, x - breakoutState.paddleWidth / 2),
      canvas.width - breakoutState.paddleWidth
    );
    drawBreakout();
  });

  // stopgame: Space / Enter で start と stop をトグル
  document.querySelector('[data-panel="game-stop"]')?.addEventListener("keydown", (event) => {
    if (event.target.closest("button, input, a, textarea")) return;
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      if (stopgameState && stopgameState.timer) stopStopGame();
      else startStopGame();
    }
  });

  // breakout: ← → でパドル移動、Space / Enter で開始
  const breakoutPanel = document.querySelector('[data-panel="game-breakout"]');
  breakoutPanel?.addEventListener("keydown", (event) => {
    if (event.target.closest("input, a, textarea")) return;
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      if (!breakoutState || !breakoutState.running) return;
      if (event.key === "ArrowLeft") breakoutState.keys.left = true;
      else breakoutState.keys.right = true;
    } else if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      startBreakoutGame();
    }
  });
  breakoutPanel?.addEventListener("keyup", (event) => {
    if (!breakoutState) return;
    if (event.key === "ArrowLeft") breakoutState.keys.left = false;
    if (event.key === "ArrowRight") breakoutState.keys.right = false;
  });

  // quiz: 数字キー 1〜3 で選択
  document.querySelector('[data-panel="game-quiz"]')?.addEventListener("keydown", (event) => {
    if (event.target.closest("input, a, textarea")) return;
    if (!/^[1-9]$/.test(event.key)) return;
    const buttons = document.querySelectorAll("[data-quiz-choices] button");
    const index = Number(event.key) - 1;
    if (index >= 0 && index < buttons.length) {
      event.preventDefault();
      buttons[index].click();
    }
  });
}

function runTerminalCommand(rawValue) {
  const command = rawValue.trim();
  if (!command) return;
  appendTerminalLine(`C:\\PROFILE> ${command}`, "terminal-command");

  const normalized = command.toLowerCase();
  if (normalized === "help") {
    appendTerminalLine("使えるコマンド: ls / playriddle / clear");
  } else if (normalized === "ls" || normalized === "dir") {
    playriddleUnlocked = true;
    appendTerminalLine("playriddle.exe");
    appendTerminalLine("新しいコマンドが使えるようになりました: playriddle", "terminal-success");
  } else if (normalized === "playriddle") {
    if (!playriddleUnlocked) {
      appendTerminalLine("playriddle.exe が見つかりません。先に ls を実行してください。", "terminal-error");
      return;
    }
    riddleStarted = true;
    appendTerminalLine("今からあなたにはこのウェブサイトに隠された謎を解いてもらいます。", "terminal-success");
    appendTerminalLine("5つのゲームのうち4つを解けば、答えのキーワードが出ます。");
    openPanel("riddle-hub");
  } else if (normalized === "clear" || normalized === "cls") {
    terminalLog.innerHTML = "";
  } else {
    appendTerminalLine(`'${command}' は認識されません。ls か help を試してください。`, "terminal-error");
  }
}

function renderMailMessage(key) {
  const message = mailMessages[key];
  if (!message || !mailFrom || !mailSubject || !mailBody) return;

  mailItems.forEach((item) => {
    item.classList.toggle("is-active", item.dataset.mailMessage === key);
    if (item.dataset.mailMessage === key) item.classList.remove("is-new");
  });

  mailFrom.textContent = message.from;
  mailSubject.textContent = message.subject;
  mailBody.innerHTML = "";
  message.body.forEach((text) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    mailBody.appendChild(paragraph);
  });
}

function unlockClearMail() {
  if (puzzleSolved) return;
  puzzleSolved = true;

  if (clearMailItem) {
    clearMailItem.hidden = false;
    clearMailItem.classList.add("is-new");
  }
  if (mailIcon) mailIcon.classList.add("has-new-mail");
  appendTerminalLine("新着メールが届きました: 謎解きクリアおめでとう", "terminal-success");

  const mailPanel = document.querySelector('[data-panel="mail"]');
  if (mailPanel?.classList.contains("active")) {
    renderMailMessage("clear");
  }
}

function restoreMailState() {
  puzzleSolved = false;
  if (clearMailItem) {
    clearMailItem.hidden = true;
    clearMailItem.classList.remove("is-new");
  }
  if (mailIcon) mailIcon.classList.remove("has-new-mail");
  renderMailMessage("welcome");
}

function renderHobbyGallery() {
  if (!hobbyGallery) return;
  hobbyGallery.innerHTML = "";

  hobbyPhotos.forEach(([src, label], index) => {
    const link = document.createElement("a");
    link.className = "hobby-photo";
    link.href = src;
    link.target = "_blank";
    link.rel = "noopener";
    const isSecretRain = src.endsWith("hobby-40.jpg");
    if (isSecretRain) {
      link.addEventListener("click", (event) => {
        if (!allRiddleGamesDone()) return;
        event.preventDefault();
        openRiddleClearWindow();
      });
    }

    const image = document.createElement("img");
    image.src = src;
    image.alt = `${label} ${index + 1}`;
    image.loading = "lazy";

    const caption = document.createElement("span");
    caption.textContent = label;

    link.append(image, caption);
    hobbyGallery.appendChild(link);
  });
}

function playBgmNote() {
  if (!audioContext) return;
  const now = audioContext.currentTime;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const frequency = bgmNotes[bgmStep % bgmNotes.length];

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(frequency, now);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.16, now + 0.03);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.42);
  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start(now);
  oscillator.stop(now + 0.46);
  bgmStep += 1;
}

function stopBgm() {
  if (bgmTimer) window.clearInterval(bgmTimer);
  bgmTimer = null;
  if (bgmToggle) {
    bgmToggle.textContent = "再生";
    bgmToggle.setAttribute("aria-pressed", "false");
    bgmToggle.classList.remove("is-playing");
  }
}

async function toggleBgm() {
  if (bgmTimer) {
    stopBgm();
    return;
  }

  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) {
    if (bgmToggle) bgmToggle.textContent = "非対応";
    return;
  }

  audioContext ||= new AudioContext();
  if (audioContext.state === "suspended") await audioContext.resume();
  bgmStep = 0;
  playBgmNote();
  bgmTimer = window.setInterval(playBgmNote, 480);
  bgmToggle.textContent = "停止";
  bgmToggle.setAttribute("aria-pressed", "true");
  bgmToggle.classList.add("is-playing");
}

async function fetchText(path) {
  const response = await fetch(path, { cache: "no-store" });
  if (!response.ok) throw new Error(`${response.status} ${path}`);
  return response.text();
}

function formatCodeLabel(path) {
  return path.replace("./assets/42tokyo/", "");
}

function getCodeFileButtons() {
  return document.querySelectorAll("[data-code-file], [data-code-all]");
}

function renderCodeFileButtons() {
  if (!codeFileList) return;
  codeFileList.innerHTML = "";

  codeFiles.forEach((path) => {
    const label = formatCodeLabel(path);
    const button = document.createElement("button");
    button.className = "code-file-button";
    button.type = "button";
    button.dataset.codeFile = path;
    button.textContent = label;
    button.addEventListener("click", () => loadCodeFile(path, label, button));
    codeFileList.appendChild(button);
  });
}

function setActiveCodeButton(button) {
  getCodeFileButtons().forEach((item) => item.classList.remove("is-active"));
  if (button) button.classList.add("is-active");
}

async function loadCodeFile(path, label, button) {
  if (!codeViewer) return;
  setActiveCodeButton(button);
  codeViewer.textContent = "読み込み中...";
  if (codeTitle) codeTitle.textContent = label;
  if (codeOpenLink) codeOpenLink.href = path;

  try {
    codeViewer.textContent = await fetchText(path);
  } catch {
    codeViewer.textContent = `${label} を読み込めませんでした。\n\nローカルで index.html を直接開いている場合、ブラウザが fetch を止めることがあります。\n公開サーバー、またはローカルサーバー経由で開くと、このビュー内にコードが表示されます。\n\n別タブで開く: ${path}`;
  }
}

async function loadAllCode(button) {
  if (!codeViewer) return;
  setActiveCodeButton(button);
  codeViewer.textContent = "読み込み中...";
  if (codeTitle) codeTitle.textContent = "42 Tokyo 全体";
  if (codeOpenLink) codeOpenLink.href = codeFiles[0];

  try {
    const chunks = await Promise.all(
      codeFiles.map(async (path) => {
        const text = await fetchText(path);
        return `/* ===== ${formatCodeLabel(path)} ===== */\n${text}`;
      })
    );
    codeViewer.textContent = chunks.join("\n\n");
  } catch {
    codeViewer.textContent = "コード全体を読み込めませんでした。公開サーバーかローカルサーバー経由で開くと表示できます。";
  }
}

function setContactStatus(text, kind) {
  if (!contactStatus) return;
  contactStatus.textContent = text;
  contactStatus.className = "contact-status" + (kind ? ` is-${kind}` : "");
}

async function handleContactSubmit(event) {
  event.preventDefault();
  if (!contactForm) return;
  if (contactForm.action.includes("REPLACE_WITH_YOUR_ID")) {
    setContactStatus("送信先が未設定です。公開時に Formspree のフォームIDを設定すると送信できます。", "error");
    return;
  }
  setContactStatus("送信中…", "");
  try {
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: new FormData(contactForm),
      headers: { Accept: "application/json" }
    });
    if (response.ok) {
      contactForm.reset();
      setContactStatus("送信しました。ありがとうございます。", "success");
    } else {
      setContactStatus("送信に失敗しました。時間をおいて再度お試しください。", "error");
    }
  } catch {
    setContactStatus("送信できませんでした。ネットワーク環境をご確認ください。", "error");
  }
}

function readLocalBoardPosts() {
  try {
    const raw = window.localStorage.getItem(BOARD_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeLocalBoardPosts(posts) {
  try {
    window.localStorage.setItem(BOARD_STORAGE_KEY, JSON.stringify(posts.slice(0, 100)));
  } catch {
    // localStorage が使えない環境（プライベートモードや file://）では何もしない。
  }
}

async function loadBoardPosts() {
  if (BOARD_API) {
    try {
      const response = await fetch(BOARD_API, { headers: { Accept: "application/json" } });
      if (response.ok) {
        const data = await response.json();
        return Array.isArray(data) ? data : [];
      }
    } catch {
      // API に到達できないときは空表示にする。
    }
    return [];
  }
  return readLocalBoardPosts();
}

async function addBoardPost(post) {
  if (BOARD_API) {
    await fetch(BOARD_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post)
    });
    return;
  }
  const posts = readLocalBoardPosts();
  posts.unshift(post);
  writeLocalBoardPosts(posts);
}

function formatBoardTime(iso) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("ja-JP", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  }).format(date);
}

function renderBoard(posts) {
  if (!boardList) return;
  if (boardNote) {
    boardNote.textContent = BOARD_API
      ? ""
      : "※現在はこの端末にだけ保存されます（サーバー公開後は全員で共有予定）。";
  }
  boardList.innerHTML = "";
  if (!posts.length) {
    const empty = document.createElement("li");
    empty.className = "board-empty";
    empty.textContent = "まだ書き込みはありません。最初の足あとを残してみてください。";
    boardList.appendChild(empty);
    return;
  }
  posts.forEach((post) => {
    const item = document.createElement("li");
    item.className = "board-post";

    const head = document.createElement("div");
    head.className = "board-post-head";
    const name = document.createElement("strong");
    name.textContent = post.name ? post.name : "ゲスト";
    const time = document.createElement("time");
    time.textContent = formatBoardTime(post.time);
    head.append(name, time);

    const body = document.createElement("p");
    body.textContent = post.message;

    item.append(head, body);
    boardList.appendChild(item);
  });
}

async function refreshBoard() {
  renderBoard(await loadBoardPosts());
}

async function handleBoardSubmit(event) {
  event.preventDefault();
  const message = (boardMessageInput?.value || "").trim();
  if (!message) return;
  const post = {
    name: (boardNameInput?.value || "").trim().slice(0, 24),
    message: message.slice(0, 200),
    time: new Date().toISOString()
  };
  await addBoardPost(post);
  if (boardMessageInput) boardMessageInput.value = "";
  refreshBoard();
}

enterButton.addEventListener("click", showDesktop);
leaveButton.addEventListener("pointerenter", moveLeaveButton);
leaveButton.addEventListener("click", moveLeaveButton);
leaveButton.addEventListener("focus", moveLeaveButton);

openers.forEach((button) => {
  button.addEventListener("click", () => openPanel(button.dataset.window));
});

panels.forEach((panel) => {
  const titlebar = panel.querySelector(".window-titlebar");
  const close = panel.querySelector("[data-close]");

  panel.setAttribute("role", "dialog");
  panel.setAttribute("aria-modal", "false");
  panel.tabIndex = -1;
  const titleLabel = titlebar.querySelector("span");
  if (titleLabel) panel.setAttribute("aria-label", titleLabel.textContent.trim());

  panel.addEventListener("pointerdown", () => {
    panel.style.zIndex = String(++topZ);
  });

  titlebar.addEventListener("pointerdown", (event) => beginDrag(event, panel));
  panel.addEventListener("pointermove", dragPanel);
  panel.addEventListener("pointerup", endDrag);
  panel.addEventListener("pointercancel", endDrag);
  panel.addEventListener("lostpointercapture", endDrag);
  close.addEventListener("click", () => closePanel(close));
});

const allButton = document.querySelector("[data-code-all]");
if (allButton) {
  allButton.addEventListener("click", () => loadAllCode(allButton));
}

mailItems.forEach((button) => {
  button.addEventListener("click", () => renderMailMessage(button.dataset.mailMessage));
});

if (terminalForm && terminalInput) {
  terminalForm.addEventListener("submit", (event) => {
    event.preventDefault();
    runTerminalCommand(terminalInput.value);
    terminalInput.value = "";
  });
}

if (bgmToggle) {
  bgmToggle.addEventListener("click", toggleBgm);
}

if (contactForm) {
  contactForm.addEventListener("submit", handleContactSubmit);
}

if (boardForm) {
  boardForm.addEventListener("submit", handleBoardSubmit);
}

window.addEventListener("pointerup", endDrag);

window.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  const active = [...panels].filter((panel) => panel.classList.contains("active"));
  if (!active.length) return;
  const top = active.reduce((a, b) =>
    Number(b.style.zIndex || 0) >= Number(a.style.zIndex || 0) ? b : a
  );
  top.classList.remove("active");
});

updateClock();
restoreMailState();
renderHobbyGallery();
renderCodeFileButtons();
initRiddleGames();
refreshBoard();
setInterval(updateClock, 30000);
