document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (card.querySelector('h3').textContent === 'Flashcards') {
            card.addEventListener('click', function () {
                window.location.href = '/flashcards';
                console.log('redirecting!!')
            });
        }
    });
});

let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        header.style.top = "-100px";  
    } else {
        header.style.top = "0";  
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
});

window.addEventListener('mousemove', function(event) {
    if (event.clientY < 50) {
        header.style.top = "0";  
    }
});
