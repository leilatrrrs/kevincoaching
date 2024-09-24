const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const sunIcon = document.querySelector('.fa-sun');
const moonIcon = document.querySelector('.fa-moon');

toggleButton.addEventListener('click', function() {
    body.classList.toggle('night-mode');
    
    if (body.classList.contains('night-mode')) {
        // Affiche l'icône lune et cache l'icône soleil
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline';
    } else {
        // Affiche l'icône soleil et cache l'icône lune
        sunIcon.style.display = 'inline';
        moonIcon.style.display = 'none';
    }
});


const burgerButton = document.getElementById('burger-menu');
const menu = document.querySelector('.menu');
const burgerIcon = document.querySelector('.fa-bars');
const closeIcon = document.querySelector('.fa-xmark');

burgerButton.addEventListener('click', function() {
    menu.classList.toggle('active');
    
    // Bascule entre l'icône burger et l'icône croix
    if (menu.classList.contains('active')) {
        burgerIcon.style.display = 'none';
        closeIcon.style.display = 'inline';
    } else {
        burgerIcon.style.display = 'inline';
        closeIcon.style.display = 'none';
    }
});