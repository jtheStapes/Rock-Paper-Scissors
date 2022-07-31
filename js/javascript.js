function getComputerChoice() {
    let options = ['rock','paper', 'scissors'];
    let choice = options[Math.floor(Math.random()*options.length)];

    return choice;
}

function playerChoice() {
    let answer = prompt('Rock, Paper, or Scissors: ').toLowerCase();

    return answer;
}
console.log(playerChoice());
console.log(getComputerChoice());