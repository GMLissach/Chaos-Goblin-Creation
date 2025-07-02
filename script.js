const button = document.getElementById('clickMe1');

const messages = [
  "Click me!",
  "No really, click me!",
  "I dare you.",
  "Still here?",
  "C'monnn",
  "Do it.",
  "You won’t.",
  "Keith is watching."
];

let index = 0;

// Move the button to a random position on hover
button.addEventListener('mouseover', () => {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const buttonWidth = button.offsetWidth;
  const buttonHeight = button.offsetHeight;

  const maxX = viewportWidth - buttonWidth;
  const maxY = viewportHeight - buttonHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  button.style.position = 'absolute';
  button.style.left = `${randomX}px`;
  button.style.top = `${randomY}px`;
  button.style.transition = 'all 0.3s ease';
});

// Cycle the button text every second
setInterval(() => {
  if (!button) return;
  button.textContent = messages[index % messages.length];
  index++;
}, 1000);

