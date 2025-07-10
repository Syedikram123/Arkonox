const btn = document.getElementById('enterBtn');
const clickSound = document.getElementById('clickSound');
const video = document.getElementById('bg-video');
const title = document.getElementById("pageTitle");
let pressTimer;

// 1. Enter button click logic
btn.addEventListener('click', () => {
  const name = document.getElementById('knightName').value;
  const code = document.getElementById('knightCode').value;

  if (name && code) {
    localStorage.setItem('knightName', name);
    localStorage.setItem('knightCode', code);
    clickSound.play();
    setTimeout(() => {
      window.location.href = "dashboard.html"; // Next page
    }, 500); // Delay to allow sound
  } else {
    alert("Enter both Knight Name and Code.");
  }
});

// 2. Enable video sound on any click
document.body.addEventListener("click", () => {
  video.muted = false;
});

// 3. Long Press Admin Access (Mobile & Desktop Compatible)
title.style.userSelect = "none";
title.style.webkitUserSelect = "none";

// For Mobile
title.addEventListener("touchstart", () => {
  pressTimer = setTimeout(() => {
    window.location.href = "admin.html"; // Hidden admin panel
  }, 5000);
});

title.addEventListener("touchend", () => {
  clearTimeout(pressTimer);
});

// For Desktop
title.addEventListener("mousedown", () => {
  pressTimer = setTimeout(() => {
    window.location.href = "admin.html";
  }, 5000);
});

title.addEventListener("mouseup", () => {
  clearTimeout(pressTimer);
});
