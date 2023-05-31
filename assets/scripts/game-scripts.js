const cards = document.querySelectorAll('.memory-card');
const moveContainer = document.querySelector('.moves')

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let moves = 0;


function flipCard() {
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
        addMove();
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
  })
})();

//Move tracker 
function addMove() {
  moves++;
  moveContainer.innerHTML = "Moves: " + moves;
}

cards.forEach(card => card.addEventListener('click', flipCard));