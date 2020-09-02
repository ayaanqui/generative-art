let x = 450;
let y = [180, 20, 400, 300];
let speed = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200, 250, 250);
}

function draw() {
  for (var i = 0; i < y.length; i++) {
    ellipse(x, y[i], 50, 50);
    noStroke();
  }

  x = x + speed;
  if (x >= windowWidth - 25 || x < 25) {
    speed = -speed;
  }
}