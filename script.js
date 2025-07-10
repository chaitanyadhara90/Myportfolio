// Mobile Navigation toggle
const navLinks = document.querySelector('.nav-links');
const burgerIcon = document.querySelector('.burger');

burgerIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
