function getComputerChoice() {
    let options = ['rock','paper', 'scissors'];
    let choice = options[Math.floor(Math.random()*options.length)];

    return choice;
}

console.log(getComputerChoice());