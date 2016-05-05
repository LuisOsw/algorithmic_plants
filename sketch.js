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
  stroke(255, 50);
  turtle.translateStart();
  // translate(
  //   width / 2,
  //   height - 100
  // );
  lsys.render();
  pop();
}

function mouseClicked() {
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