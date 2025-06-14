function getComputerChoice() {
  let randNum = Math.random();
  if (randNum < 0.33) return "rock";
  else if (randNum < 0.67) return "paper";
  else return "scissors";
}

function getHumanChoice() {
  let humanAns = prompt("Pick rock, paper, or scissors: ");
  return humanAns;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoiceLower = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
      console.log("It's a tie! You both chose the same thing!");
    } else if (
      (humanChoice === "rock" && computerChoice == "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice == "paper")
    ) {
      console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
      humanScore = humanScore + 1;
    } else {
      console.log(
        "You lose! " + computerChoice + " beats " + humanChoice + "."
      );
      computerScore = computerScore + 1;
    }
  }

  for (let i = 0; i < 5; i++) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    playRound(humanChoice, computerChoice);
    console.log("Score:: human: " + humanScore + ", comp: " + computerScore);
  }
}

playGame();
console.log("That's 5 rounds! Game over!");
