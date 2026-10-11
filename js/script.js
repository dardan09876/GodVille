// Navigation elements
const remoteNav = document.getElementById("remoteNav");
const diaryNav = document.getElementById("diaryNav");
const heroNav = document.getElementById("heroNav");
const stuffNav = document.getElementById("stuffNav");

// Navigation event listeners
remoteNav.addEventListener("click", () => {
  window.location.href = "remote.html";
});

diaryNav.addEventListener("click", () => {
  window.location.href = "index.html";
});

heroNav.addEventListener("click", () => {
  window.location.href = "hero.html";
});
stuffNav.addEventListener("click", () => {
  window.location.href = "stuff.html";
});
