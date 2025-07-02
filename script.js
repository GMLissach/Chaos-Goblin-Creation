// script.js – Corrected (remove HTML <script> wrapper tags)

// Get the button element by its ID
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

// Cycle the button text every second
setInterval(() => {
  if (!button) return;  // safety check (in case the element isn't found)
  button.textContent = messages[index % messages.length];
  index++;
}, 1000);

// On hover, move the button a bit (random jitter)
button.addEventListener('mouseover', () => {
  const offsetX = (Math.random() - 0.5) * 30;  // random offset between -15 and +15 px
  const offsetY = (Math.random() - 0.5) * 15;  // random offset between -7.5 and +7.5 px
  button.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(${(Math.random() - 0.5) * 10}deg)`;
});

// On mouse out, reset the button position
button.addEventListener('mouseout', () => {
  button.style.transform = '';
});
