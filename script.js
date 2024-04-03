// Create function to get computer's choice.
function getComputerChoice() {
    const possibleChoices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * possibleChoices.length);
    return possibleChoices[randomIndex];
}

// Create a new function that plays one round.
function playRound(playerSelection, computerSelection) {
    const playerChoiceLower = playerSelection.toLowerCase();
    const computerChoiceLower = computerSelection.toLowerCase();
    
    if (playerChoiceLower === computerChoiceLower) {
        return `It's a draw!\nComputer chose ${computerSelection}`;
    } else if (playerChoiceLower === "rock" && computerChoiceLower === "scissors") {
        return `Congratulations, you won!\nComputer chose ${computerSelection}`;
    } else if (playerChoiceLower === "paper" && computerChoiceLower === "rock") {
        return `Congratulations, you won!\nComputer chose ${computerSelection}`;
    } else if (playerChoiceLower === "scissors" && computerChoiceLower === "paper") {
        return `Congratulations, you won!\nComputer chose ${computerSelection}`;
    } else {
        return `You lost!\nComputer chose ${computerSelection}.`;
    }
}

// Create a function to play the game 5 times.
function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 0; round < 5; round++) {
        const playerSelection = prompt("Enter your choice (rock, paper, or scissors): ").toLowerCase();
        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerSelection, computerSelection);
        
        console.log(roundResult);

        if (roundResult.includes("won")) {
            playerScore++;
        } else if (roundResult.includes("lost")) {
            computerScore++;
        }
    }

    console.log(`Final Score:\nPlayer: ${playerScore}\nComputer: ${computerScore}`);

    // Determine the overall winner
    let winner = "";
    if (playerScore > computerScore) {
        winner = "Player";
    } else if (playerScore < computerScore) {
        winner = "Computer";
    } else {
        winner = "It's a tie!";
    }

    console.log(`Overall Winner: ${winner}`);
}

// Call the playGame function to start the game.
playGame();
