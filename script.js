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

