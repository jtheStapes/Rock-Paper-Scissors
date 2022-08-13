//Variables and constants
let playGame = true;
let userChoice; //Holds the value for what the user chose for their element
let computerChoice; //Holds the value for what the computer chose for their element
let userPoints = 0;
let computerPoints = 0;
const water = document.querySelector('.water-icon'); 
const earth = document.querySelector('.earth-icon');
const fire = document.querySelector('.fire-icon');
const air = document.querySelector('.air-icon');
const userChoiceHolder = document.createElement('div'); //Placeholder for displaying what the user selected
const computerChoiceHolder = document.createElement('div'); //Placeholder for displaying what the computer selected
const body = document.querySelector('.body'); //Contains everything underneath the header
const results = document.createElement('div'); 
const choice = document.createElement('div');
const avatarChoice = document.createElement('div'); //Container for avatarScore and userChoiceHolder
const avatarScore = document.createElement('div'); //Displays how many points the user has underneath what they selected
const challengerScore = document.createElement('div'); //Displays how many points the computer has underneath what they selected 
const challengerChoice = document.createElement('div'); //Container for challengerScore and computerChoiceHolder
const message = document.createElement('div'); //Outputs the outcome of the round and if a winner is declared
const playAgain = document.createElement('button'); //Resets both scores and restarts the game

//Add class names to created divs
userChoiceHolder.classList.add('userChoiceHolder');
computerChoiceHolder.classList.add('computerChoiceHolder');
avatarScore.classList.add('avatarScore');
challengerScore.classList.add('challengerScore');
results.classList.add('results');
choice.classList.add('choice');
avatarChoice.classList.add('avatarChoice');
challengerChoice.classList.add('challengerChoice');
message.classList.add('message');
playAgain.classList.add('playAgain');

//Add children to parent divs
body.appendChild(results);
results.appendChild(message);
results.appendChild(choice);
choice.appendChild(avatarChoice);
choice.appendChild(challengerChoice);
avatarChoice.appendChild(userChoiceHolder);
avatarChoice.appendChild(avatarScore);
challengerChoice.appendChild(computerChoiceHolder);
challengerChoice.appendChild(challengerScore);

//Add text to divs
userChoiceHolder.textContent = '❓';
avatarScore.textContent = `Avatar: ${userPoints}`;
computerChoiceHolder.textContent = '❓';
challengerScore.textContent = `Challengers: ${computerPoints}`;
playAgain.textContent = 'Play Again?';

//Add event listeners to each button
water.addEventListener('click', () => {    
    userChoice = 'Water'; 
    computerChoice = getComputerChoice();
    game();
    console.log(playGame);
});
earth.addEventListener('click', () => { 
    userChoice = 'Earth';
    computerChoice = getComputerChoice();
    game();
});
fire.addEventListener('click', () => { 
    userChoice = 'Fire';
    computerChoice = getComputerChoice(); 
    game();
});
air.addEventListener('click', () => { 
    userChoice = 'Air'; 
    computerChoice = getComputerChoice();
    game();
});

if (playGame === false) 
{
    water.removeEventListener();
    earth.removeEventListener();
    fire.removeEventListener();
    air.removeEventListener();
}

playAgain.addEventListener('click', () => {
    restartGame();
    console.log(userPoints);
})

function getComputerChoice() { //Generate a randomly selected answer to Water Earth Fire Air
    let options = ['Water','Earth', 'Fire', 'Air'];
    let choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}

function getAvatarChoice(userChoice) { //Outputs the users choice icon to the avatarChoice box
    switch (userChoice) 
    {
        case('Water'):
            userChoiceHolder.textContent = '🌊'
            userChoiceHolder.setAttribute('style', 'color: rgb(24, 182, 255); border: 5px solid rgb(24, 182, 255);');
            return userChoiceHolder;
        case('Earth'):
            userChoiceHolder.textContent = '⛰️'
            userChoiceHolder.setAttribute('style', 'color: rgb(185, 149, 115); border: 5px solid rgb(185, 149, 115);');
            return userChoiceHolder;
        case('Fire'):
            userChoiceHolder.textContent = '🔥'
            userChoiceHolder.setAttribute('style', 'color: rgb(247, 107, 107); border: 5px solid rgb(247, 107, 107);');
            return userChoiceHolder;
        case('Air'):
            userChoiceHolder.textContent = '💨'
            userChoiceHolder.setAttribute('style', 'color: rgb(255, 255, 255); border: 5px solid rgb(255, 255, 255);');
            return userChoiceHolder;
    }
}

