const bubble = document.getElementById('bubble');

const mouseFunction = (mouse) => {
  const clientX = mouse.clientX ? mouse.clientX : mouse.touches[0].clientX;
  const clientY = mouse.clientY ? mouse.clientY : mouse.touches[0].clientY;
  bubble.style = `--top: ${clientY}px; --left: ${clientX}px;`;
};

window.addEventListener('mousemove', mouseFunction);
window.addEventListener('touchstart', mouseFunction);