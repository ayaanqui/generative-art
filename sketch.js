let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200, 250, 250);

  const numBalls = random(30, 120);

  for (var i = 0; i < numBalls; i++) {
    balls.push(new Ball());
  }
}

function draw() {
  for (var i = 0; i < balls.length; i++) {
    balls[i].show();
    // balls[i].spawnNewColor();
  }

  if (mouseIsPressed) {
    balls.push(new Ball());
  }
}

class Ball {
  constructor() {
    this.c = random(10, 40);
    this.r = this.c / 2;
    this.x = random(random(3, 5), width - this.r);
    this.y = random(random(0, 2), height - this.r);
    this.xSpeed = 3;
    this.ySpeed = 3;

    this.spawnNewColor();
  }

  spawnNewColor() {
    this.colors = {
      r: random(20, 200),
      g: random(39, 255),
      b: random(200, 240),
    };
  }

  show() {
    noStroke();
    fill(this.colors.r, this.colors.g, this.colors.b);
    ellipse(this.x, this.y, this.c, this.c);

    const randMult = random(1);

    if (this.x >= (width - this.r) || this.x <= this.r) {
      this.xSpeed = -1 * this.xSpeed;
    }

    if (this.y >= (height - this.r) || this.y <= this.r) {
      this.ySpeed = -1 * this.ySpeed;
    }

    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
}