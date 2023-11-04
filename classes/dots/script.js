// get canvas and get a context for said canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// frames per second to render
const FPS = 200;

// constant size of dots that does not change
const DOTSIZE = 3;
const DOTCOUNT = 500;
const DOTDISTANCE = 100;

// { x: number, y: number, vx: number, vy: number }
var dots = [];

/**
 * return a random number between 0 and max
 *
 * @param {number} max
 */
function randomPosNumber(max) {
  return Math.floor(Math.random() * max);
}

function randomVelNumber() {
  const random = Math.random();
  if (random > 0.5) {
    return Math.random() * -1;
  } else {
    return Math.random() * 0.5;
  }
}

/**
 * resize the canvas
 */
function setCanvasSize() {
  canvas.width = window.innerWidth;
  ctx.canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.canvas.height = window.innerHeight;
}

function animate() {
  setTimeout(function () {
    requestAnimationFrame(animate);
    ctx.fillStyle = "white";
    ctx.strokeStyle = "white";
    ctx.lineWidth = 0.5;

    // if dots havent been initialized yet, initialize
    if (dots.length == 0) {
      for (let i = 0; i < DOTCOUNT; i++) {
        dots.push({
          x: randomPosNumber(ctx.canvas.width),
          y: randomPosNumber(ctx.canvas.width),
          vx: randomVelNumber(),
          vy: randomVelNumber(),
        });
      }
    } else {
      // animate
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      console.log("animate");
      dots.forEach((dot) => {
        dot.x += dot.vx;
        dot.y += dot.vy;

        if (dot.x > ctx.canvas.width - DOTSIZE || dot.x < 0) {
          dot.vx *= -1;
          dot.x += dot.vx;
        }

        if (dot.y > ctx.canvas.height - DOTSIZE || dot.y < 0) {
          dot.vy *= -1;
          dot.y += dot.vy;
        }
        ctx.fillRect(dot.x, dot.y, DOTSIZE, DOTSIZE);
      });

      for (let i = 0; i < DOTCOUNT; i++) {
        for (let j = 0; j < DOTCOUNT; j++) {
          let dot1 = dots[i];
          let dot2 = dots[j];
          if (
            Math.sqrt(
              Math.pow(dot2.x - dot1.x, 2) + Math.pow(dot2.y - dot1.y, 2) * 1.0
            ) < DOTDISTANCE
          ) {
            ctx.beginPath(); // start a path
            ctx.moveTo(dot1.x, dot1.y);
            ctx.lineTo(dot2.x, dot2.y);
            ctx.stroke(); // fill line
          }
        }
      }
    }
  }, 1000 / FPS);
}

// whenever window is resized, change the canvas width and height to be full screen
window.addEventListener("resize", (_e) => setCanvasSize());
setCanvasSize();

requestAnimationFrame(animate);
