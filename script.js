document.body.style.overflow = 'hidden';

const enterBtn   = document.getElementById('enter-btn');
const overlay    = document.getElementById('enter-overlay');
const heroContent= document.getElementById('main-content');

enterBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
  heroContent.classList.remove('hidden');
  document.body.style.overflow = 'auto';
  new Audio('images/9d9_Audio.wav').play();
});

document.getElementById('watch-btn').addEventListener('click', () => {
  window.open(
    'https://www.instagram.com/reel/DHry0wqPi2B/',
    '_blank',
    'noopener'
  );
});

const aboutOverlay = document.getElementById('about-overlay');
document.getElementById('learn-btn').addEventListener('click', () => {
  aboutOverlay.classList.remove('hidden');
});

document.getElementById('close-about').addEventListener('click', () => {
  aboutOverlay.classList.add('hidden');
});

document.getElementById('tickets-btn').addEventListener('click', () => {
  window.open('https://your-ticket-link.com', '_blank', 'noopener');
});
