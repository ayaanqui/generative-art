let x = 450;
let speed = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200, 250, 250);
}

function draw() {
  ellipse(mouseX, mouseY, 50, 50);

  if (x >= windowWidth - 25 || x < 25) {
    speed = -speed;
  }
  x = x + speed;

  if (mouseIsPressed) {
    fill(255, random(50, 255), random(0, 170));
  } else {
    fill(random(48, 200), random(99, 255), 210);
  }
  noStroke();
}

function keyPressed() {
  saveCanvas('myCanvas', 'png');
}