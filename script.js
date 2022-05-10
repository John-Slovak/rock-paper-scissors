function computerPlay() {
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

function playerPlay() {
    let num = prompt('Choose ROCK, PAPER, or SCISSORS', '');
    num = num.toUpperCase();
    return num;
}

let playerScore = 0;
let computerScore = 0;
let roundOutcome = '';

function round(funA, funB) {
    if (funA == funB) {
        roundOutcome = 'tie'
    } else if (
    (funA == 'ROCK' && funB == 'SCISSORS') || 
    (funA == 'PAPER' && funB == 'ROCK') || 
    (funA == 'SCISSORS' && funB == 'PAPER')) {
        playerScore++
        roundOutcome = 'won'
    } else if (
    (funA == 'ROCK' && funB == 'PAPER') || 
    (funA == 'PAPER' && funB == 'SCISSORS') || 
    (funA == 'SCISSORS' && funB == 'ROCK')) {
        computerScore++
        roundOutcome = 'lost'
    }
}


function game() {
    for (''; playerScore < 5 && computerScore < 5; '') {
        round(playerPlay(), computerPlay());
console.log('You : ' + roundOutcome);
console.log('Your score: ' + playerScore);
console.log('CPUs score: ' + computerScore);
    }
}

game();
/*round(playerPlay(), computerPlay()));
console.log(roundOutcome)
console.log(playerScore)
console.log(computerScore)*/