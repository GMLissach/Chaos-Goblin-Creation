<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Chase Button</title>
  <style>
    #clickMe1 {
      position: absolute;
      background-color: green;
      color: white;
      padding: 12px 20px;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      cursor: pointer;
      transition: transform 0.2s ease;
    }
    body {
      height: 100vh;
      margin: 0;
      overflow: hidden;
    }
  </style>
</head>
<body>

  <button id="clickMe1">Click me!</button>

  <script>
    const button = document.getElementById('clickMe1');
    const messages = [
      "Click me!",
      "Stop now.",
      "Again?",
      "You're persistent.",
      "Ow.",
      "Yes, it's important.",
      "Enough now.",
      "Keith sees all."
    ];

    let msgIndex = 0;
    let paused = false;
    let posX = 100;
    let posY = 100;

    // Move toward mouse
    document.addEventListener('mousemove', (e) => {
      if (paused) return;

      const dx = e.clientX - posX;
      const dy = e.clientY - posY;
      const step = 20; // how fast it moves

      posX += dx * 0.05 + (Math.random() * 10 - 5);
      posY += dy * 0.05 + (Math.random() * 10 - 5);

      button.style.left = `${posX}px`;
      button.style.top = `${posY}px`;
    });

    // Random pause every 2 seconds
    setInterval(() => {
      paused = Math.random() < 0.3;
    }, 2000);

    // Change message when clicked
    button.addEventListener('click', () => {
      msgIndex = (msgIndex + 1) % messages.length;
      button.textContent = messages[msgIndex];
    });
  </script>

</body>
</html>
