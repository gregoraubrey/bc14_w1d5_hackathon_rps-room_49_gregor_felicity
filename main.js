// TASK 4 PLAN
// create array which contains the possible moves: rock, paper, scissors
// select random item from the array using Math.floor((Math.random()*arrayName.length))
// assign randomly selected item to the computerMove variable 

// TASK 5 PLAN
// set a variable continueGame = true;
// after the score alert use confirm() to ask if player would like to continue
// use while loop to check if continueGame === true, if true call getWinner function again
// if false break out of while loop

// TASK 6 PLAN
// make gameStats object with the below entries:
// gamesPlayed, increment ++ after return alert("You have ")
// draws: increment ++ after each draw
// losses: increment ++ after each loss
// wins: increment ++ after each win
// totalScore: points total
// print this information after each round before play again confirmation

// TASK 7 PLAN
// make userName variable and prompt user to enter their userName before getWinner function
// restrict userName variable size to 10 or less characters
// restrict userName variable to only start with letters
// restrict userName variable first character must be a capital letter




// BONUS B
// user inputs their move
// computer reads the usermove
// computer works out the winning move against user move


let continueGame = true;
let wins = 0;
let losses = 0;
let draws = 0;
let userName = prompt("What is your name?")

while (!/^[A-Z][a-zA-Z]{0,9}$/.test(userName)) {
    alert("Your name is too long for this game!")
    userName = prompt("What is your name?")
}



function getWinner(playerMove, computerMove) {
    let winner = ["lost", "drawn", "won"];

    if (playerMove === "rock" || playerMove === "paper" || playerMove === "scissors")
    {
        if (playerMove === "rock" && computerMove === "scissors")
        {
            wins++;
            return alert(`You have ` + winner[2] + ` this round, ${userName}.`);
        }

        if (playerMove === "rock" && computerMove === "paper")
        {
            losses++;
            return alert(`You have ` + winner[0] + ` this round, ${userName}.`);
        }

        if (playerMove === "scissors" && computerMove === "paper")
        {
            wins++;
            return alert(`You have ` + winner[2] + ` this round, ${userName}.`);
        }

        if (playerMove === "scissors" && computerMove === "rock")
        {
            losses++;
            return alert(`You have ` + winner[0] + ` this round, ${userName}.`);
        }

        if (playerMove === "paper" && computerMove === "rock")
        {
            wins++;
            return alert(`You have ` + winner[2] + ` this round, ${userName}.`);
        }

        if (playerMove === "paper" && computerMove === "scissors")
        {
            losses++;
            return alert(`You have ` + winner[0] + ` this round, ${userName}.`);
        }

        // If there is a draw
        if (playerMove === computerMove)
        {
            draws++;
            return alert(`You have ` + winner[1] + ` this round, ${userName}.`);
        }
    }
    else
    {
        alert("Invalid input.")
    }
}


let gamesPlayed = 1;
while (continueGame === true) {
    let playerMove = prompt("Choose rock, paper or scissors");
    let possibleComputerMoves = ["rock","paper", "scissors"];
    
    let computerMove = possibleComputerMoves[Math.floor((Math.random()*possibleComputerMoves.length))];

    let result = getWinner(playerMove, computerMove);

    console.log(result);

    if(gamesPlayed === 1)
    {
        continueGame = confirm(`Would you like to continue playing? You have have currently played ${gamesPlayed} time. 
        Wins: ${wins}
        Losses: ${losses}
        Draws: ${draws}.`);
        gamesPlayed++;
    }
    else
    {
        continueGame = confirm(`Would you like to continue playing? You have have currently played ${gamesPlayed} times. 
        Wins: ${wins}
        Losses: ${losses}
        Draws: ${draws}.`);
        gamesPlayed++;
    }
    
}

console.log("chose to quit game");