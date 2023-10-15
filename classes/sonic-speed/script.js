// Select sonicGif in DOM so we can do things to it with javascript
const stepSize = 200;
const sonicGif = document.getElementById('sonic-running');

// Create functions which move Sonic around page using margins
function moveSonicDown() {
  const currentMarginTop = parseInt(window.getComputedStyle(sonicGif).marginTop);
  sonicGif.style.marginTop = (currentMarginTop + stepSize) + 'px';
}

function moveSonicUp() {
  const currentMarginTop = parseInt(window.getComputedStyle(sonicGif).marginTop);
  sonicGif.style.marginTop = (currentMarginTop - stepSize) + 'px';
}

function moveSonicRight() {
  const currentMarginLeft = parseInt(window.getComputedStyle(sonicGif).marginLeft);
  sonicGif.style.marginLeft = (currentMarginLeft + stepSize) + 'px';
}

function moveSonicLeft() {
  const currentMarginLeft = parseInt(window.getComputedStyle(sonicGif).marginLeft);
  sonicGif.style.marginLeft = (currentMarginLeft - stepSize) + 'px';
}

// Add key press event listener. Only do things for arrow keys
document.onkeydown = function(e) {
  if (e.key === 'ArrowDown') {
    moveSonicDown();
    return; // Once we've found our key let's exit the function with return
  }
  if (e.key === 'ArrowUp') {
    moveSonicUp();
    return;
  }
  if (e.key === 'ArrowRight') {
    moveSonicRight();
    return;
  }
  if (e.key === 'ArrowLeft') {
    moveSonicLeft();
    return;
  }
}; 
