


let computerScore = 0;
let playerScore = 0;

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
    else { console.log('bug') };
}



function playRound(e) {
    let playerSelection = e.target.getAttribute('id');
    let computerSelection = computerPlay();
    const yourscore = document.querySelector('.yourscore');
    const computerscore = document.querySelector('.computerscore');
    if (playerSelection === computerSelection) {
        comment.textContent = `Tie ! You both chose ${playerSelection}`;
    }
    else if (playerSelection === 'Rock') {
        if (computerSelection === 'Paper') {
            computerScore++;
            computerscore.textContent = computerScore;
            return comment.textContent = ` You lose ! ${computerSelection} beats ${playerSelection}`;
        }
        else {
            playerScore++;
            yourscore.textContent = playerScore;
            return comment.textContent = `You win ! ${playerSelection} beats ${computerSelection}`;
        }
    }
    else if (playerSelection === 'Paper') {
        if (computerSelection === 'Scissors') {
            computerScore++;
            computerscore.textContent = computerScore;
            return comment.textContent = ` You lose ! ${computerSelection} beats ${playerSelection}`
        }
        else {
            playerScore++;
            yourscore.textContent = playerScore;
            return  comment.textContent = `You win ! ${playerSelection} beats ${computerSelection}`;
        }
    }
    else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
            computerScore++;
            computerscore.textContent = computerScore;
           return comment.textContent = ` You lose ! ${computerSelection} beats ${playerSelection}`
        }
        else {
            playerScore++;
            yourscore.textContent = playerScore;
            return comment.textContent = `You win ! ${playerSelection} beats ${computerSelection}`;
        }
    }

}

function DeclareWinner() {
    const endgame = document.querySelector('.players');
    if (playerScore === 5) {
        endgame.textContent = 'You defeated the computer and saved mankind ! Congratulations !';
        endgame.style.cssText = 'justify-content : center;';
        weapons.forEach((weapon) => weapon.style.cssText = 'pointer-events: none');
    }
    else if (computerScore === 5) {
        endgame.textContent = 'What a terrible day for mankind... You lost and doomed us all !'
        endgame.style.cssText = 'justify-content : center;';
        weapons.forEach((weapon) => weapon.style.cssText = 'pointer-events: none');
        
    }
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

const comment = document.querySelector('.comment');

const weapons = Array.from(document.querySelectorAll('.weapon'));





weapons.forEach((weapon) => {
    weapon.addEventListener("click", (e) => {
        playRound(e);
        weapon.classList.add('playing');
        if (playerScore === 5 || computerScore === 5) { DeclareWinner(e)}
    });
});
weapons.forEach(weapon => weapon.addEventListener('transitionend', removeTransition));
