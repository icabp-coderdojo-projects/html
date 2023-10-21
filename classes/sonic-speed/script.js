// Select sonicGif in DOM so we can do things to it with javascript
const stepSize = 200;
const sonicGif = document.getElementById('sonic-running');

sonicGif.style.marginTop = 0;
sonicGif.style.marginLeft = 0;

// Create functions which move Sonic around page using margins
function moveSonicDown() {
  const currentMarginTop = parseInt(sonicGif.style.marginTop);
  sonicGif.style.marginTop = (currentMarginTop + stepSize) + 'px';
}

function moveSonicUp() {
  const currentMarginTop = parseInt(sonicGif.sytle.marginTop);
  sonicGif.style.marginTop = (currentMarginTop - stepSize) + 'px';
}

function moveSonicRight() {
  const currentMarginLeft = parseInt(sonicGif.style.marginLeft);
  console.log(currentMarginLeft)
  sonicGif.style.marginLeft = (currentMarginLeft + stepSize) + 'px';
}

function moveSonicLeft() {
  const currentMarginLeft = parseInt(sonicGif.style.marginLeft);
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
