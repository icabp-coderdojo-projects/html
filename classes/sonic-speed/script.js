// Select sonicGif in DOM so we can do things to it with javascript
const stepSize = 100;
const sonicGif = document.getElementById('sonic-running');

// Create functions which move Sonic around page using margins
function moveSonicDown() {
  sonicGif.style.marginTop = (parseInt(window.getComputedStyle(sonicGif).marginTop) + stepSize) + 'px';
}

function moveSonicUp() {
  sonicGif.style.marginTop = (parseInt(window.getComputedStyle(sonicGif).marginTop) - stepSize) + 'px';
}

function moveSonicRight() {
  sonicGif.style.marginLeft = (parseInt(window.getComputedStyle(sonicGif).marginLeft) + stepSize) + 'px';
}

function moveSonicLeft() {
  sonicGif.style.marginLeft = (parseInt(window.getComputedStyle(sonicGif).marginLeft) - stepSize) + 'px';
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
