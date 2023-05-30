const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let moves = 0;
let gameStarted = false;

function flipCard() {
    if (gameStarted == false){
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
      }  

//remove event listener if there is a match      
function disableFlipCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
    }      

//unflip cards if not a match
function unflipCards() {
        lockBoard = true;
    
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
    
            lockBoard = false;
          }, 1000);
    }     

cards.forEach(card => card.addEventListener('click', flipCard));