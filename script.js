//Gets the random generated computer choice
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * choices.length);
  let computerChoice = choices[randomIndex];
  return computerChoice;
}

//Plays one round
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You Win! " + playerSelection + " beats " + computerSelection;
  } else {
    return "You Lose! " + computerSelection + " beats " + playerSelection;
  }
}

//5 rounds of gameplay
function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Choose rock, paper, or scissors");
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.includes("Win")) {
      playerScore++;
    } else if (result.includes("Lose")) {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log("Congratulations! You win the game.");
  } else if (playerScore < computerScore) {
    console.log("Sorry, you lose the game.");
  } else {
    console.log("It's a tie! The game ends in a draw.");
  }
}
game();

