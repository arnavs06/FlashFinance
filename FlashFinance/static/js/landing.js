document.addEventListener('DOMContentLoaded', function () {
    const flashcardsCard = document.querySelector('.flashcards-card');
    const flashcardsButton = document.querySelector('.flashcards-link');

    if (flashcardsCard) {
        flashcardsCard.addEventListener('click', function (e) {
            e.preventDefault();
            window.location.href = flashcardsButton.getAttribute('href');
        });
    }

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
});