// Define global variables
let playerScore = 0;
let computerScore = 0;


// Define functions
function getComputerChoice() {
    const randgen = Math.random();
    let outstring;
    if (randgen >= 0.66) {
        outstring = "SCISSORS";
    } else if (randgen >= 0.33) {
        outstring = "ROCK";
    } else {
        outstring = "PAPER"
    }
    return outstring
}

function getPlayerChoice() {
    let valuecheck = false;
    let outstring;
    while (valuecheck === false) {
        outstring = window.prompt("Rock, paper or scissors?").toUpperCase();
        if (outstring === "ROCK" || outstring === "SCISSORS" || outstring === "PAPER") {
            valuecheck = true;
        }
    }
    return outstring;
}

function compWin(outstring, playerChoice, computerChoice) {
    outstring = `Computer: ${computerChoice} - ${playerChoice} :Player
Computer wins!`;
    computerScore++;
    return outstring;
}

function playerWin(outstring, playerChoice, computerChoice) {
    outstring = `Computer: ${computerChoice} - ${playerChoice} :Player
You win!`;
    playerScore++;
    return outstring;
}

function playRound(playerChoice, computerChoice) {
    let outstring;
    if (playerChoice === computerChoice) {
        outstring = "Draw!";
    } else if (playerChoice === "ROCK") {
        if (computerChoice === "PAPER") {
            outstring = compWin(outstring, playerChoice, computerChoice);
        } else if (computerChoice === "SCISSORS") {
            outstring = playerWin(outstring, playerChoice, computerChoice);
        }
    } else if (playerChoice === "PAPER") {
        if (computerChoice === "ROCK") {
            outstring = playerWin(outstring, playerChoice, computerChoice);
        } else if (computerChoice === "SCISSORS") {
            outstring = compWin(outstring, playerChoice, computerChoice);
        }
    } else if (playerChoice === "SCISSORS") {
        if (computerChoice === "ROCK") {
            outstring = compWin(outstring, playerChoice, computerChoice);          
        } else if (computerChoice === "PAPER") {
            outstring = playerWin(outstring, playerChoice, computerChoice);
        }  
    }
    return outstring;
}

for(let gameCounter=0; gameCounter<5; gameCounter++) {
    console.log(playRound(getPlayerChoice(), getComputerChoice()))
}

// console.log(getComputerChoice())
