let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//This funtion can be made into one line with implicit return.
const generateTarget = () => Math.floor(Math.random() * 10);

const getAbsoluteDistance = (num1, num2) => Math.abs(num1 - num2);

const alert = (humanGuess) => {
  if (humanGuess > 9) {
    console.log("Your number is out of range! Please choose a number between 0-9.")
  }
} 

function compareGuesses (humanGuess, computerGuess, targetNumber) {
  if (humanGuess === targetNumber || humanGuess === computerGuess) {
    return true;
  } else if (getAbolsoluteDistance(humanGuess, targetNumber) > getAbsoluteDistance(computerGuess, targetNumber)) {
    return false;
  } else {
    return true;
  }
}

function updateScore (winner) {
  if (winner === "human") {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
}

const advanceRound = () => currentRoundNumber += 1;
