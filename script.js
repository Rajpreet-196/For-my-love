// Random floating heart animation
setInterval(() => {
  const heart = document.createElement('div');
  heart.textContent = '💖';
  heart.style.position = 'absolute';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.top = '100%';
  heart.style.fontSize = '2rem';
  heart.style.animation = 'floatHearts 6s ease-out forwards';
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 500);
