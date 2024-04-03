// Create function to get computers choice.
// Create a new function that plays one round.
// Make players choice case sensitive

function getComputerChoice() {
    const possibleChoices = ["Rock", "Paper", "Scissors"];
    const randomChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
    return randomChoice;
}

// console.log(getComputerChoice())

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a draw!\nComputer chose ${computerSelection}`;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return `Congratulations, you won!\nComputer chose ${computerSelection}`;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return `Congratulations, you won!\nComputer chose ${computerSelection}`;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return `Congratulations, you won\nComputer chose ${computerSelection}`;
    } else {
        return `You lost!\nComputer chose ${computerSelection}.`;
    }
} 

const playerSelection = "Rock"
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));