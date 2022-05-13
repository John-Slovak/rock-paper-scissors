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
        setTimeout(() => {
            playerJavaScore++
            windows.style.backgroundColor = '#1c8b4e';
            roundOutcome = 'won'
        }, '1000');
    } else if (
    (funA == 'ROCK' && funB == 'PAPER') || 
    (funA == 'PAPER' && funB == 'SCISSORS') || 
    (funA == 'SCISSORS' && funB == 'ROCK')) {
        setTimeout(() => {
            computerJavaScore++
            windows.style.backgroundColor = '#8b1e25';
            roundOutcome = 'lost'
        }, '1000');
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
        game.style.display = 'none';
        windows.style.backgroundColor = '#2cda7a';
        won.style.display = 'block';
        restart();
    } else if (computerJavaScore === 5) {
        game.style.display = 'none';
        windows.style.backgroundColor = '#da2c38';
        lost.style.display = 'block';
        restart();
    } else {
        
    }
}

function restart() {
    rockButton.style.display = 'none';
    rockOff.style.display = 'block';
    paperButton.style.display = 'none';
    gameRestart.style.display = 'block';
    scissorsButton.style.display = 'none';
    scissorsOff.style.display = 'block';
}

function turnOffIcons() {
    lr.style.display = 'none';
    lp.style.display = 'none';
    ls.style.display = 'none';
    rr.style.display = 'none';
    rp.style.display = 'none';
    rs.style.display = 'none';
}

function cpuIcon() {
    if (computerPlay == 'ROCK') {
        rr.style.display = 'block';
    } else if (computerPlay == 'PAPER') {
        rp.style.display = 'block';
    } else if (computerPlay == 'SCISSORS') {
        rs.style.display = 'block';
    }
}

const rockButton = document.querySelector('.rock-button');
const paperButton = document.querySelector('.paper-button');
const scissorsButton = document.querySelector('.scissors-button');
const rockOff = document.querySelector('.rock-off')
const scissorsOff = document.querySelector('.scissors-off')
playerScore = document.querySelector('.player-score');
computerScore = document.querySelector('.computer-score');
const gameStart = document.querySelector('.start');
const gameRestart = document.querySelector('.restart');
const windows = document.querySelector('.window');
const won = document.querySelector('.won');
const lost = document.querySelector('.lost');
const game = document.querySelector('.game');
const rps = document.querySelector('.rps');
const lr = document.querySelector('#left-rock');
const lp = document.querySelector('#left-paper');
const ls = document.querySelector('#left-scissors');
const rr = document.querySelector('#right-rock');
const rp = document.querySelector('#right-paper');
const rs = document.querySelector('#right-scissors');


rockButton.addEventListener('click', () => {
    windows.style.backgroundColor = '#363636';
    playerPlay = 'ROCK';
    turnOffIcons();
    lr.style.display = 'block';
    computerSelect();
    computerPlay = computerSelect();
    setTimeout(cpuIcon, '500');
    round(playerPlay, computerPlay);
    setTimeout(() => {
        console.log(roundOutcome);
        playerScore.textContent = playerJavaScore;
        computerScore.textContent = computerJavaScore;
        gameCheck();
    }, '1010');
});

paperButton.addEventListener('click', () => {
    windows.style.backgroundColor = '#363636';
    playerPlay = 'PAPER';
    turnOffIcons();
    lp.style.display = 'block';
    computerSelect();
    computerPlay = computerSelect();
    setTimeout(cpuIcon, '500');
    round(playerPlay, computerPlay);
    setTimeout(() => {
        console.log(roundOutcome);
        playerScore.textContent = playerJavaScore;
        computerScore.textContent = computerJavaScore;
        gameCheck();
    }, '1010');
});

scissorsButton.addEventListener('click', () => {
    windows.style.backgroundColor = '#363636';
    playerPlay = 'SCISSORS';
    turnOffIcons();
    ls.style.display = 'block';
    computerSelect();
    computerPlay = computerSelect();
    setTimeout(cpuIcon, '500');
    round(playerPlay, computerPlay);
    setTimeout(() => {
        console.log(roundOutcome);
        playerScore.textContent = playerJavaScore;
        computerScore.textContent = computerJavaScore;
        gameCheck();
    }, '1010');
});

gameStart.addEventListener('click', () => {
    rockOff.style.display = 'none';
    rockButton.style.display = 'block';
    scissorsOff.style.display = 'none';
    scissorsButton.style.display = 'block';
    gameStart.style.display = 'none';
    paperButton.style.display = 'block';
    windows.style.backgroundColor = '#363636';
    rps.style.display = 'none';
    game.style.display = 'flex';
})

gameRestart.addEventListener('click', () => {
    windows.style.backgroundColor = '#363636';
    won.style.display = 'none';
    lost.style.display = 'none';
    game.style.display = 'flex';
    rockOff.style.display = 'none';
    rockButton.style.display = 'block';
    scissorsOff.style.display = 'none';
    scissorsButton.style.display = 'block';
    gameRestart.style.display = 'none';
    paperButton.style.display = 'block';
    turnOffIcons();
    playerJavaScore = 0;
    computerJavaScore = 0;
    playerScore.textContent = playerJavaScore;
    computerScore.textContent = computerJavaScore;
})