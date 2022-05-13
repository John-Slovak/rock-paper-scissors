function computerSelect() {
    let num = Math.floor(Math.random() * 3);
    switch(num) {
        case 0:
            return 'ROCK';
            break;
        case 1:
            return 'PAPER';
            break;
        case 2:
            return 'SCISSORS';
            break;
    }
}

let computerPlay = '';
let playerPlay = '';

let playerJavaScore = 0;
let computerJavaScore = 0;
let roundOutcome = '';

function round(funA, funB) {
    if (funA == funB) {
        roundOutcome = 'tie'
    } else if (
    (funA == 'ROCK' && funB == 'SCISSORS') || 
    (funA == 'PAPER' && funB == 'ROCK') || 
    (funA == 'SCISSORS' && funB == 'PAPER')) {
        playerJavaScore++
        roundOutcome = 'won'
    } else if (
    (funA == 'ROCK' && funB == 'PAPER') || 
    (funA == 'PAPER' && funB == 'SCISSORS') || 
    (funA == 'SCISSORS' && funB == 'ROCK')) {
        computerJavaScore++
        roundOutcome = 'lost'
    }
}


/*function game() {
    for (''; playerScore < 5 && computerScore < 5; '') {
        if 
console.log('You : ' + roundOutcome);
console.log('Your score: ' + playerScore);
console.log('CPUs score: ' + computerScore);
    }
}*/

function gameCheck() {
    if (playerJavaScore === 5) {
        alert('You Won!');
        restart();
    } else if (computerJavaScore === 5) {
        alert('You Lost!');
        restart();
    } else {
        
    }
}

function restart() {
    playerJavaScore = 0;
    computerJavaScore = 0;
    playerScore.textContent = playerJavaScore;
    computerScore.textContent = computerJavaScore;
}

const rockButton = document.querySelector('.rock-button');
const paperButton = document.querySelector('.paper-button');
const scissorsButton = document.querySelector('.scissors-button');
playerScore = document.querySelector('.player-score');
computerScore = document.querySelector('.computer-score');
const startGame = document.querySelector('start-game');
const restartGame = document.querySelector('.restart');


rockButton.addEventListener('click', () => {
    playerPlay = 'ROCK';
    computerSelect();
    computerPlay = computerSelect();
    round(playerPlay, computerPlay);
    console.log(roundOutcome);
    playerScore.textContent = playerJavaScore;
    computerScore.textContent = computerJavaScore;
    gameCheck();
});

paperButton.addEventListener('click', () => {
    playerPlay = 'PAPER';
    computerSelect();
    computerPlay = computerSelect();
    round(playerPlay, computerPlay);
    console.log(roundOutcome);
    playerScore.textContent = playerJavaScore;
    computerScore.textContent = computerJavaScore;
    gameCheck();
});

scissorsButton.addEventListener('click', () => {
    playerPlay = 'SCISSORS';
    computerSelect();
    computerPlay = computerSelect();
    round(playerPlay, computerPlay);
    console.log(roundOutcome);
    playerScore.textContent = playerJavaScore;
    computerScore.textContent = computerJavaScore;
    gameCheck();
});


// startGame.addEventListener('click', game); 