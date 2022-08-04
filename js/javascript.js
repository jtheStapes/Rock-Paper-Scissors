//Generate a randomly selected answer to Rock Paper Scissors
function getComputerChoice() {
    let options = ['rock','paper', 'scissors'];
    let choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}

let userPoints = 0; //Create a variable to keep track of user points
let computerPoints = 0; //Create a variable to keep track of computer points
const container = document.querySelector('.container');
const results = document.querySelector('.results');
/*
const rockIcon = document.createElement('i'); //Rock icon
const rockChoice = document.createElement('div'); //Create div class for rock icon choice
const paperChoice = document.createElement('div'); //Create div class for paper icon choice
const scissorsChoice = document.createElement('div'); //Create div class for scissors icon choice
*/
const choice = document.createElement('div'); //Create container for icon of choice
const userChoice = document.createElement('div'); //Create div for user icon choice
const computerChoice = document.createElement('div'); //Create div for computer icon choice
const scores = document.createElement('div'); //Create div class for scores
const userScore = document.createElement('div'); //Add a div for displaying user score
const computerScore = document.createElement('div'); //Add a div for displaying computer score

choice.classList.add('choice');
/*
rockChoice.classList.add('rockChoice');
paperChoice.classList.add('paperChoice');
scissorsChoice.classList.add('scissorsChoice');
rockIcon.classList.add('fa-solid fa-hand-back-fist');
choice.appendChild(rockChoice);
choice.appendChild(paperChoice);
choice.appendChild(scissorsChoice);
rockChoice.appendChild(rockIcon);
*/

//paperChoice.classList.add('paperChoice');
//scissorsChoice.classList.add('scissorsChoice');
scores.classList.add('scores');
userScore.classList.add('userScore');
userScore.textContent = 'User: ';
computerScore.classList.add('computerScore');
computerScore.textContent = 'Computer: ';
const winner = document.createElement('div'); //Add a div for displaying the winner of the game
winner.classList.add('winner');
//const playAgain = document.querySelector('#play');

/* document.addEventListener('click', (e) => {
    if (!e.target.matches('.icons, .icons *')) {
      return;
    }
    console.log('It works!');
  }); */

//Add event listener to buttons for each move
const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
    userChoice.textContent = '';
    winner.textContent = '';
    let playerSelection = 'rock';
    let computerSelection = getComputerChoice();
    userChoice.textContent = `${(playRound(playerSelection, computerSelection))}`;
    userScore.textContent = `User: ${userPoints}`;
    computerScore.textContent = `Computer: ${computerPoints}`;
    if (userPoints === 5) {
        winner.textContent = 'You won the game!!!';
        results.appendChild(winner);
        userPoints = 0;
        computerPoints = 0;
    } else if (computerPoints === 5) {
        winner.textContent = 'You lost the game...';
        results.appendChild(winner);
        userPoints = 0;
        computerPoints = 0;
    }
})

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    userChoice.textContent = '';
    winner.textContent = '';
    let playerSelection = 'paper';
    let computerSelection = getComputerChoice();
    userChoice.textContent = `${(playRound(playerSelection, computerSelection))}`;
    userScore.textContent = `User: ${userPoints}`;
    computerScore.textContent = `Computer: ${computerPoints}`;
    if (userPoints === 5) {
        winner.textContent = 'You won the game!!!';
        results.appendChild(winner);
        userPoints = 0;
        computerPoints = 0;
    } else if (computerPoints === 5) {
        winner.textContent = 'You lost the game...';
        results.appendChild(winner);
        userPoints = 0;
        computerPoints = 0;
    }
})

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
    userChoice.textContent = '';
    winner.textContent = '';
    let playerSelection = 'scissors';
    let computerSelection = getComputerChoice();
    userChoice.textContent = `${(playRound(playerSelection, computerSelection))}`;
    userScore.textContent = `User: ${userPoints}`;
    computerScore.textContent = `Computer: ${computerPoints}`;
    if (userPoints === 5) {
        winner.textContent = 'You won the game!!!';
        results.appendChild(winner);
        userPoints = 0;
        computerPoints = 0;
    } else if (computerPoints === 5) {
        winner.textContent = 'You lost the game...';
        results.appendChild(winner);
        userPoints = 0;
        computerPoints = 0;
    }
})

container.appendChild(results);
choice.appendChild(userChoice);
choice.appendChild(computerChoice);
results.appendChild(choice);
results.appendChild(scores);
scores.appendChild(userScore);
scores.appendChild(computerScore);
//results.appendChild(winner);

function playRound(playerSelection, computerSelection) { //Write a function that takes in two parameters, playerSelection and computerSelection
    //Compare the two choices using if statements
    if (playerSelection === computerSelection) {
        return `You chose ${playerSelection} and the computer chose ${computerSelection}. You tied the round!`
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        userPoints++;
        return `You chose ${playerSelection} and the computer chose ${computerSelection}. You won the round!`
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerPoints++;
        return `You chose ${playerSelection} and the computer chose ${computerSelection}. You lost the round!`
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        computerPoints++;
        return `You chose ${playerSelection} and the computer chose ${computerSelection}. You lost the round!`
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        userPoints++;
        return `You chose ${playerSelection} and the computer chose ${computerSelection}. You won the round!`
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerPoints++;
        return `You chose ${playerSelection} and the computer chose ${computerSelection}. You lost the round!`
    } else {
        userPoints++;
        return `You chose ${playerSelection} and the computer chose ${computerSelection}. You won the round!`
    }
}

//Write a function that will play five rounds of Rock Paper Scissors that keeps score and reports a winner or loser at the end.
/*function game() {
    let keepGoing = true;
    while (keepGoing) {
        //Ask the user a message and store it in playerSelection
        let playerSelection = prompt('Rock, Paper, or Scissors: ').toLowerCase();
        //Create a variable called computerSelection of type string that holds the randomly answer
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (userPoints === 5 || computerPoints === 5) {
            keepGoing = false;
        }
    }
    if (userPoints > computerPoints) {
        return `User scored ${userPoints} and the computer scored ${computerPoints}! You won the game!`;
    } else {
        return `User scored ${userPoints} and the computer scored ${computerPoints}! You lost the game!`;
    } 
} */  
