let x = 450;
let speed = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250, 100, 180);
}

function draw() {
  ellipse(x, mouseY, 100, 100);
  stroke(22);

  if (x > width - 50 || x < 50) {
    speed = -speed;
  }
  x = x + speed;

  if (mouseIsPressed) {
    fill(255, 100, 180);
  } else {
    fill(255, 255, 255);
  }
}

function keyPressed() {
  saveCanvas('myCanvas', 'png');
}