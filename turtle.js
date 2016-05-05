/* responsible for drawing out the coordinate plane */
function Turtle(plant) {
  this.length = height / plant.initialLength;
  this.rotateRight = radians(plant.rotation);
  this.rotateLeft = -radians(plant.rotation);
  this.lengthFactor = plant.lengthFactor;
  this.translateX = plant.translateX;
  this.translateY = plant.translateY;

  this.shrink = function() {
    this.length = this.length * this.lengthFactor;
  }

  // refactor this, ugh this is clunky
  this.translateStart = function() {
    if (this.translateX || this.translateY) {
      translate(
        width / 2 + this.translateX,
        height - 100 + this.translateY
      );
    } else {
      translate(
        width / 2,
        height - 100
      );
    }
  }
}