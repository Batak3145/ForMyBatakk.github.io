const heartColors = ['#ff4d88', '#ff66b2', '#ff99cc', '#e75480', '#db7093'];

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  const size = 10 + Math.random() * 10;
  heart.style.width = `${size}px`;
  heart.style.height = `${size}px`;

  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.background = heartColors[Math.floor(Math.random() * heartColors.length)];
  heart.style.animationDuration = 3 + Math.random() * 2 + 's';

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 300);
