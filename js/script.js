const btn = document.getElementById('enterBtn');
const clickSound = document.getElementById('clickSound');

btn.addEventListener('click', () => {
  const name = document.getElementById('knightName').value;
  const code = document.getElementById('knightCode').value;

  if (name && code) {
    localStorage.setItem('knightName', name);
    localStorage.setItem('knightCode', code);
    clickSound.play();
    setTimeout(() => {
      window.location.href = "dashboard.html"; // Next page
    }, 500); // Delay so sound plays
  } else {
    alert("Enter both Knight Name and Code.");
  }
});
