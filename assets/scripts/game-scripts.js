const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;


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

cards.forEach(card => card.addEventListener('click', flipCard));