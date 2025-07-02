const button = document.getElementById('clickMe1');

// Main text messages
const baseMessages = [
  "Click me!",
  "No really, click me!",
  "I dare you.",
  "Still here?",
  "C'monnn",
  "Do it.",
  "You won’t.",
  "Keith is watching.",
  "You clicked the wrong one.",
  "You clicked the right one?",
  "Wait, was that it?",
  "Keith says no.",
  "This is your last warning.",
  "Fine. Click then.",
];

// Rare chaos messages (5% chance)
const chaosMessages = [
  "Keith has ascended.",
  "You clicked in the wrong timeline.",
  "Your browser is now haunted.",
  "This button is sentient.",
  "Goblin.exe initiated.",
  "Too late.",
  "The signal has been received.",
  "Oh, you clicked it?",
  "KEITH APPROVES (temporarily)"
];

let index = 0;
let interval = 2000; // Start at 2 seconds
let speedup = 0.9;   // 10% faster each time
const minInterval = 150;
const resetThreshold = 12; // reset after 12 messages to avoid spinning out forever

function cycleMessages() {
  if (!button) return;

  const isChaos = Math.random() < 0.05;
  const message = isChaos
    ? chaosMessages[Math.floor(Math.random() * chaosMessages.length)]
    : baseMessages[index % baseMessages.length];

  button.textContent = message;
  index++;

  // Reset the madness every so often
  if (index >= resetThreshold) {
    index = 0;
    interval = 2000; // Back to slow
  } else {
    interval = Math.max(minInterval, interval * speedup);
  }

  setTimeout(cycleMessages, interval);
}

cycleMessages();

// ✨ Movement: Button dodges your mouse like Keith dodges responsibility
button.addEventListener('mouseover', () => {
  const offsetX = (Math.random() - 0.5) * 60;
  const offsetY = (Math.random() - 0.5) * 30;
  button.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(${(Math.random() - 0.5) * 15}deg)`;
});

button.addEventListener('mouseout', () => {
  button.style.transform = '';
});

// 🤡 Keith's Laugh: Click triggers audio + animation
button.addEventListener('click', () => {
  const laugh = new Audio('keith-laugh.mp3'); // Optional: use your own file
  laugh.play().catch(() => console.log('Keith laugh missing'));
  button.classList.add('clicked');

  // Optional styling effect (remove after 500ms)
  setTimeout(() => {
    button.classList.remove('clicked');
  }, 500);
});
