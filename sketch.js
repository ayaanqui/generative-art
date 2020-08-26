let x = 0;
let speed = 3;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100, 100, 100);

  fill(20, 30, 100)
  rect(x, 100, 100, 100);

  if (x + 100 >= width) {
    speed = -1 * speed;
  } else if (x <= 0) {
    speed = 3;
  }

  x = x + speed;
}