const enterBtn = document.getElementById('enter-btn');
const overlay = document.getElementById('enter-overlay');
const content = document.getElementById('main-content');

enterBtn.addEventListener('click', () => {
  // Remove overlay
  overlay.style.display = 'none';

  // Show main content
  content.style.display = 'block';

  // Play audio
  const audio = new Audio('images/9d9_Audio.wav');
  audio.play();
});

const instaBtn = document.getElementById('insta-btn');
const instaPopup = document.getElementById('insta-popup');
const closePopup = document.getElementById('close-popup');

instaBtn.addEventListener('click', () => {
  instaPopup.classList.add('active');
});

closePopup.addEventListener('click', () => {
  instaPopup.classList.remove('active');
});
