const enterBtn = document.getElementById('enter-btn');
const overlay = document.getElementById('enter-overlay');
const content = document.getElementById('main-content');

enterBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
  content.style.display = 'block';

  const audio = new Audio('images/9d9_Audio.wav');
  audio.play();
});
