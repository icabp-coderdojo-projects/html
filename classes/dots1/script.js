var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

// frames per second
const FPS = 30;
// size of dots (in pixels)
const DOTSIZE = 20;
// number of dots to add
const DOTCOUNT = 100;

// list of all the dots in the canvas
var dots = [];

// set the size of the canvas to the viewport width
// and height
function setSize() {
  console.log("setting the canvas size");
  canvas.width = window.innerWidth;
  context.canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  context.canvas.height = window.innerHeight;
}

window.addEventListener("resize", (_) => setSize());
setSize();

function getRandomPos(max) {
  return Math.floor(Math.random() * max);
}

function getRandomVel() {
  var positive = Math.random();
  if (positive >= 0.5) {
    return Math.random();
  } else {
    return Math.random() * -1;
  }
}

function animate() {
  setTimeout(function () {
    requestAnimationFrame(animate);
    console.log("animate");

    if (dots.length === 0) {
      for (let i = 0; i < DOTCOUNT; i++) {
        dots.push({
          x: getRandomPos(context.canvas.width - DOTSIZE),
          y: getRandomPos(context.canvas.height - DOTSIZE),
          vx: getRandomVel(),
          vy: getRandomVel(),
        });
      }
      console.log(dots);
    } else {
      context.fillStyle = "white";
      context.strokeStyle = "white";
      context.lineWidth = 0.5;
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);

      for (let i = 0; i < DOTCOUNT; i++) {
        dots[i].x += dots[i].vx;
        dots[i].y += dots[i].vy;

        context.fillRect(dots[i].x, dots[i].y, DOTSIZE, DOTSIZE);
      }
    }
  }, 1000 / FPS);
}

requestAnimationFrame(animate);
