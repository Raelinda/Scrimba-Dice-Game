// variables that grab DOM elements
const gameBoard = document.getElementById('gameBoard')
const message = document.getElementById('message')

const badWitchScoreboard = document.getElementById('badWitchScoreboard')
const ggoodWitchScoreboard = document.getElementById('goodWitchScoreboard')

const badWitchCurrentScore = document.getElementById('badWitchCurrentScore')
const goodWitchCurrentScore = document.getElementById('goodWitchCurrentScore')

const startBtn = document.getElementById('startBtn')
const rollBtn = document.getElementById('rollBtn')
const resetBtn = document.getElementById('resetBtn')

const topDie = document.getElementById('top-die')
const bottomDie = document.getElementById('bottom-die')


// variables that change during game play
let badWitchScore = 0
let goodWitchScore = 0
let badWitchTurn = false

// reusable functions
function animate(){

topDie.classList.add("animate-dice-left") 
bottomDie.classList.add("animate-dice-right")

topDie.classList.remove("animate-dice-left") 
bottomDie.classList.remove("animate-dice-right")

// trigger a DOM reflow 
void topDie.offsetWidth
void bottomDie.offsetWidth

topDie.classList.add("animate-dice-left") 
bottomDie.classList.add("animate-dice-right")


}
// event listeners

startBtn.addEventListener('click', function(){
    const whichWitchNumber = Math.floor(Math.random() * 2) + 1
    startBtn.style.display = "none"
    rollBtn.style.display = "block"
    if (whichWitchNumber === 1){
        badWitchTurn = true
        message.innerText = "Bad Witch goes first"
        goodWitchScoreBoard.classList.remove('box-shadow')
    } else  {
        message.innerText = "Good Witch goes first"
        badWitchScoreBoard.classList.remove('box-shadow')
    }
})

rollBtn.addEventListener('click', function () {
    const randomNumber1 = Math.floor(Math.random() * 6) + 1
    const randomNumber2 = Math.floor(Math.random() * 6) + 1
    topDie.textContent = randomNumber1
    bottomDie.textContent = randomNumber2
    let numberTotal = randomNumber1 + randomNumber2

    if (badWitchTurn){
        badWitchCurrentScore.textContent = badWitchScore += numberTotal
        badWitchScoreBoard.classList.remove('box-shadow')
        goodWitchScoreBoard.classList.add('box-shadow')
        
    } else {
        goodWitchCurrentScore.textContent = goodWitchScore += numberTotal
        badWitchScoreBoard.classList.add('box-shadow')
        goodWitchScoreBoard.classList.remove('box-shadow') 
    }
        badWitchTurn = !badWitchTurn
        animate()
    })
        

// console.log(badWitch)
