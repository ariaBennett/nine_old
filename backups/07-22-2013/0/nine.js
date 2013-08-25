if (Meteor.isClient) {
  Nine = function() {
    this.input = new Input(); 
    // begin Crafty init
    Crafty.init(1920, 1080, 'cr-stage');
    // end Crafty init
  }

  Meteor.startup(function() { 
    nine = new Nine(); // initialize game instance
    // begin test code
    Crafty.c("RandomPosition", {
      init: function() {
        this.attr({
          x: Crafty.math.randomInt(50,350), y: Crafty.math.randomInt(50,350)
        });
      }
    });

  var myEnt = Crafty.e("2D, DOM, Fourway, RandomPosition, Color").fourway(5).color("green").attr({w: 50, h: 50});
  var myEnt = Crafty.e("2D, DOM, RandomPosition, Color").color("red").attr({w: 50, h: 50});
  // end test code
  
  });  // Meteor.startup closure
} // Meteor.isClient closure

if (Meteor.isServer) {
} // Meteor.isServer closure
