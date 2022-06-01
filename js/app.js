/*-------------------------------- Constants --------------------------------*/
const players = {

}
const squareEls = []

const messageEl = document.getElementById('message')

/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner



/*------------------------ Cached Element References ------------------------*/



/*----------------------------- Event Listeners -----------------------------*/
// get click from boxes
squareContainer.addEventListener('click', handleClick)
// get click from start/reset
.reset-btn.addEventListener('click', handleClick)

/*-------------------------------- Functions --------------------------------*/

function init() {
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1
  render()
  winner = null
}
function handleClick() {
  //check is square has already been clicked
  //if so, nothing
  //if no, change to corresponding player signifier
  turn *= -1
  render()
}

function render() {
  board.forEach(element => {
    
  });
  if (turn = 1) {
    messageEl = 'Player 1, your move!'
  } else if (turn = -1) {
    messageEl = 'Player 2, your move!'
  }
  if (winner === 'T') {
    messageEl = "It's a tie! Play again?"
  } else if (winner = 1){
    messageEl = 'Congratulations! Player 1 has won!'
  } else if (winner = -1) {
    messageEl = 'Congratulations! Player 2 has won!'
  }
}

function reset() {

}