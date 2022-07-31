function getComputerChoice() {
    let options = ['rock','paper', 'scissors'];
    let choice = options[Math.floor(Math.random()*options.length)];

    return choice;
}


let answer = prompt('Rock, Paper, or Scissors: ').toLowerCase();

console.log(answer);
console.log(getComputerChoice());