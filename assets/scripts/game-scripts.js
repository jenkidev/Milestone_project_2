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

cards.forEach(card => card.addEventListener('click', flipCard));