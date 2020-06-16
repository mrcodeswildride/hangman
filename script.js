let dictionary = [`the`, `of`, `and`, `to`, `a`, `in`, `for`, `is`, `on`, `that`, `by`, `this`, `with`, `i`, `you`, `it`, `not`, `or`, `be`, `are`, `from`, `at`, `as`, `your`, `all`, `have`, `new`, `more`, `an`, `was`, `we`, `will`, `home`, `can`, `us`, `about`, `if`, `page`, `my`, `has`, `search`, `free`, `but`, `our`, `one`, `other`, `do`, `no`, `information`, `time`, `they`, `site`, `he`, `up`, `may`, `what`, `which`, `their`, `news`, `out`, `use`, `any`, `there`, `see`, `only`, `so`, `his`, `when`, `contact`, `here`, `business`, `who`, `web`, `also`, `now`, `help`, `get`, `pm`, `view`, `online`, `c`, `e`, `first`, `am`, `been`, `would`, `how`, `were`, `me`, `s`, `services`, `some`, `these`, `click`, `its`, `like`, `service`, `x`, `than`, `find`, `price`, `date`, `back`, `top`, `people`, `had`, `list`, `name`, `just`, `over`, `state`, `year`, `day`, `into`, `email`, `two`, `health`, `n`, `world`, `re`, `next`, `used`, `go`, `b`, `work`, `last`, `most`, `products`, `music`, `buy`, `data`, `make`, `them`, `should`, `product`, `system`, `post`, `her`, `city`, `t`, `add`, `policy`, `number`, `such`, `please`, `available`, `copyright`, `support`, `message`, `after`, `best`, `software`, `then`, `jan`, `good`, `video`, `well`, `d`, `where`, `info`, `rights`, `public`, `books`, `high`, `school`, `through`, `m`, `each`, `links`, `she`, `review`, `years`, `order`, `very`, `privacy`, `book`, `items`, `company`, `r`, `read`, `group`, `need`, `many`, `user`, `said`, `de`, `does`, `set`, `under`, `general`, `research`, `university`, `january`, `mail`, `full`, `map`, `reviews`, `program`, `life`, `know`, `games`, `way`, `days`, `management`, `p`, `part`, `could`, `great`, `united`, `hotel`, `real`, `f`, `item`, `international`, `center`, `ebay`, `must`, `store`, `travel`, `comments`, `made`, `development`, `report`, `off`, `member`, `details`, `line`, `terms`, `before`, `hotels`, `did`, `send`, `right`, `type`, `because`, `local`, `those`, `using`, `results`, `office`, `education`, `national`, `car`, `design`, `take`, `posted`, `internet`, `address`, `community`, `within`, `states`, `area`, `want`, `phone`, `dvd`, `shipping`, `reserved`, `subject`, `between`, `forum`, `family`, `l`, `long`, `based`, `w`, `code`, `show`, `o`, `even`, `black`, `check`, `special`, `prices`, `website`, `index`, `being`, `women`, `much`, `sign`, `file`, `link`, `open`, `today`, `technology`, `south`, `case`, `project`, `same`, `pages`, `uk`, `version`, `section`, `own`, `found`, `sports`, `house`, `related`, `security`, `both`, `g`, `county`, `american`, `photo`, `game`, `members`, `power`, `while`, `care`, `network`, `down`, `computer`, `systems`, `three`, `total`, `place`, `end`, `following`, `download`, `h`, `him`, `without`, `per`, `access`, `think`, `north`, `resources`, `current`, `posts`, `big`, `media`, `law`, `control`, `water`, `history`, `pictures`, `size`, `art`, `personal`, `since`, `including`, `guide`, `shop`, `directory`, `board`, `location`, `change`, `white`, `text`, `small`, `rating`, `rate`, `government`, `children`, `during`, `usa`, `return`, `students`, `v`, `shopping`, `account`, `times`, `sites`, `level`, `digital`, `profile`, `previous`, `form`, `events`, `love`, `old`, `john`, `main`, `call`, `hours`, `image`, `department`, `title`, `description`, `non`, `k`, `y`, `insurance`, `another`, `why`, `shall`, `property`, `class`, `cd`, `still`, `money`, `quality`, `every`, `listing`, `content`, `country`, `private`, `little`, `visit`, `save`, `tools`, `low`, `reply`, `customer`, `december`, `compare`, `movies`, `include`, `college`, `value`, `article`, `york`, `man`, `card`, `jobs`, `provide`, `j`, `food`, `source`, `author`, `different`, `press`, `u`, `learn`, `sale`, `around`, `print`, `course`, `job`, `canada`, `process`, `teen`, `room`, `stock`, `training`, `too`, `credit`, `point`, `join`, `science`, `men`, `categories`, `advanced`, `west`, `sales`, `look`, `english`, `left`, `team`, `estate`, `box`, `conditions`, `select`, `windows`, `photos`, `gay`, `thread`, `week`, `category`, `note`, `live`, `large`, `gallery`, `table`, `register`, `however`, `june`, `october`, `november`, `market`, `library`, `really`, `action`, `start`, `series`, `model`, `features`, `air`, `industry`, `plan`, `human`, `provided`, `tv`, `yes`, `required`, `second`, `hot`, `accessories`, `cost`, `movie`, `forums`, `march`, `la`, `september`, `better`, `say`, `questions`, `july`, `yahoo`, `going`, `medical`]

let submitSection = document.getElementById(`submitSection`)
let wordInput = document.getElementById(`wordInput`)
let submitButton = document.getElementById(`submitButton`)
let randomButton = document.getElementById(`randomButton`)
let submitParagraph = document.getElementById(`submitParagraph`)
let imageSection = document.getElementById(`imageSection`)
let blankSection = document.getElementById(`blankSection`)
let letterSection = document.getElementById(`letterSection`)

let word
let blanks = []
let stage = 0
let gameOver = false

submitButton.addEventListener(`click`, submitWord)
randomButton.addEventListener(`click`, pickRandomWord)

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

  for (let letter of word) {
    let blank = document.createElement(`div`)
    blank.classList.add(`blank`)
    blankSection.appendChild(blank)
    blanks.push(blank)
  }

  for (let i = 65; i <= 90; i++) {
    let letter = document.createElement(`div`)
    letter.classList.add(`letter`)
    letter.innerHTML = String.fromCharCode(i)
    letter.addEventListener(`click`, guessLetter)
    letterSection.appendChild(letter)
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