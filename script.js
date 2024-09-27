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

const videoPlayer = document.getElementById('video-player');


// Liste des vidéos et leurs titres
const videos = [
    { src:'videos/Vanessa-Vandy-beach-35022-filmsupply.mp4'},
    { src: 'videos/Alex-Fuller-coastal-aerials-29127-filmsupply.mp4' },
];

let currentVideoIndex = 0;

// Fonction pour charger et jouer la vidéo suivante
function playNextVideo() {
    if (currentVideoIndex >= videos.length) {
        currentVideoIndex = 0; // Recommence à la première vidéo si la liste est finie
    }
    
    const video = videos[currentVideoIndex];
    videoPlayer.src = video.src;
    videoPlayer.play();
    currentVideoIndex++;
}

// Lecture de la première vidéo au chargement
playNextVideo();

// Passer à la vidéo suivante lorsqu'une vidéo se termine
videoPlayer.addEventListener('ended', playNextVideo);
