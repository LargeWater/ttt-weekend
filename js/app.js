/*-------------------------------- Constants --------------------------------*/
const players = {

}
const winningCombos = []

/*---------------------------- Variables (state) ----------------------------*/
let tttBoard, turn, winner



/*------------------------ Cached Element References ------------------------*/
const squareEls = document.getElementById('sq0')
const resetBtn = document.getElementById('reset-btn')

let messageEl = document.getElementById('message')

/*----------------------------- Event Listeners -----------------------------*/
// get click from boxes
squareEls.addEventListener('click', handleClick)
// get click from start/reset
resetBtn.addEventListener('click', handleClick)

/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  tttBoard = [null, null, null, null, null, null, null, null, null]
  turn = 1
  render()
  winner = null
  console.log('Game loaded')
}
function handleClick() {
  //check is square has already been clicked
  //if so, nothing
  //if no, change to corresponding player signifier
  turn *= -1
  // render()
}

function render() {
  tttBoard.forEach(element => {
    
  });
  if (turn = 1) {
    messageEl.textContent = 'Player 1, your move!'
  } else if (turn = -1) {
    messageEl.textContent = 'Player 2, your move!'
  }
  if (winner === 'T') {
    messageEl.textContent = "It's a tie! Play again?"
  } else if (winner = 1){
    messageEl.textContent = 'Congratulations! Player 1 has won!'
  } else if (winner = -1) {
    messageEl.textContent = 'Congratulations! Player 2 has won!'
  }
  console.log(winner)
  console.log(turn)

}

function reset() {
  
}