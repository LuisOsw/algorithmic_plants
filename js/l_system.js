/*
Contains all the rules for various plants
Employs standard rule set:
    F: Draw a line and move forward
    G: Move forward (without drawing a line)
    +: 14 right
    -: Rotate left
   [: Save current location
   ]: Restore previous location
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
