// Load stored progress
window.onload = function () {
  document.getElementById("islamicTask").checked = localStorage.getItem("islamicTask") === "true";
  document.getElementById("physicalTask").checked = localStorage.getItem("physicalTask") === "true";
  document.getElementById("mentalTask").checked = localStorage.getItem("mentalTask") === "true";
  document.getElementById("financialTask").checked = localStorage.getItem("financialTask") === "true";
  document.getElementById("memoryInput").value = localStorage.getItem("memoryToday") || "";

  // Simple date-based day calculator
  const startDate = new Date("2025-07-10");
  const today = new Date();
  const diffDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24)) + 1;
  const moon = Math.ceil(diffDays / 30);

  document.getElementById("dayNum").textContent = diffDays;
  document.getElementById("moonNum").textContent = moon;
};

// Save on change
document.querySelectorAll("input[type='checkbox']").forEach(el => {
  el.addEventListener("change", () => {
    localStorage.setItem(el.id, el.checked);
  });
});

document.getElementById("memoryInput").addEventListener("input", () => {
  localStorage.setItem("memoryToday", document.getElementById("memoryInput").value);
});

document.getElementById("logout").addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "index.html";
});
