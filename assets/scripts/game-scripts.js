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
}

cards.forEach(card => card.addEventListener('click', flipCard));