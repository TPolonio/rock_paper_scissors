

/*3 )Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
We’ll use this function in the game to make the computer’s play. 
Tip: use the console to make sure this is returning the expected output before moving to the next step!*/

/* Get random Computer Selection from Rock Papper Scissors array*/


playerSelection = prompt(`Rock, Paper or Scissors?`)
while (playerSelection !== `Rock`  &&  playerSelection !== `Paper` && playerSelection !== `Scissors`) {
    alert (`Please select Rock, Paper or Scissors`)
    playerSelection = prompt(`Rock, Paper or Scissors?`)
} 


options = ["Rock", "Paper", "Scissors"];
function getComputerSelection(){
    computerSelection = options[Math.floor(Math.random()*options.length)]
    console.log(computerSelection)
}


/* 4 Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - 
and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
*/


function round(playerSelection,computerSelection){

    if (playerSelection === computerSelection) {
        return `It's a tie!`;

    } else if ((playerSelection == "Rock") && ( computerSelection == "Scissors")) {
        return `You win! ${playerSelection} beats ${computerSelection}.`

    } else if ((playerSelection == "Scissors") && ( computerSelection == "Paper")) {
        return `You win! ${playerSelection} beats ${computerSelection}.`  

    } else if ((playerSelection == "Paper") && ( computerSelection == "Rock")) {
        return `You win! ${playerSelection} beats ${computerSelection}.`

    } else if ((playerSelection == "Rock") && ( computerSelection == "Paper")) {
        return `You lose! ${computerSelection} beats ${playerSelection}.`

    } else if ((playerSelection == "Paper") && ( computerSelection == "Scissors")) {
        return `You lose! ${computerSelection} beats ${playerSelection}.`

    } else if ((playerSelection == "Scissors") && ( computerSelection == "Rock")) {
        return `You lose! ${computerSelection} beats ${playerSelection}.`
    }
}








/* Get playerSelection from prompt*/
/*let playerSelection = prompt("Rock Paper Scissors?")*/
