    let lastScrollTop = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // If the user scrolls down, hide the header
        if (scrollTop > lastScrollTop) {
            header.style.top = "-100px";  // Hide the header by moving it up
        } else {
            header.style.top = "0";  // Show the header by resetting its position
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative scroll
    });

    // Show the header when the cursor is near the top of the screen
    window.addEventListener('mousemove', function(event) {
        if (event.clientY < 50) {
            header.style.top = "0";  // If the cursor is near the top, show the header
        }
    });

