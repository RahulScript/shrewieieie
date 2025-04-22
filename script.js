const container = document.getElementById('butterfly-container');

const corners = [
  { x: 0, y: 0 },
  { x: window.innerWidth - 50, y: 0 },
  { x: 0, y: window.innerHeight - 50 },
  { x: window.innerWidth - 50, y: window.innerHeight - 50 }
];

function createButterfly() {
  const butterfly = document.createElement('img');
  butterfly.src = 'butterfly.png';
  butterfly.className = 'butterfly';

  // Choose a random corner from the 4 corners
  const corner = corners[Math.floor(Math.random() * corners.length)];
  butterfly.style.left = `${corner.x}px`;
  butterfly.style.top = `${corner.y}px`;

  container.appendChild(butterfly);

  // Fade in and out animation handled by CSS
  setTimeout(() => {
    butterfly.remove();
  }, 4000);
}

setInterval(createButterfly, 1200);
