document.addEventListener('DOMContentLoaded', function () {
    const options = {
        strings: ['Projects', 'Publish Papers', 'Hackathons','Workshops','Conferences'], // Add your rotating words here
        typeSpeed: 50, // Adjust the typing speed
        backSpeed: 50, // Adjust the backspacing speed
        loop: true, // Enable the loop
    };

    const typed = new Typed('.rotating-words', options);

    let lastScrollPosition = window.scrollY;

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;

        // Check if scrolling down
        if (scrollPosition > lastScrollPosition) {
            document.querySelector('.js-rotating-words-spacer').classList.add('visible');
        } else {
            document.querySelector('.js-rotating-words-spacer').classList.remove('visible');
        }

        // Update last scroll position
        lastScrollPosition = scrollPosition;
    });
});
// JavaScript

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.vertical-section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, { threshold: 0.5 }); // Adjust the threshold as needed

    sections.forEach(section => {
        observer.observe(section);
    });
});
// Add this JavaScript code to your existing script.js file

// Add this JavaScript code to your existing script.js file

// Add this JavaScript code to your existing script.js file
// Add this JavaScript code to your existing script.js file
document.addEventListener('DOMContentLoaded', function () {
    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle the fading in and out of elements
    function handleVisibility(element, isVisible, delay) {
        setTimeout(function () {
            element.classList.toggle('visible', isVisible);
            element.classList.toggle('invisible', !isVisible);
        }, delay);
    }

    // Get all image blocks
    const imageBlocks = document.querySelectorAll('.image-block');

    // Set initial visibility state
    imageBlocks.forEach((block) => {
        block.classList.add('invisible');
    });

    // Define the order of appearance
    const order = [2, 1, 3, 0, 4];

    // Add scroll event listener
    window.addEventListener('scroll', function () {
        order.forEach((index, orderIndex) => {
            const block = imageBlocks[index];
            const isVisible = isInViewport(block);

            handleVisibility(block, isVisible, orderIndex * 500); // Adjust the delay as needed
        });
    });
});





