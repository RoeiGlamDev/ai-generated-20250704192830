// Get all sections
const sections = document.querySelectorAll('section');

// Add fade-in animation to each section
sections.forEach((section) => {
    section.classList.add('fade-in');
});

// Add event listener to header nav links
const navLinks = document.querySelectorAll('header nav a');
navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Add event listener to window resize
window.addEventListener('resize', () => {
    // Update section heights to maintain aspect ratio
    sections.forEach((section) => {
        const width = section.offsetWidth;
        const height = width * 0.75;
        section.style.height = `${height}px`;
    });
});