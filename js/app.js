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

// let sq0, sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8
// sq0 = document.getElementById("sq0").value
// sq1 = document.getElementById("sq1").value
// sq2 = document.getElementById("sq2").value
// sq3 = document.getElementById("sq3").value
// sq4 = document.getElementById("sq4").value
// sq5 = document.getElementById("sq5").value
// sq6 = document.getElementById("sq6").value
// sq7 = document.getElementById("sq7").value
// sq8 = document.getElementById("sq8").value

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll(".cell");
// const resetBtn = document.getElementById('reset-btn')

let messageEl = document.getElementById("message");

/*----------------------------- Event Listeners -----------------------------*/
// get click from boxes
document.querySelector("section.board").addEventListener("click", handleClick);

// get click from start/reset
// resetBtn.addEventListener('click', function(event){
//   //
// })

/*-------------------------------- Functions --------------------------------*/

function init() {
  tttBoard = [null, null, null, null, null, null, null, null, null];
  turn = 1;
  render();
  console.log("Game loaded");
  messageEl.textContent = `Player ${turn === 1 ? 1 : 2}, your move`;
}

function handleClick(evt) {
  // tttBoard.addEventListener('click', handleClick)
  if (tttBoard[idx] !== null) {
    return;
  }
  turn *= -1;
  render();
  console.log(turn);
  console.log("click");
}

function render() {
  let sqIndex;
  tttBoard.forEach(function (element, idx) {
    if (turn === 1) {
      // code to access the element at the matching index in the squareEls array and set it's textContent to 'X'
    } else {
      // code to access the element at the matching index in the squareEls array and set it's textContent to 'O'
    }
  });
  if (winner === "T") {
    messageEl.textContent = "It's a tie! Play again?";
  } else if (winner === 1) {
    messageEl.textContent = "Congratulations! Player 1 has won!";
  } else if (winner === -1) {
    messageEl.textContent = "Congratulations! Player 2 has won!";
  }
  if (winner === 1 || winner === -1 || winner === "T") {
    resetBtn.removeAttribute("hidden");
  }
}

// function reset() {

// }

init();

console.log(winner);
console.log(turn);
console.log(squareEls);
