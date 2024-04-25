/* for guess console: make sure to give them class = "key" as divs are added*/


function $(cssSelector) {
    return document.querySelector(cssSelector)
}

console.log('testing');

/*-------------- Constants -------------*/
const introPage = $(`#intro`)
const readyButton = $(`#ready-for-it`)
const rulesPage = $('#rules')
const letsPlayButton = $(`#lets-play`)
const gameBoardPage = $(`#gameboard`)
const restartButton = $(`#restart`)
const skipButton = $(`#skip`)
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const lyricBox = $(`#lyricBox`)
const statusMsg = $(`#status-message`)
const guessConsole =$(`#guess-console`)

const turns = [
    {
        display: "It's me, hi, I'm the _ _ _ _ _ _ _, it's me",
        answer: 'PROBLEM'
    },
    {
        display: "Like can you just not, step on my _ _ _ _ ? You need to calm down",
        answer: 'GOWN'
    },
    {
        display: "I've got a long list of ex- _ _ _ _ _ _ they'll tell you I'm insane",
        answer: 'LOVERS'
    },
    {
        display: "I promise that you'll never find _ _ _ _ _ _ _ like ME",
        answer: 'ANOTHER'
    },
    {
        display: "Romeo _ _ _ _ me I've been feeling so alone",
        answer: 'SAVE'
    },
    {
        display: "And they would toast to me, oh, Let the players play. I'd be just like Leo in Saint- _ _ _ _ _ _",
        answer: 'TROPEZ'
    }
]


/*---------- Variables (state) ---------*/
let correctGuessBox = ""
let turnIndex = 0;


/*----- Cached Element References  -----*/
const statusMessageEl = document.querySelector('#status-message');
const restartButtonEl = document.querySelector('#restartButton');
const skipButtonEl = document.querySelector('#skipButton');
const keyboardButtons = document.querySelectorAll(`.key`);
const guessConsoleContainer = document.querySelector(`#guess-console`);

/*-------------- Functions -------------*/

// Initialize game >> display Lyric (turn) in lyric box

// WIN LOSS FUNCTION


const generateGuessBoxes = () => {
    const word = turns[turnIndex].answer 
    // string.split() to find index of guessed letter placement 
}

const guess = (event) => {
    const value = event.target.value
    const turn = turns[turnIndex]
    if (turn.answer.indexOf(value) > -1) {
        console.log("CORRECT", value)
        event.target.disabled = true
        statusMessageEl.textContent = "Yay! That's right!"
        // do stuff for when it's right
        // fill in the blank in the guess console box
        // use the result of turn.answer.indexOf(value) to know where to put the letter
    } else {
        console.log("WRONG", value)
        event.target.disabled = true
        statusMessageEl.textContent = "Oops! Wrong guess, try again!"
        // move taylor- screenshots in separate assets file and link. Iterate to next image as background
        // allow guessing up to 9 instances??
    }
}

/*----------- Event Listeners ----------*/

readyButton.addEventListener('click',function(){
    introPage.style.display = "none" 
    rulesPage.style.display = "initial"
})

letsPlayButton.addEventListener('click',function(){
    rulesPage.style.display = "none" 
    gameBoardPage.style.display = "initial"
})

restartButton.addEventListener('click',function(){
    gameBoardPage.style.display = "none" 
    rulesPage.style.display = "initial"
})

skipButton.addEventListener('click',function(){
    if (turnIndex < turns.length -1) {
        turnIndex++;
    }  else {
        turnIndex = 0;
    }
    console.log("Next", turnIndex)
    })

keyboardButtons.forEach(function(button) {
    button.addEventListener('click', guess)
})