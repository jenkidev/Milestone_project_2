const cards = document.querySelectorAll('.memory-card');
const moveContainer = document.querySelector('.moves');
const timeContainer = document.querySelector(".timer");
const maxMatch = 8;

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let moves = 0;
let perfectMatch = 0;
let gameStarted = false;


function flipCard() {
  if (gameStarted == false){
    timer();
    gameStarted = true;
  }

    if (lockBoard) return;
    if (this === firstCard) return;
    
    this.classList.add('flip');
    
    if (!hasFlippedCard) {
      // first click
      hasFlippedCard = true;
      firstCard = this;
    } else {
      // second click
      hasFlippedCard = false;
      secondCard = this;

      checkForMatch();

    }
  }

function checkForMatch() {
    let isMatch = firstCard.dataset.frame === secondCard.dataset.frame;
        isMatch ? disableFlipCards() : unflipCards();
        if (isMatch) {perfectMatch += 1};
        addMove();
        if (perfectMatch === maxMatch )winGame();
      }  

//remove event listener if there is a match      
function disableFlipCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        resetBoard();
    }      

//unflip cards if not a match
function unflipCards() {
        lockBoard = true;
    
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
    
            resetBoard();
          }, 1000);
    }

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}   

//Shuffles memory cards in random positions
(function shuffle () {
  cards.forEach(card => {
      let randomPos = Math.floor(Math.random() * 12);
      card.style.order = randomPos;
  });
})();

//Move tracker 
function addMove() {
  moves++;
  moveContainer.innerHTML = "Moves: " + moves;
}

//Play Timer
let time;
let minutes = 0;
let seconds = 0;
timeContainer.innerHTML = "Time- Minutes: " + minutes + " Seconds: " + seconds;

function timer() {
    time = setInterval(function() {
        seconds++;
        if (seconds === 59) {
            minutes++;
            seconds = 0;
        }
        timeContainer.innerHTML = "Time- Minutes: " + minutes + " Seconds: " + seconds;
    }, 1000);
}

function stopTimer() {
  clearInterval(time);
}

function winGame() {
  stopTimer();
  winnerMessage();
}

function winnerMessage() {
  document.querySelector('.bg-modal').style.display = "flex";
}

cards.forEach(card => card.addEventListener('click', flipCard));