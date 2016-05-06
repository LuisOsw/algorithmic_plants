var lsys;
var turtle;
var clicks = 0;
var framesPassed = 0;
var originalHeight;
var originalWidth;

function setup() {
  createCanvas(
    window.innerWidth,
    window.innerHeight
  );
  turtle = new Turtle(plant);
  lsys = new LSystem(plant, turtle);
  frameRate(4);
  originalWidth = width;
  originalHeight = height;
}

function draw() {
  if (framesPassed >= plant.maxGenerations) {
    noLoop();
  }
  push();
  background(0);
  stroke(255, 50);
  turtle.shrink();
  turtle.translateStart();
  lsys.generate();
  lsys.render();
  pop();
  framesPassed++;
}

// function windowResized() {
//   resizeCanvas(
//     window.innerWidth,
//     window.innerHeight
//   );

//   lsys = null;
//   background(0);
//   noLoop();
// }