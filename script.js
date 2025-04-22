const container = document.getElementById('butterfly-container');

// Four corners of the screen
const corners = [
  { left: '0px', top: '0px' },
  { right: '0px', top: '0px' },
  { left: '0px', bottom: '0px' },
  { right: '0px', bottom: '0px' }
];

function createButterfly(index) {
  const butterfly = document.createElement('img');
  butterfly.src = 'butterfly.png';
  butterfly.className = 'butterfly';

  // Apply corner position
  Object.assign(butterfly.style, corners[index]);

  container.appendChild(butterfly);

  // Remove after animation
  setTimeout(() => {
    butterfly.remove();
  }, 4000);
}

// Appear butterflies from each corner
setInterval(() => {
  for (let i = 0; i < 4; i++) {
    setTimeout(() => createButterfly(i), i * 500);
  }
}, 5000);
