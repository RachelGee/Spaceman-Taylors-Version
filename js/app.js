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
const skiptButton = $(`#skip`)
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
        display: "Romeo _ _ _ _ me I've been feeling so alone",
        answer: 'SAVE'
    },
    {
        display: "I've got long list of ex- _ _ _ _ _ _ they'll tell you I'm insane",
        answer: 'LOVERS'
    },
    {
        display: "I promise that you'll never find _ _ _ _ _ _ _ like ME",
        answer: 'ANOTHER'
    }
]


/*---------- Variables (state) ---------*/
let answerFeedback = "OOPS! Wrong guess, try again!"
let correctGuessBox = ""
let turnIndex = 0;


/*----- Cached Element References  -----*/
const statusMessageEl = document.querySelector('#status-Message');
const restartButtonEl = document.querySelector('#restartButton');
const skipButtonEl = document.querySelector('#skipButton');
const keyboardButtons = document.querySelectorAll(`.key`);

/*-------------- Functions -------------*/


const guess = (event) => {
    const value = event.target.value // a letter from your button
    const turn = turns[turnIndex]
    if (turn.answer.indexOf(value) > -1) {
        console.log("YAYYYYY")
        // do stuff for when it's right
        // disable that button
        // show a message (dialog)
        // fill in the blank in the display
        // you can use the result of turn.answer.indexOf(value) to know where to put the letter
        // __ __ __ __ __
    } else {
        console.log("BOOOO")
        // do different stuff
        // disable that button
        // show a message
        // move taylor
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

keyboardButtons.forEach(function(button) {
    button.addEventListener('click', guess)
})