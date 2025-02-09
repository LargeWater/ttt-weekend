/*-------------------------------- Constants --------------------------------*/

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner;

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll(".cell");
const resetBtn = document.getElementById("reset-btn");
let messageEl = document.getElementById("message");

/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach((square) => {
  square.addEventListener("click", handleClick);
});

resetBtn.addEventListener("click", reset);

/*-------------------------------- Functions --------------------------------*/

function init() {
  board = [null, null, null, null, null, null, null, null, null];
  turn = 1;
  winner = null;
  render();
}

function handleClick(evt) {
  let sqIdx = parseInt(evt.target.id.replace("sq", ""));
  if (board[sqIdx] !== null) return;
  board[sqIdx] = turn;
  winner = getWinner();
  turn *= -1;
  render();
}

function render() {
  squareEls.forEach(function (num, idx) {
    if (board[idx] === 1) {
      num.style.backgroundColor = "#151515";
    } else if (board[idx] === -1) {
      num.style.backgroundColor = "#fef4e6";
    } else if (board[idx] === null) {
      num.textContent = "";
      num.style.backgroundColor = "#6AA48B";
    }
  });
  messageEl.textContent = `${turn === 1 ? "Black" : "White"}, your move`;
  if (winner === 1) {
    messageEl.textContent = "Black takes the game";
    squareEls.forEach(function (num) {
      num.style.backgroundColor = "#151515";
    });
  } else if (winner === -1) {
    messageEl.textContent = "White takes the game";
    squareEls.forEach(function (num) {
      num.style.backgroundColor = "#fef4e6";
    });
  } else if (winner === "T") {
    messageEl.innerHTML =
      `One of the easiest games of <br>all time and you both lost`;
  }
  if (winner !== null) {
    resetBtn.removeAttribute("hidden");
  }
}

function getWinner() {
  for (let i = 0; i < winningCombos.length; i++) {
    if (
      board[winningCombos[i][0]] +
        board[winningCombos[i][1]] +
        board[winningCombos[i][2]] ===
      3
    ) {
      return 1;
    } else if (
      board[winningCombos[i][0]] +
        board[winningCombos[i][1]] +
        board[winningCombos[i][2]] ===
      -3
    ) {
      return -1;
    }
  }
  if (board.includes(null) === false) {
    return "T";
  }
  return null;
}

function reset() {
  init();
  resetBtn.setAttribute("hidden", true);
}

init();
