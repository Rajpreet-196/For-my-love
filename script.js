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
// Playlist Feature
const playlist = ["song1.mp3", "song2.mp3"]; // Add your MP3 file names here
let current = 0;
const player = document.getElementById("musicPlayer");

function playSong(index) {
  player.src = playlist[index];
  player.play();
}

player.addEventListener("ended", () => {
  current = (current + 1) % playlist.length;
  playSong(current);
});

playSong(current); // Start playing the first song
