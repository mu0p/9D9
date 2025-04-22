const enterBtn = document.getElementById('enter-btn');
const overlay = document.getElementById('enter-overlay');
const content = document.getElementById('main-content');

document.body.style.overflow = 'hidden';

enterBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
  content.style.display = 'block';
  document.body.style.overflow = 'auto'; 
  new Audio('images/9d9_Audio.wav').play();
});
