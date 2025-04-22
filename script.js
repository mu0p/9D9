
document.body.style.overflow = 'hidden';

const enterBtn    = document.getElementById('enter-btn');
const enterOverlay= document.getElementById('enter-overlay');
const mainContent = document.getElementById('main-content');

enterBtn.addEventListener('click', () => {
  enterOverlay.style.display = 'none';
  mainContent.style.display = 'block';
  document.body.style.overflow = 'auto';
  new Audio('images/9d9_Audio.wav').play();
});

// WATCH TRAILER
document.getElementById('watch-btn').addEventListener('click', () => {
  window.open('https://www.instagram.com/reel/DHry0wqPi2B/', '_blank','noopener');
});

// LEARN MORE → Manifesto overlay
const aboutOverlay = document.getElementById('about-overlay');
document.getElementById('learn-btn').addEventListener('click', () => {
  aboutOverlay.classList.remove('hidden');
});

// CLOSE Manifesto
document.getElementById('close-about').addEventListener('click', () => {
  aboutOverlay.classList.add('hidden');
});

// BUY TICKETS
document.getElementById('tickets-btn').addEventListener('click', () => {
  window.open('https://your-ticket-link.com', '_blank','noopener');
});
