// variables that grab DOM elements
const gameBoard = document.getElementById('gameBoard')
const message = document.getElementById('message')

const badWitchScoreboard = document.getElementById('badWitchScoreboard')
const goodWitchScoreboard = document.getElementById('goodWitchScoreboard')

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
function animate() {
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

function active(remove, add) {
    remove.classList.remove('active')
    add.classList.add('active')
}

function gameOver() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
    topDie.textContent = "👻"
    bottomDie.textContent = "👻"
}

function resetGame() {
    resetBtn.style.display = "none"
    startBtn.style.display = "block"
    badWitchScore = 0
    goodWitchScore = 0
    badWitchTurn = false
    message.innerText = "First witch to 42 wins!"
    badWitchScoreboard.classList.remove('active')
    goodWitchScoreboard.classList.remove('active')
    badWitchCurrentScore.textContent = '0'
    goodWitchCurrentScore.textContent = '0'

}

// event listeners
// ===============
resetBtn.addEventListener('click', function () {
    resetGame()
})
startBtn.addEventListener('click', function () {
    const pickWitch = Math.floor(Math.random() * 2) + 1
    startBtn.style.display = "none"
    rollBtn.style.display = "block"


    if (pickWitch === 1) {
        badWitchTurn = true
        message.innerText = "Bad Witch goes first"
        badWitchScoreboard.classList.add('active')
    } else {
        message.innerText = "Good Witch goes first"
        goodWitchScoreboard.classList.add('active')
    }
})

rollBtn.addEventListener('click', function () {
    const randomNumber1 = Math.floor(Math.random() * 6) + 1
    const randomNumber2 = Math.floor(Math.random() * 6) + 1
    topDie.textContent = randomNumber1
    bottomDie.textContent = randomNumber2
    let numberTotal = randomNumber1 + randomNumber2

    if (badWitchTurn) {
        badWitchCurrentScore.textContent = badWitchScore += numberTotal
        active(badWitchScoreboard, goodWitchScoreboard)
        message.innerText = "Good Witch Turn"

    } else {
        goodWitchCurrentScore.textContent = goodWitchScore += numberTotal
        active(goodWitchScoreboard, badWitchScoreboard)
        message.innerText = "Bad Witch Turn"

    }

    animate()

    if (badWitchScore >= 42) {
        message.innerText = "Bad Witch wins! ✨🌛"
        active(goodWitchScoreboard, badWitchScoreboard)
        gameOver()

    } else if (goodWitchScore >= 42) {
        message.innerText = "Good Witch wins! ✨🌛"
        active(badWitchScoreboard, goodWitchScoreboard)
        gameOver()
    }
    badWitchTurn = !badWitchTurn

})