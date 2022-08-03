//Generate a randomly selected answer to Rock Paper Scissors
function getComputerChoice() {
    let options = ['rock','paper', 'scissors'];
    let choice = options[Math.floor(Math.random()*options.length)];

    return choice;
}

let userPoints = 0; //Create a variable to keep track of user points
let computerPoints = 0; //Create a variable to keep track of computer points
const container = document.querySelector('#container');
const score = document.createElement('div'); //Add a div for displaying results
score.classList.add('score');
const result = document.createElement('div');
result.classList.add('result');

//Add event listener to buttons for each move
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    result.textContent = '';
    let playerSelection = 'rock';
    let computerSelection = getComputerChoice();
    score.textContent = playRound(playerSelection, computerSelection);
    if (userPoints === 5) {
        result.textContent = 'You won the game!!!';
        container.appendChild(result);
        userPoints = 0;
        computerPoints = 0;
    } else if (computerPoints === 5) {
        result.textContent = 'You lost the game!!!';
        container.appendChild(result);
        userPoints = 0;
        computerPoints = 0;
    }
    console.log(userPoints);
})

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    result.textContent = '';
    let playerSelection = 'paper';
    let computerSelection = getComputerChoice();
    score.textContent = playRound(playerSelection, computerSelection);
    if (userPoints === 5) {
        result.textContent = 'You won the game!!!';
        container.appendChild(result);
        userPoints = 0;
        computerPoints = 0;
    } else if (computerPoints === 5) {
        result.textContent = 'You lost the game!!!';
        container.appendChild(result);
        userPoints = 0;
        computerPoints = 0;
    }
    console.log(userPoints);
})

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    result.textContent = '';
    let playerSelection = 'scissors';
    let computerSelection = getComputerChoice();
    score.textContent = playRound(playerSelection, computerSelection);
    if (userPoints === 5) {
        result.textContent = 'You won the game!!!';
        container.appendChild(result);
        userPoints = 0;
        computerPoints = 0;
    } else if (computerPoints === 5) {
        result.textContent = 'You lost the game!!!';
        container.appendChild(result);
        userPoints = 0;
        computerPoints = 0;
    }
    console.log(userPoints);
})

container.appendChild(score);





function playRound(playerSelection, computerSelection) { //Write a function that takes in two parameters, playerSelection and computerSelection

    //Compare the two choices using if statements
    if (playerSelection === computerSelection) {
        return `You chose ${playerSelection} and the computer chose ${computerSelection}. You tied the round! User: ${userPoints} Computer: ${computerPoints}`
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        userPoints++;
        return `You chose ${playerSelection} and the computer chose ${computerSelection}. You won the round! User: ${userPoints} Computer: ${computerPoints}`
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerPoints++;
        return `You chose ${playerSelection} and the computer chose ${computerSelection}. You lost the round! User: ${userPoints} Computer: ${computerPoints}`
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        computerPoints++;
        return `You chose ${playerSelection} and the computer chose ${computerSelection}. You lost the round! User: ${userPoints} Computer: ${computerPoints}`
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        userPoints++;
        return `You chose ${playerSelection} and the computer chose ${computerSelection}. You won the round! User: ${userPoints} Computer: ${computerPoints}`
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerPoints++;
        return `You chose ${playerSelection} and the computer chose ${computerSelection}. You lost the round! User: ${userPoints} Computer: ${computerPoints}`
    } else {
        userPoints++;
        return `You chose ${playerSelection} and the computer chose ${computerSelection}. You won the round! User: ${userPoints} Computer: ${computerPoints}`
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
