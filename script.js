const container = document.getElementById('butterfly-container');

function createButterfly() {
  const butterfly = document.createElement('img');
  butterfly.src = 'butterfly.png';
  butterfly.className = 'butterfly';

  // Set initial position near a random corner
  const positions = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
  const corner = positions[Math.floor(Math.random() * positions.length)];

  let startX = 0;
  let startY = 0;
  if (corner.includes('right')) startX = window.innerWidth;
  if (corner.includes('bottom')) startY = window.innerHeight;

  butterfly.style.left = `${startX}px`;
  butterfly.style.top = `${startY}px`;

  // Random motion vector
  const dx = (Math.random() - 0.5) * window.innerWidth * 1.5;
  const dy = (Math.random() - 0.5) * window.innerHeight * 1.5;

  // Random scale
  const scale = 0.5 + Math.random() * 0.7;
  butterfly.style.setProperty('--x', `${dx}px`);
  butterfly.style.setProperty('--y', `${dy}px`);
  butterfly.style.setProperty('--scale', scale);

  container.appendChild(butterfly);

  setTimeout(() => {
    butterfly.remove();
  }, 8000);
}

setInterval(createButterfly, 1200);
