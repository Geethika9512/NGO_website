 // AOS Animation
AOS.init({ duration: 1000, once: true });

// Toggle Menu
function toggleMenu() {
  document.getElementById("navbar").classList.toggle("show");
}

// Scroll-to-top
const topBtn = document.getElementById("topBtn");
window.onscroll = () => {
  topBtn.style.display = window.scrollY > 200 ? "block" : "none";
};
topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Toggle Theme
function toggleTheme() {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
}
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

// Ripple Cursor
const cursorDot = document.createElement('div');
cursorDot.classList.add('cursor-dot');
document.body.appendChild(cursorDot);
document.body.classList.toggle("dark");

window.addEventListener('mousemove', (e) => {
  const { clientX: x, clientY: y } = e;
  const element = document.elementFromPoint(x, y);
  if (!element || element.closest('input, textarea, button, form')) {
    cursorDot.style.display = "none";
  } else {
    cursorDot.style.left = '${x}px';
    cursorDot.style.top = '${y}px';
    cursorDot.style.display = "block";
  }
});

