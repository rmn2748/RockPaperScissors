/// a function that returns pick rock, paper or scissors

function computerPlay() {
    let choix;
    let random = Math.floor(Math.random() * 3);
    if (random == 0) {
        return 'Rock';
    }
    else if (random == 1) {
        return 'Paper'
    }
    else if (random == 2) {
        return 'Scissors'
    }
    else { console.log('bug')};
 
 }

 /// capitalize and lower case
 function capitalize(string) {
    string = string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
 }
 /// one round. Return value to be edited to "flash" on screen
 function playRound(playerSelection, computerSelection) {
     playerSelection = capitalize(playerSelection);
     let winner;
    if (playerSelection === computerSelection) {
        return winner = `Tie ! You both chose ${playerSelection}`;
    }
     if (playerSelection === 'Rock') {
        if (computerSelection === 'Paper') {
            computerScore ++;
            return winner =  ` You lose !${computerSelection} beats ${playerSelection}`
        }
        else { 
            playerScore++;
            return winner = `You win !${playerSelection} beats ${computerSelection}`;
        }
    }
    else if (playerSelection === 'Paper') {
        if (computerSelection === 'Scissors') {
            computerScore ++;
            return winner =  ` You lose !${computerSelection} beats ${playerSelection}`
        }
        else { 
            playerScore++;
            return winner = `You win !${playerSelection} beats ${computerSelection}`;
        }
    }
    else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
            computerScore ++;
            return winner =  ` You lose !${computerSelection} beats ${playerSelection}`
        }
        else { 
            playerScore++;
            return winner = `You win !${playerSelection} beats ${computerSelection}`;
        }
    }  
 }
 let playerScore = 0;
 let computerScore = 0;
 let computerChoice;
 let playerChoicce;
 //// an entire game of 5 rounds. Score between each round. Doesn't chance if tie (to be flashed in future)
 function game() {
     
     for (let i = 0; i < 5; i++) {
         computerChoice = computerPlay();
         playerChoice = prompt("Choose your sign");
         playRound(playerChoice, computerChoice);
         console.log(`You : ${playerScore} / The computer : ${computerScore}`);
     }
     if ( playerScore > computerScore) {
         console.log('You won!');
         playerScore = computerScore = 0;
         
     }
     else { 
         console.log('You lost :(');
         playerScore = computerScore = 0;
    }
 }

  