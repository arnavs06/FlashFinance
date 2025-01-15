let currentIndex = 0;
let isFlipped = false; 
const flashcardElement = document.querySelector('.flashcard');
const frontElement = flashcardElement.querySelector('.front');
const backElement = flashcardElement.querySelector('.back');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const flipButton = document.getElementById('flip-btn');

let flashcards = [];

fetch('/data/flashcards.json')
  .then(response => response.json())
  .then(data => {
    flashcards = data;
    updateFlashcard(currentIndex); 
  })
  .catch(error => {
    console.error('Error loading flashcards:', error);
  });

function updateFlashcard(index) {
  if (flashcards.length === 0) return;

  const flashcard = flashcards[index];
  frontElement.textContent = flashcard.front;
  backElement.textContent = flashcard.back;
  isFlipped = false;
  flashcardElement.classList.remove('flipped');
}

function flipCard() {
  isFlipped = !isFlipped;
  flashcardElement.classList.toggle('flipped');
}

function navigateFlashcards(direction) {
  if (flashcards.length === 0) return;

  if (direction === 'next' && currentIndex < flashcards.length - 1) {
    currentIndex++;
    updateFlashcard(currentIndex);
    triggerCardSwitchAnimation();
  } else if (direction === 'prev' && currentIndex > 0) {
    currentIndex--;
    updateFlashcard(currentIndex);
    triggerCardSwitchAnimation();
  }
}

function triggerCardSwitchAnimation() {
  const currentCard = flashcardElement;
  currentCard.classList.add('next-card');
  setTimeout(() => {
    currentCard.classList.remove('next-card');
  }, 300);
}

flashcardElement.addEventListener('click', flipCard);
document.addEventListener('keydown', (e) => {
  if (e.key === ' ') {
    flipCard();
    e.preventDefault();
  } else if (e.key === 'ArrowRight') {
    navigateFlashcards('next');
  } else if (e.key === 'ArrowLeft') {
    navigateFlashcards('prev');
  }
});

prevButton.addEventListener('click', () => navigateFlashcards('prev'));
nextButton.addEventListener('click', () => navigateFlashcards('next'));
flipButton.addEventListener('click', flipCard);
