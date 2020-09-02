let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200, 250, 250);

  for (var i = 0; i < random(30, 120); i++) {
    balls.push(new Ball());
  }
}

function draw() {
  for (var i = 0; i < balls.length; i++) {
    balls[i].show();
  }
}

class Ball {
  constructor() {
    this.c = random(10, 40);
    this.r = Math.sqrt(this.c);
    this.x = random(0, width - this.r);
    this.y = random(0, height - this.r);
    this.xSpeed = 3;
    this.ySpeed = 3;

    this.colors = {
      r: random(random(48, 200), 255),
      g: random(random(99, 255), random(50, 255)),
      b: random(210, random(0, 170))
    };
  }

  show() {
    ellipse(this.x, this.y, this.c, this.c);
    noStroke();
    fill(this.colors.r, this.colors.g, this.colors.b);

    if (this.x >= (width - this.r) || this.x <= this.r)
      this.xSpeed = -1 * this.xSpeed + 1;

    if (this.y >= (height - this.r) || this.y <= this.r)
      this.ySpeed = -1 * this.ySpeed + 1;

    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
}