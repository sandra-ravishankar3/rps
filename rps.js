const humanScoreDisplay = document.querySelector("#humanScore");
const computerScoreDisplay = document.querySelector("#computerScore");
const displayText = document.querySelector("#result");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randNum = Math.random();
  if (randNum < 0.33) return "rock";
  else if (randNum < 0.67) return "paper";
  else return "scissors";
}

function playRound(humanChoice, computerChoice) {
  humanChoiceLower = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    displayText.textContent = "It's a tie! You both chose the same thing!";
  } else if (
    (humanChoice === "rock" && computerChoice == "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice == "paper")
  ) {
    displayText.textContent =
      "You win! " + humanChoice + " beats " + computerChoice + ".";
    humanScore = humanScore + 1;
  } else {
    displayText.textContent =
      "You lose! " + computerChoice + " beats " + humanChoice + ".";
    computerScore = computerScore + 1;
  }
  humanScoreDisplay.textContent = "Player: " + humanScore;
  computerScoreDisplay.textContent = "Computer: " + computerScore;
}

function checkWinner() {
  if (humanScore === 5) {
    const endGameDisplay = document.querySelector("#endGameDisplay");
    endGameDisplay.textContent =
      "Congratulations! You win! You got to 5 points first!";
  } else if (computerScore === 5) {
    const endGameDisplay = document.querySelector("#endGameDisplay");
    endGameDisplay.textContent =
      "Oh no! You lost! The computer got to 5 points first!";
  }
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () => {
  console.log("clicked");
  const computerChoice = getComputerChoice();
  playRound("rock", computerChoice);
  checkWinner();
});

paperButton.addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  playRound("paper", computerChoice);
  checkWinner();
});

scissorsButton.addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  playRound("scissors", computerChoice);
  checkWinner();
});
