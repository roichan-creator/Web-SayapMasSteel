// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Floating Chatbot click event
    const fab = document.getElementById('chatbot-fab');
    if (fab) {
        fab.addEventListener('click', () => {
            window.location.href = 'chatbot.html';
        });
    }

    // Set active link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinksList = document.querySelectorAll('.nav-links a');
    navLinksList.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Mobile Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
        });
    }
});
