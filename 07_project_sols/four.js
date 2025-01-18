let randomNumber = ((Math.random() * 100) + 1).toFixed(0)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHigh')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}
function validateGuess(guess) {
    //validating the guess
    if (isNaN(guess)) { alert(`Please enter a valid number`) }
    else if (guess < 1) console.log(`Please enter a number more than 1`)
    else if (guess > 100) console.log(`Please enter a number less than 100`)
    else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    //check if its correct guess
    if (guess === randomNumber) {
        displayMessage(`You guessed it right!!`)
    } else if (guess < randomNumber) {
        displayMessage(`Number is TOOO low`)
    } else {
        displayMessage(`Number is TOOO high`)
    }
}
function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}`
    numGuess++
    remaining.innerHTML = `${10 - numGuess}`
}
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',(e)=>{
        randomNumber = parseInt((Math.random() * 100) + 1).toFixed(0)
        prevGuess = []
        numGuess = 1
        guessSlot.iFnnerHTML = ""
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}

function endGame() {
    userInput.value = ""
    userInput.setAttribute('disabled', '')

    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame()
}