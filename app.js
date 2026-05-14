let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
  function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 100) + 1;
    let comChoice = "";

    if (randomInt >= 1 && randomInt <= 33) {
      comChoice = "rock";
    } else if (randomInt >= 34 && randomInt <= 66) {
      comChoice = "paper";
    } else if (randomInt > 66) {
      comChoice = "scissors";
    }
    return comChoice;
  }
  /*
function getHumanChoice() {
  let humChoice = prompt("Rock, Paper, or Scissors?");

  return humChoice.toLowerCase();
}
*/
  if (computerChoice === "rock" && humanChoice === "paper") {
    console.log("You win (Paper > Rock)!");
    humanScore += 1;
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    console.log("You lose (Scissors < Rock)!");
    computerScore += 1;
  } else if (computerChoice === "rock" && humanChoice === "rock") {
    console.log("It's a tie (Rock = Rock)!");
  } else if (computerChoice === "paper" && humanChoice === "paper") {
    console.log("It's a tie (Paper = Paper)!");
  } else if (computerChoice === "paper" && humanChoice === "scissors") {
    console.log("You win (Scissors < Paper)!");
    humanScore += 1;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    console.log("You lose (Rock < Paper)!");
    computerScore += 1;
  } else if (computerChoice === "scissors" && humanChoice === "scissors") {
    console.log("It's a tie (Scissors = Scissors)!");
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    console.log("You lose (Paper < Scissors)!");
    computerScore += 1;
  } else if (computerChoice === "scissors" && humanChoice === "rock") {
    console.log("You win (Rock < Scissors)!");
    humanScore += 1;
  }
  console.log(`Human score: ${humanScore}\nComputer score: ${computerScore}`);
}

const allBtn = document.querySelector(".play-button");
allBtn.addEventListener("click", playRound);

// function playGame() {

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

playRound(computerSelection, humanSelection);

console.log("Computer selects " + computerSelection);
console.log("Human selects " + humanSelection);
//}
/*
playGame();
playGame();
playGame();
playGame();
playGame();
*/
