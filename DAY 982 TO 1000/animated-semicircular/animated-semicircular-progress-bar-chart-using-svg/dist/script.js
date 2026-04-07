// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

// Initialize Progress Bars
var path1 = new ProgressBar.Path(document.getElementById('chart-progress'), { duration: 1200, easing: 'easeInOut' });
var path2 = new ProgressBar.Path(document.getElementById('chart-progress1'), { duration: 1200, easing: 'easeInOut' });
var path3 = new ProgressBar.Path(document.getElementById('chart-progress2'), { duration: 1200, easing: 'easeInOut' });

function initializeProgressBars() {
  path1.set(0); path1.animate(0.8);
  path2.set(0); path2.animate(1);
  path3.set(0); path3.animate(0.3);
}

function applyCurrentAnimation() {
  if (document.getElementById('animation-toggle').checked) {
    restartCountUpAnimation();
  } else {
    restartFadeInAnimation();
  }
}

function restartAnimations() {
  initializeProgressBars();
  if (document.getElementById('animation-toggle').checked) {
    restartCountUpAnimation();
  } else {
    restartFadeInAnimation();
  }
}

function restartCountUpAnimation() {
  document.querySelectorAll('.countup').forEach(el => {
    el.style.animation = 'none'; // Remove any existing animation
    el.offsetHeight; // Trigger reflow
    el.style.animation = ''; // Reset the style to default
    el.classList.add('countup');
  });
}

function restartFadeInAnimation() {
  document.querySelectorAll('.amount, .amount2').forEach(el => {
    el.style.opacity = 0;
    setTimeout(() => {
      el.style.opacity = 1;
    }, 100); // The transition will apply here
  });
}

document.getElementById('restart-button').addEventListener('click', restartAnimations);

window.onload = function() {
  initializeProgressBars();
  if (document.getElementById('animation-toggle').checked) {
    restartCountUpAnimation();
  }
};