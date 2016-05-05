var lsys;
var turtle;
var clicks = 0;

function setup() {
  createCanvas(
    window.innerWidth,
    window.innerHeight
  );
  turtle = new Turtle(plant);
  lsys = new LSystem(plant, turtle);
  noLoop();
}

function draw() {
  push();
  background(0);
  translate(
    width / 2,
    height - 100
  );
  stroke(255, 50);
  lsys.render();
  pop();
}

function mouseClicked() {
  console.log(plant.maxClicks);
  console.log(clicks);
  if (clicks <= plant.maxClicks) {
    lsys.generate();
    turtle.shrink();
    redraw();
  }
  clicks++;
}

function windowResized() {
  resizeCanvas(
    window.innerWidth,
    window.innerHeight
  );
  background(0);
  redraw();
}