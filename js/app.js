function $(cssSelector) {
    return document.querySelector(cssSelector)
}

console.log('testing');

/*-------------- Constants -------------*/
const introPage = $(`#intro`)
const readyButton = $(`#ready-for-it`)
const rulesPage = $('#rules')
const gameBoardPage = $(`#gameboard`)
const letsPlayButton = $(`#lets-play`)
const restartButton = $(`#restart`)
const skiptButton = $(`#skip`)

/*---------- Variables (state) ---------*/


/*----- Cached Element References  -----*/
const statusMessageEl = document.querySelector('#status-Message');
const restartButtonEl = document.querySelector('#restartButton');


/*-------------- Functions -------------*/
// load lyric to lyric box
// match 

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