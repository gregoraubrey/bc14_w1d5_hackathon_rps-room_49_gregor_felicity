const options = ["rock", "paper", "scissors"];

let wins = 0;
let losses = 0;
let draws = 0;
let possiblecomputerSelections = ["rock","paper", "scissors"];
let computerSelection = possiblecomputerSelections[Math.floor((Math.random()*possiblecomputerSelections.length))];

function computerPlay() {
  /*
  TODO: Insert your code for your function that randomly generates a computer move here (from task 4). 
  
  This function should use the return keyword to return a string of either "rock", "paper", or "scissors".
  */

  computerSelection = possiblecomputerSelections[Math.floor((Math.random()*possiblecomputerSelections.length))];
    let playerMove = ""
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    if (randomNumber <= 90)
    {
        // work out winning move
        if(playerMove === "rock")
        {
            computerSelection = "paper";
        }
        if(playerMove === "paper")
        {
            computerSelection = "scissors";
        }
        if(playerMove === "scissors")
        {
            computerSelection = "rock";
        }
    }

    return computerSelection
}
function playRound(playerSelection, computerSelection) {
  /*
  TODO: Insert your code for your function that decides who the winner is here (from task 2). 

  This function should take in two moves (the player's move and the computer's move) and return a string with the game result.

  For example, if the player's move is rock and the computer's move is scissors, the function should use the return keyword to return "You win!"
  */

  let winner = ["lost", "drawn", "won"];

    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors")
    {
        if (playerSelection === "rock" && computerSelection === "scissors")
        {
            wins++;
            return `You have ` + winner[2] + ` this round.`;
        }

        if (playerSelection === "rock" && computerSelection === "paper")
        {
            losses++;
            return `You have ` + winner[0] + ` this round.`;
        }

        if (playerSelection === "scissors" && computerSelection === "paper")
        {
            wins++;
            return `You have ` + winner[2] + ` this round.`;
        }

        if (playerSelection === "scissors" && computerSelection === "rock")
        {
            losses++;
            return `You have ` + winner[0] + ` this round.`;
        }

        if (playerSelection === "paper" && computerSelection === "rock")
        {
            wins++;
            return `You have ` + winner[2] + ` this round.`;
        }

        if (playerSelection === "paper" && computerSelection === "scissors")
        {
            losses++;
            return `You have ` + winner[0] + ` this round.`;
        }

        // If there is a draw
        if (playerSelection === computerSelection)
        {
            draws++;
            return `You have ` + winner[1] + ` this round.`;
        }
    }
    else
    {
        alert("Invalid input.")
    }

    
}
function updateResultText(result) {
  const resultText = document.getElementById("result-text");
  resultText.textContent = result;
}
function handleClick(event) {
  const playerSelection = event.target.id;
  const computerSelection = computerPlay();
  const result = playRound(playerSelection, computerSelection);
  updateResultText(result);
}
const buttons = document.querySelectorAll(".game-options button");
buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});
