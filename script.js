let dictionary = [`code`, `element`, `tag`, `attribute`, `style`, `selector`, `number`, `string`, `variable`, `event`, `function`, `condition`, `logic`, `increment`, `true`, `false`, `array`, `index`, `loop`, `parameter`]

let submitSection = document.getElementById(`submitSection`)
let wordInput = document.getElementById(`wordInput`)
let submitButton = document.getElementById(`submitButton`)
let randomButton = document.getElementById(`randomButton`)
let submitParagraph = document.getElementById(`submitParagraph`)
let imageSection = document.getElementById(`imageSection`)
let blankSection = document.getElementById(`blankSection`)
let letterSection = document.getElementById(`letterSection`)
let letters = document.getElementsByClassName(`letter`)

let word
let blanks = []
let stage = 0
let gameOver = false

submitButton.addEventListener(`click`, submitWord)
randomButton.addEventListener(`click`, pickRandomWord)

for (let letter of letters) {
  letter.addEventListener(`click`, guessLetter)
}

function submitWord() {
  word = wordInput.value.trim().toUpperCase()

  if (word == ``) {
    submitParagraph.innerHTML = `Please type a word.`
  }
  else {
    startGame()
  }
}

function pickRandomWord() {
  let randomNumber = Math.floor(Math.random() * dictionary.length)
  word = dictionary[randomNumber].toUpperCase()

  startGame()
}

function startGame() {
  submitSection.style.display = `none`
  imageSection.style.display = `block`
  blankSection.style.display = `block`
  letterSection.style.display = `block`

  for (let letter of word) {
    let blank = document.createElement(`div`)
    blank.classList.add(`blank`)
    blankSection.appendChild(blank)
    blanks.push(blank)
  }
}

function guessLetter() {
  if (!this.classList.contains(`guessed`) && !gameOver) {
    this.classList.add(`guessed`)
    let numRight = 0

    for (let i = 0; i < word.length; i++) {
      if (this.innerHTML == word[i]) {
        blanks[i].innerHTML = this.innerHTML
        numRight = numRight + 1
      }
    }

    if (numRight == 0) {
      badGuess()
    }
    else {
      goodGuess()
    }
  }
}

function badGuess() {
  stage = stage + 1
  image.style.backgroundImage = `url("stages/${stage}.png")`

  if (stage == 7) {
    messageParagraph.innerHTML = `You lose`
    gameOver = true

    for (let i = 0; i < blanks.length; i++) {
      if (blanks[i].innerHTML == ``) {
        blanks[i].classList.add(`missed`)
        blanks[i].innerHTML = word[i]
      }
    }
  }
}

function goodGuess() {
  if (blanksAreFull()) {
    messageParagraph.innerHTML = `You win`
    gameOver = true
  }
}

function blanksAreFull() {
  for (let blank of blanks) {
    if (blank.innerHTML == ``) {
      return false
    }
  }

  return true
}