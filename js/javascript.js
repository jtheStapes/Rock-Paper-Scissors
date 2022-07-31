//Generate a randomly selected answer to Rock Paper Scissors
function getComputerChoice() {
    let options = ['rock','paper', 'scissors'];
    let choice = options[Math.floor(Math.random()*options.length)];

    return choice;
}
//Ask the user a message and store it in playerSelection
let playerSelection = prompt('Rock, Paper, or Scissors: ').toLowerCase();
//Create a variable called computerSelection of type string that holds the randomly answer
let computerSelection = getComputerChoice();

//Write a function that takes in two parameters, playerSelection and computerSelection
function playRound(playerSelection, computerSelection) {
    //Compare the two choices using if statements
    if (playerSelection === computerSelection) {
        return `You chose ${playerSelection} and the computer chose ${computerSelection}. You tied!`
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return `You chose ${playerSelection} and the computer chose ${computerSelection}. You win!`
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return `You chose ${playerSelection} and the computer chose ${computerSelection}. You lose!`
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        return `You chose ${playerSelection} and the computer chose ${computerSelection}. You lose!`
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return `You chose ${playerSelection} and the computer chose ${computerSelection}. You win!`
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return `You chose ${playerSelection} and the computer chose ${computerSelection}. You lose!`
    } else {
        return `You chose ${playerSelection} and the computer chose ${computerSelection}. You win!`
    }
}

console.log(playRound(playerSelection, computerSelection));