$( document ).ready( function() {

  // randomly generate a plant
  var random_plant = Math.floor(
    Math.random() * Object.keys(plants).length
  );
  selected_plant = random_plant;

  // populate the nav bar on initial load
  Object.keys(plants).forEach(function(key) {
    var name = plants[key].name;
    $("#navbar").append(
      '<li class="plants" id="' + key + '">' + name + '</li>'
    );
  });

  plant = plants[selected_plant];
  $('#' + selected_plant).addClass(
    'selected_plant'
  );

  $('.plants').on('click', function() {
    noLoop();
    $('#' + selected_plant).removeClass(
      'selected_plant'
    );
    selected_plant = this.id;
    $('#' + selected_plant).addClass(
      'selected_plant'
    );
    // set all of the variables anew
    plant = plants[selected_plant];
    turtle = new Turtle(plant);
    lsys = new LSystem(plant, turtle);
    framesPassed = 0;
    loop();
  });

});
