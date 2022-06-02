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
// get click from boxes
// document.querySelector("section.board").addEventListener("click", handleClick);

squareEls.forEach((square) => {
  square.addEventListener("click", handleClick);
});
// get click from start/reset
resetBtn.addEventListener("click", reset);

/*-------------------------------- Functions --------------------------------*/

function init() {
  board = [null, null, null, null, null, null, null, null, null];
  turn = 1;
  winner = null;
  console.log("Game loaded");
  // messageEl.textContent = "Player 1, start the game!";
  messageEl.textContent = `Player 1, your move`;
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
      num.style.backgroundColor = "black";
    } else if (board[idx] === -1) {
      num.style.backgroundColor = "antiquewhite";
    } else if (board[idx] === null) {
      num.textContent = "";
      num.style.backgroundColor = 'rgb(77, 137, 84)'
    }
  });
  messageEl.textContent = `Player ${turn === 1 ? "1" : "2"}, your move`;
  if (winner === "T") {
    messageEl.textContent = "It's a tie! Play again?";
  } else if (winner === 1) {
    messageEl.textContent = "Congratulations! Player 1 has won!";
  } else if (winner === -1) {
    messageEl.textContent = "Congratulations! Player 2 has won!";
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
    } else if (board.includes(null) === false) {
      return 'T'
    }
  }

  return null;
  render()
}

function reset() {
  // board = [null, null, null, null, null, null, null, null, null];
  init();
  resetBtn.setAttribute("hidden", true);
}

init();
