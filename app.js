let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
let computerChoice = "";

// Initialize DOM manipulation from rock-paper-scissors ui elements
const allBtn = document.querySelector("#play-button");
const panel = document.querySelector("#game-panel");
const score = document.querySelector("#score");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

// round winner announcement UI
let winner = document.createElement("span");
winner.setAttribute("class", "winner");
panel.insertBefore(winner, score);

// 5 round winner announcement UI
let final = document.createElement("span");
final.setAttribute("class", "final");
panel.insertBefore(final, score);

// add event listener to the button to get human choice and make custom event
allBtn.addEventListener("click", (e) => {
  let target = e.target;

  switch (target.id) {
    case "rock":
      humanChoice = "rock";
      break;
    case "paper":
      humanChoice = "paper";
      break;
    case "scissors":
      humanChoice = "scissors";
      break;
  }

  const play = new CustomEvent("play", {
    detail: { message: `You choose ${humanChoice}` },
  });

  allBtn.dispatchEvent(play);
});

// Get computer choice
function getComputerChoice() {
  let randomInt = Math.floor(Math.random() * 100) + 1;

  if (randomInt >= 1 && randomInt <= 33) {
    computerChoice = "rock";
  } else if (randomInt >= 34 && randomInt <= 66) {
    computerChoice = "paper";
  } else if (randomInt > 66) {
    computerChoice = "scissors";
  }
  return computerChoice;
}

allBtn.addEventListener("play", () => {
  getComputerChoice();
  playRound(computerChoice, humanChoice);
  updateScore(computerScore, humanScore);
  stopGame(computerScore, humanScore);
});

function playRound(computerChoice, humanChoice) {
  winner.textContent = "";

  if (computerChoice === "rock" && humanChoice === "paper") {
    winner.textContent = `You win this round! You choose ${humanChoice}, Computer choose ${computerChoice}.`;
    humanScore += 1;
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    winner.textContent = `You lose this round! You choose ${humanChoice}, Computer choose ${computerChoice}.`;
    computerScore += 1;
  } else if (computerChoice === "rock" && humanChoice === "rock") {
    winner.textContent = `It's a tie! You choose ${humanChoice}, Computer choose ${computerChoice}.`;
  } else if (computerChoice === "paper" && humanChoice === "paper") {
    winner.textContent = `It's a tie! You choose ${humanChoice}, Computer choose ${computerChoice}.`;
  } else if (computerChoice === "paper" && humanChoice === "scissors") {
    winner.textContent = `You win this round! You choose ${humanChoice}, Computer choose ${computerChoice}.`;
    humanScore += 1;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    winner.textContent = `You lose this round! You choose ${humanChoice}, Computer choose ${computerChoice}.`;
    computerScore += 1;
  } else if (computerChoice === "scissors" && humanChoice === "scissors") {
    winner.textContent = `It's a tie! You choose ${humanChoice}, Computer choose ${computerChoice}.`;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    winner.textContent = `You lose this round! You choose ${humanChoice}, Computer choose ${computerChoice}.`;
    computerScore += 1;
  } else if (computerChoice === "scissors" && humanChoice === "rock") {
    winner.textContent = `You win this round! You choose ${humanChoice}, Computer choose ${computerChoice}.`;
    humanScore += 1;
  }
  /*
  console.log(`Human score: ${humanScore}\nComputer score: ${computerScore}`);
  */
}

function updateScore(computerScore, humanScore) {
  let humanUi = document.querySelector(".human-score");
  let computerUi = document.querySelector(".computer-score");

  humanUi.textContent = `${humanScore}`;
  computerUi.textContent = `${computerScore}`;
}

function stopGame(computerScore, humanScore) {
  if (humanScore === 5) {
    final.textContent = "You win the game!";
    rock.setAttribute("disabled", "true");
    paper.setAttribute("disabled", "true");
    scissors.setAttribute("disabled", "true");
  } else if (computerScore === 5) {
    final.textContent = "Computer win the game!";
    rock.setAttribute("disabled", "true");
    paper.setAttribute("disabled", "true");
    scissors.setAttribute("disabled", "true");
  }
}
/*
console.log("Computer selects " + computerSelection);
console.log("Human selects " + humanSelection);
*/
