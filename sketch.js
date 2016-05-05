// incorporate jQuery to get the selections up and running.
// notes: don't loop when not clicking --> this will make it more performant
// also add an info section to grab plant meta data and display.
// then make 3D
var lsys;
var turtle;
var clicks = 0;

function setup() {
  createCanvas(
    window.innerWidth,
    window.innerHeight
  );

  var num = Math.round(random(1, 7));
  plant = plants[num];
  // blueprints([num]);
  turtle = new Turtle(plant);
  lsys = new LSystem(plant, turtle);
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

/*
Contains all the rules for various plants
Employs standard rule set:
    F: Draw a line and move forward
    G: Move forward (without drawing a line)
    +: 14 right
    -: Rotate left
   [: Save current location
   ]: Restore previous location
Contains data for rotation
Stipulates how much to shrink by each generation
*/

function LSystem(plant, turtle) {
  this.axiom = plant.axiom;
  this.rules = plant.rules;
  this.turtle = turtle;

  this.generate = function() {
    var nextString = [];
    // dynamically generate a given plant's rules
    for (var i = 0; i <= this.axiom.length; i++) {
      var character = this.axiom.charAt(i);
      // dynamically generate the rules
      if (character in this.rules) {
        nextString.push(
          this.rules[character]
        );
      } else {
        nextString.push(character);
      }
    }
    this.axiom = nextString.toString();
  }

  this.render = function() {
    for (var i = 0; i < this.axiom.length; i++) {
      var character = this.axiom.charAt(i);
      switch(character) {
        case 'F':

          line(0, 0, 0, -this.turtle.length);
          translate(0, -this.turtle.length);
          break;
        case 'G':
          translate(0, -this.turtle.length);
          break;
        case '+':
          rotate(this.turtle.rotateRight);
          break;
        case '-':
          rotate(this.turtle.rotateLeft);
          break;
        case '[':
          push();
          break;
        case ']':
          pop();
          break;
        default:
          break;
      }
    }
  }
}

/* responsible for drawing out the coordinate plane */
function Turtle(plant) {
  this.length = height / plant.initialLength;
  this.rotateRight = radians(plant.rotation);
  this.rotateLeft = -radians(plant.rotation);
  this.lengthFactor = plant.lengthFactor;

  this.shrink = function() {
    this.length = this.length * this.lengthFactor;
  }

}

function mouseClicked() {
  if (clicks <= plant.maxClicks) {
    lsys.generate();
    turtle.shrink();
  } else {
    noLoop();
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