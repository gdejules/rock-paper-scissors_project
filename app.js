console.log("Hello World!");

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

function getHumanChoice() {
  let humChoice = prompt("Rock, Paper, or Scissors?");

  return humChoice.toLowerCase();
}
