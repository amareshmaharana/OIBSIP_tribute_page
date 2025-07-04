// Dark/Light mode toggle
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    toggleBtn.textContent = "🌑 Dark Mode";
  } else {
    toggleBtn.textContent = "🌙 Light Mode";
  }
});

// Quote slider
const quotes = [
  "“Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.”",
  "“You have to dream before your dreams can come true.”",
  "“Don't take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.”",
  "“If you want to shine like a sun, first burn like a sun.”",
  "“Man needs difficulties in life because they are necessary to enjoy the success.”"
];

let currentQuote = 0;
const quoteEl = document.getElementById("quoteText");

setInterval(() => {
  quoteEl.style.opacity = 0;
  setTimeout(() => {
    currentQuote = (currentQuote + 1) % quotes.length;
    quoteEl.textContent = quotes[currentQuote];
    quoteEl.style.opacity = 1;
  }, 500);
}, 4000);

window.onload = () => {
  document.querySelector(".tribute-container").classList.add("fade-in");
};
