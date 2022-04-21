const squares = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelectorAll('#time-left')
const score = document.querySelectorAll('#score')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null

function randomSquare() {
    squares.forEach(square => {
      square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.Id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPostion) {
            if (square.id == hitPostion) {
                result++
                score.textContent = result
                hitPosition = null
            }
     }
})

function moveMole() {
    timerId = setInterval(randomSquare, 500)
}

moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearTinterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! Your final score is ' + result)
    }
}

let countDownTimerId = setInterval(countDown, 100)
})