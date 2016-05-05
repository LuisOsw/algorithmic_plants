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