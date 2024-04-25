
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
const lyricBox = $(`#lyric-box`)
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
let numberOfClicks = 0;



/*----- Cached Element References  -----*/
const statusMessageEl = document.querySelector('#status-message');
const restartButtonEl = document.querySelector('#restartButton');
const skipButtonEl = document.querySelector('#skipButton');
const keyboardButtons = document.querySelectorAll(`.key`);
const guessConsoleContainer = document.querySelector(`#guess-console`);

/*-------------- Functions -------------*/
// //checkForAWinOrLoss(answer){
// Check if number of clicks is under the limit, if not, return “lose”
// Check if length of the correct guesses is the same as the answer, if so, return ‘win’
// Else return;
// }
// WIN FUNCTION = all letter values correctly guessed before 9th turn.

const clearBoard = () => {
    const guessBoxes = document.querySelectorAll('[id^="guess-box"]');
    guessBoxes.forEach(guessBox => {
        console.log(guessBox)
        guessBox.parentNode.removeChild(guessBox);
    })
    keyboardButtons.forEach(button => {
        button.disabled = false
    })
    statusMessageEl.textContent = ""
}

const generateGuessBoxes = () => {
    const letters = turns[turnIndex].answer.split("");
    for(let [index, letter] of letters.entries()){
      let divElement = document.createElement('div');
      console.log(letter);
       divElement.classList.add('key');
       divElement.id=`guess-box-${index}`
       divElement.innerText = "";
       guessConsole.appendChild(divElement);
 }
}

const guess = (event) => {  // pass in turn.answer to check length against right answer
    numberOfClicks += 1
    const value = event.target.value
    const turn = turns[turnIndex]
    const answerIndex = turn.answer.indexOf(value)
    if (answerIndex > -1) {
        console.log("CORRECT", value)
        event.target.disabled = true
        statusMessageEl.textContent = "Yay! That's right! Keep guessing!"
        const letterBox = document.getElementById(`guess-box-${answerIndex}`)
        letterBox.textContent = value 
        //Const correctGuesses = []
        // correctGuess.append(value)
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
    turnIndex = Math.floor(Math.random()* turns.length)
    lyricBox.textContent = turns[turnIndex].display
    console.log(turnIndex)
    generateGuessBoxes()

})

restartButton.addEventListener('click',function(){
    gameBoardPage.style.display = "none" 
    introPage.style.display = "initial"
    clearBoard();
})

skipButton.addEventListener('click',function(){
    if (turnIndex < turns.length -1) {
        turnIndex++;
    }  else {
        turnIndex = 0;
    }
    console.log("Next", turnIndex) // use this to update lyricbox display..maybe change to "NEXT BUTTON"
    })

keyboardButtons.forEach(function(button) {
    button.addEventListener('click', guess)
})

