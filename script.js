$( document ).ready( function() {
  // populate the nav bar on initial load
  Object.keys(plants).forEach(function(key) {
    var name = plants[key].name;
    $("#navbar").append('<li class="plants">' + name + '</li>');
  });

  $('.plants').on('click', function() {
    // declared in sketch.js
    var plant = $(this).index();


    // plant = new Plant().plant;
    // turtle = new Turtle(plant);
    // lsys = new LSystem(plant, turtle);
  });
});
