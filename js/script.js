const btn = document.getElementById('enterBtn');
const clickSound = document.getElementById('clickSound');
const video = document.getElementById('bg-video');
const title = document.querySelector("h1");

// 1. Button click → save + play sound + go to next page
btn.addEventListener('click', () => {
  const name = document.getElementById('knightName').value;
  const code = document.getElementById('knightCode').value;

  if (name && code) {
    localStorage.setItem('knightName', name);
    localStorage.setItem('knightCode', code);
    clickSound.play();
    setTimeout(() => {
      window.location.href = "dashboard.html"; // Replace later
    }, 500); // delay to hear sound
  } else {
    alert("Enter both Knight Name and Code.");
  }
});

// 2. Enable video sound when user clicks anywhere
document.body.addEventListener("click", () => {
  video.muted = false;
});

// 3. Long press on title → go to admin page after 5 sec
let pressTimer;

title.addEventListener("mousedown", () => {
  pressTimer = setTimeout(() => {
    window.location.href = "admin.html"; // Secret admin portal
  }, 5000); // 5 sec
});

title.addEventListener("mouseup", () => {
  clearTimeout(pressTimer);
});
