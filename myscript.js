
const buttonRock = document.querySelector('.rock');
const buttonPaper = document.querySelector('.paper');
const buttonScissors = document.querySelector('.scissors');
const userPlayer = document.querySelector('.userPlayer');
const userPoints = document.querySelector('.userPoints');
const computerPoints = document.querySelector('.computerPoints');
const winner = document.querySelector('.winner');

options = ["Rock", "Paper", "Scissors"]; /* Computer selection from preestablished array*/ 
function getComputerSelection() {
    computerSelection = options[Math.floor(Math.random()*options.length)]
}

let userScore = 0 
let computerScore = 0 /* Game starts 0-0*/   

buttonRock.addEventListener('click', function() {
    playerSelection = (buttonRock.innerText)
    round();
    console.log(`${userScore} - ${computerScore}`);
    userPoints.innerText = userScore;
    computerPoints.innerText = computerScore;
    if (userScore > 4) {
        winner.innerText = 'You WIN!'        
    }
    if (computerScore > 4) {
        winner.innerText = 'You Lose!'        
    }
    
});


buttonPaper.addEventListener('click', function() {
    playerSelection = (buttonPaper.innerText)
    round();
    console.log(`${userScore} - ${computerScore}`);
    userPoints.innerText = userScore;
    computerPoints.innerText = computerScore;
    if (userScore > 4) {
        winner.innerText = 'You WIN!'      
    }
    if (computerScore > 4) {
        winner.innerText = 'You Lose!'        
    }
    
    
});


buttonScissors.addEventListener('click', function() {
    playerSelection = (buttonScissors.innerText)
    round();
    console.log(`${userScore} - ${computerScore}`);
    userPoints.innerText = userScore;
    computerPoints.innerText = computerScore;
    if (userScore > 4) {
        winner.innerText = 'You WIN!'        
    }
    if (computerScore > 4) {
        winner.innerText = 'You Lose!'        
    }
    
});





//function getPlayerSelection() {
//playerSelection = prompt(`Rock, Paper or Scissors?`) /* Player selection from prompt*/ 
//while (playerSelection !== `Rock`  &&  playerSelection !== `Paper` && playerSelection !== `Scissors`) {
  //  alert (`Please select Rock, Paper or Scissors`)
  //  playerSelection = prompt(`Rock, Paper or Scissors?`)
//}
//} 



//function game() {
  //  for (let i = 0; i < 5; i++) {
    //    round();
      //  console.log(`User has ${userScore} points and Computer has ${computerScore} points`)

//}
//}




function round() { 

    getComputerSelection();

    if (playerSelection === computerSelection) {
        return `It's a tie!`;

    } else if ((playerSelection == "Rock") && ( computerSelection == "Scissors")) {
        userScore++;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
        console.log(`User has ${userScore} points`);
        console.log(`Computer has ${computerScore} points`);

    } else if ((playerSelection == "Scissors") && ( computerSelection == "Paper")) {
        userScore++;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
        console.log(`User has ${userScore} points`);
        console.log(`Computer has ${computerScore} points`);

    } else if ((playerSelection == "Paper") && ( computerSelection == "Rock")) {
        userScore++;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
        console.log(`User has ${userScore} points`);
        console.log(`Computer has ${computerScore} points`);

    } else if ((playerSelection == "Rock") && ( computerSelection == "Paper")) {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
        console.log(`User has ${userScore} points`);
        console.log(`Computer has ${computerScore} points`);

    } else if ((playerSelection == "Paper") && ( computerSelection == "Scissors")) {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
        console.log(`User has ${userScore} points`);
        console.log(`Computer has ${computerScore} points`);

    } else if ((playerSelection == "Scissors") && ( computerSelection == "Rock")) {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
        console.log(`User has ${userScore} points`);
        console.log(`Computer has ${computerScore} points`);
    }


}








/* Get playerSelection from prompt*/
/*let playerSelection = prompt("Rock Paper Scissors?")*/
