// Define global variables
let playerScore = 0;
let computerScore = 0;

const results1 = document.querySelector("#results1");
const results2 = document.querySelector("#results2");
const results3 = document.querySelector("#results3");
const buttons = document.querySelectorAll("button");

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

function compWin(outstring1, playerChoice, computerChoice) {
    outstring1 = `Computer: ${computerChoice} - ${playerChoice} :Player`;
    computerScore++;
    return outstring1;
}

function playerWin(outstring1, playerChoice, computerChoice) {
    outstring1 = `Computer: ${computerChoice} - ${playerChoice} :Player`;
    playerScore++;
    return outstring1;
}

function compWin2(outstring2) {
    outstring2 = "Computer wins!";
    return outstring2;
}

function playerWin2(outstring2) {
    outstring2 = "You win!";
    return outstring2;
}

function playRound(playerChoice, computerChoice) {
    let outstring1;
    let outstring2;
    let outstring3;
    if (playerChoice === computerChoice) {
        outstring1 = "Draw!";
        outstring2 = "    ";
    } else if (playerChoice === "ROCK") {
        if (computerChoice === "PAPER") {
            outstring1 = compWin(outstring1, playerChoice, computerChoice);
            outstring2 = compWin2(outstring2);
        } else if (computerChoice === "SCISSORS") {
            outstring1 = playerWin(outstring1, playerChoice, computerChoice);
            outstring2 = playerWin2(outstring2);
        }
    } else if (playerChoice === "PAPER") {
        if (computerChoice === "ROCK") {
            outstring1 = playerWin(outstring1, playerChoice, computerChoice);
            outstring2 = playerWin2(outstring2);
        } else if (computerChoice === "SCISSORS") {
            outstring1 = compWin(outstring1, playerChoice, computerChoice);
            outstring2 = compWin2(outstring2);
        }
    } else if (playerChoice === "SCISSORS") {
        if (computerChoice === "ROCK") {
            outstring1 = compWin(outstring1, playerChoice, computerChoice);   
            outstring2 = compWin2(outstring2);       
        } else if (computerChoice === "PAPER") {
            outstring1 = playerWin(outstring1, playerChoice, computerChoice);
            outstring2 = playerWin2(outstring2);
        }  
    }
    console.log(outstring1);
    console.log(outstring2);
    results1.textContent = outstring1;
    results2.textContent = outstring2;
    console.log(`PLAYER: ${playerScore} - ${computerScore} :COMPUTER`);
    results3.textContent = `PLAYER: ${playerScore} - ${computerScore} :COMPUTER`;
    return null
}

for (const button of buttons) {
    button.addEventListener("click", () => playRound(button.id.toUpperCase(), getComputerChoice()))
}

// console.log(getComputerChoice())
