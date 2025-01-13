document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const heading = card.querySelector('h3'); 

        console.log('Card heading:', heading.textContent);

        if (heading.textContent.trim() === 'Flashcards') {
            card.addEventListener('click', function () {
                console.log('Redirecting to /flashcards');
                window.location.href = '/flashcards'; 
            });
        }
    });
});

let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        header.style.top = "-100px"; 
    } else {
        header.style.top = "0"; 
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
});

window.addEventListener('mousemove', function (event) {
    if (event.clientY < 50) {
        header.style.top = "0"; 
    }
});
