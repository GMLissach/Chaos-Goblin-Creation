const button = document.getElementById('clickMe1');

// Create the decoy button
const decoy = document.createElement('button');
decoy.textContent = 'Definitely not the button';
decoy.style.display = 'none';
decoy.id = 'decoyButton';
decoy.style.position = 'absolute';
decoy.style.top = '200px';
decoy.style.left = '50%';
decoy.style.transform = 'translateX(-50%)';
document.body.appendChild(decoy);

// Message cycling
const baseMessages = [
  "Click me!",
  "No really, click me!",
  "I dare you.",
  "Still here?",
  "C'monnn",
  "Do it.",
  "You won’t.",
  "Keith is watching.",
];

const chaosMessages = [
  "Keith has ascended.",
  "Browser haunted.",
  "Goblin.exe initiated.",
  "Too late.",
  "Wrong click.",
];

let index = 0;
let interval = 2000;
let speedup = 0.9;
const minInterval = 150;
const resetThreshold = 10;
let isFrozen = false;

function cycleMessages() {
  if (!button) return;

  const isChaos = Math.random() < 0.05;
  const message = isChaos
    ? chaosMessages[Math.floor(Math.random() * chaosMessages.length)]
    : baseMessages[index % baseMessages.length];

  button.textContent = message;
  index++;

  if (index >= resetThreshold) {
    index = 0;
    interval = 2000;
  } else {
    interval = Math.max(minInterval, interval * speedup);
  }

  setTimeout(cycleMessages, interval);
}

cycleMessages();

// Make button dodgy — but freeze every 5 seconds for 2 seconds
setInterval(() => {
  isFrozen = true;
  button.style.transition = 'transform 0.3s ease';
  button.style.transform = 'translate(0px, 0px)';
  setTimeout(() => {
    isFrozen = false;
    button.style.transition = '';
  }, 2000);
}, 7000);

// Move on hover
button.addEventListener('mouseover', () => {
  if (isFrozen) return;
  const offsetX = (Math.random() - 0.5) * 80;
  const offsetY = (Math.random() - 0.5) * 40;
  button.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(${(Math.random() - 0.5) * 10}deg)`;
});

button.addEventListener('mouseout', () => {
  if (!isFrozen) button.style.transform = '';
});

// Click reveals decoy
button.addEventListener('click', () => {
  button.textContent = "You thought that would work?";
  decoy.style.display = 'block';
  button.disabled = true;

  setTimeout(() => {
    button.disabled = false;
    decoy.style.display = 'none';
  }, 4000);
});

// Optional: decoy click chaos
decoy.addEventListener('click', () => {
  decoy.textContent = "You fool.";
  decoy.style.backgroundColor = '#ff5555';
});
