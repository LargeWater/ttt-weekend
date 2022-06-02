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
let tttBoard, turn, winner;

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll(".cell");
const resetBtn = document.getElementById("reset-btn");
const board = document.querySelector("div.cell");
let messageEl = document.getElementById("message");

/*----------------------------- Event Listeners -----------------------------*/
// get click from boxes
document.querySelector("section.board").addEventListener("click", handleClick);

// get click from start/reset
resetBtn.addEventListener("click", reset);

/*-------------------------------- Functions --------------------------------*/

function init() {
  tttBoard = [null, null, null, null, null, null, null, null, null];
  turn = 1;
  render();
  console.log("Game loaded");
  // messageEl.textContent = "Player 1, start the game!";
  messageEl.textContent = `Player ${turn === 1 ? '1' : '2'}, your move`;
}

function handleClick(evt) {
  let sqIdx = parseInt(evt.target.id.substring(2))
  tttBoard[sqIdx] = turn;
  // if (evt[sqIdx] !== null || winner !== null) {
  //     return null
  // }
  render();
  console.log(tttBoard[sqIdx]);
  console.log(tttBoard);
  turn *= -1;
  console.log(evt.target.id.substring(2))
}

// function handleClick(evt) {
//   let sqIdx = evt.target.id.substring
//   turn *= -1
//   messageEl.textContent = `Player ${turn === 1 ? 1 : 2}, your move`;
//   winner = getWinner()
//   render()
// }

function render() {
  squareEls.forEach(function (num, idx) {
    if (tttBoard[idx] === 1) {
      num.textContent = "X";
    } else if (tttBoard[idx] === -1) {
      num.textContent = "O";
    }
    // console.log(tttBoard[num].textContent)
  });
  if (winner === "T") {
    messageEl.textContent = "It's a tie! Play again?";
  } else if (winner === 1) {
    messageEl.textContent = "Congratulations! Player 1 has won!";
  } else if (winner === -1) {
    messageEl.textContent = "Congratulations! Player 2 has won!";
  }
  if (winner != null) {
    resetBtn.removeAttribute("hidden");
  }
  messageEl.textContent = `Player ${turn === -1 ? '1' : '2'}, your move`;
}

function getWinner() {
  winningCombos.forEach((combo) => {
    // find the sum of the values within the board array at indices 0, 1, and 2 of the combo
    // if the absolute value of the sum is 3, there's a winner
    // because you're tracking the turn, you can determine the winner using that variable, which is all you need to return
  });
}

// function getWinner() {
//   for (let i=0; i < winningCombos.length; i++) {
//       if (board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]] === 3) {
//           return 1
//       } else  if (board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]] === -3) {
//           return -1
//       }
//   }
//   return null
// }

function reset() {
  init();
  tttBoard = [null, null, null, null, null, null, null, null, null]
  resetBtn.setAttribute("hidden", true);
}

init();

console.log(winner);
console.log(turn);