function getChallengerChoice(computerChoice) { //Outputs the computers choice icon to the challengerChoice box
    switch (computerChoice) 
    {
        case('Water'):
            computerChoiceHolder.textContent = '🌊'
            computerChoiceHolder.setAttribute('style', 'color: rgb(24, 182, 255); border: 5px solid rgb(24, 182, 255);');
            return computerChoiceHolder;
        case('Earth'):
            computerChoiceHolder.textContent = '⛰️'
            computerChoiceHolder.setAttribute('style', 'color: rgb(185, 149, 115); border: 5px solid rgb(185, 149, 115);');
            return computerChoiceHolder;
        case('Fire'):
            computerChoiceHolder.textContent = '🔥'
            computerChoiceHolder.setAttribute('style', 'color: rgb(247, 107, 107); border: 5px solid rgb(247, 107, 107);');
            return computerChoiceHolder;
        case('Air'):
            computerChoiceHolder.textContent = '💨'
            computerChoiceHolder.setAttribute('style', 'color: rgb(255, 255, 255); border: 5px solid rgb(255, 255, 255);');
            return computerChoiceHolder;
    }
}

function game() { //Plays the game to 5 and outputs results after each round
    if (computerPoints === 5 || userPoints === 5) { return; } 
    getAvatarChoice(userChoice);
    getChallengerChoice(computerChoice);
    message.textContent = '';
    if 
    ((userChoice === 'Water' && computerChoice === 'Fire') || 
    (userChoice === 'Earth' && computerChoice === 'Air') ||
    (userChoice === 'Fire' && computerChoice === 'Earth') ||
    (userChoice === 'Air' && computerChoice === 'Water')) 
    {
        userPoints++;
        avatarScore.textContent = `Avatar: ${userPoints}`;
        challengerScore.textContent = `Challenger: ${computerPoints}`;
        message.textContent = `${userChoice} beats ${computerChoice}. The Avatar wins the round!`
    } else if 
    ((computerChoice === 'Water' && userChoice === 'Fire') || 
    (computerChoice === 'Earth' && userChoice === 'Air') ||
    (computerChoice === 'Fire' && userChoice === 'Earth') ||
    (computerChoice === 'Air' && userChoice === 'Water'))
    {
        computerPoints++;
        avatarScore.textContent = `Avatar: ${userPoints}`;
        challengerScore.textContent = `Challenger: ${computerPoints}`;
        message.textContent = `${computerChoice} beats ${userChoice}. The Avatar loses the round...`
    } else 
    {
        message.textContent = `The Avatar has chosen ${userChoice} and the challengers
        have chosen ${computerChoice}. The elements chosen are of equal strength. A draw.`;    
    }
    if (computerPoints === 5) 
    {
        avatarScore.textContent = `Avatar: ${userPoints}`;
        challengerScore.textContent = `Challenger: ${computerPoints}`;   
        message.textContent = `${computerChoice} beats ${userChoice}. The Avatar has been defeated...`;
        message.appendChild(playAgain);
    } else if (userPoints === 5) 
    {
        avatarScore.textContent = `Avatar: ${userPoints}`;
        challengerScore.textContent = `Challenger: ${computerPoints}`;   
        message.textContent = `${userChoice} beats ${computerChoice}. The Avatar wins the game!`;
        message.appendChild(playAgain);
    }
}

function restartGame() {
    userPoints = 0;
    computerPoints = 0;
    avatarScore.textContent = `Avatar: ${userPoints}`;
    challengerScore.textContent = `Challenger: ${computerPoints}`;
    message.textContent = '';
}