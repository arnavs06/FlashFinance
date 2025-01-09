let currentIndex = 0;
let isFlipped = false; 
const flashcardElement = document.querySelector('.flashcard');
const frontElement = flashcardElement.querySelector('.front');
const backElement = flashcardElement.querySelector('.back');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const flipButton = document.getElementById('flip-btn');

const flashcards = [
  { front: "What is DCF?", back: "Discounted Cash Flow" },
  { front: "What is WACC?", back: "Weighted Average Cost of Capital" },
  { front: "What is EBITDA?", back: "Earnings Before Interest, Taxes, Depreciation, and Amortization" },
];

function updateFlashcard(index) {
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
  if (direction === 'next' && currentIndex < flashcards.length - 1) {
    currentIndex++;
    updateFlashcard(currentIndex);
  } else if (direction === 'prev' && currentIndex > 0) {
    currentIndex--;
    updateFlashcard(currentIndex);
  }
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

updateFlashcard(currentIndex);
