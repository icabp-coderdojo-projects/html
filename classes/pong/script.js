let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

const PADDLE_HEIGHT = 150;
const PADDLE_WIDTH = 10;
const FPS = 30;

canvas.width = 500;
context.canvas.width = 500;
canvas.height = 500;
context.canvas.height = 500;

let paddle1 = {
    x: 10,
    y: 10,
    down: false,
    up: false,
}

let paddle2 = {
    x: 500 - 20,
    y: 10,
    down: false,
    up: false,
}

window.addEventListener("keydown", (e) => {
    if (e.key == "ArrowDown") {
        paddle2.down = true;
        paddle2.up = false;
    } else if (e.key == "ArrowUp") {
        paddle2.down = false;
        paddle2.up = true;
    } else if (e.key == "s") {
        paddle1.down = true;
        paddle1.up = false;
    } else if (e.key == "w") {
        paddle1.down = false;
        paddle1.up = true;
    }
})

function animate() {
    setTimeout(function() {
        requestAnimationFrame(animate)

        context.fillStyle = "white"
        context.fillRect(paddle1.x, paddle1.y, PADDLE_WIDTH, PADDLE_HEIGHT)
        context.fillRect(paddle2.x, paddle2.y, PADDLE_WIDTH, PADDLE_HEIGHT)
    }, FPS / 100)
}

requestAnimationFrame(animate)
