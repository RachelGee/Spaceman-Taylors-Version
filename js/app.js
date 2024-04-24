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
/*---------- Variables (state) ---------*/


/*----- Cached Element References  -----*/
const statusMessageEl = document.querySelector('#status-Message');
const restartButtonEl = document.querySelector('#restartButton');


/*-------------- Functions -------------*/


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