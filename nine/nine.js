if (Meteor.isClient) {
  Meteor.startup(function() { 
    Crafty.init(1024, 576);
    Crafty.c("RandomPosition", {
      init: function() {
        this.attr({
          x: Crafty.math.randomInt(50,350), y: Crafty.math.randomInt(50,350)
        });
      }
    });

  var myEnt = Crafty.e("2D, DOM, Fourway, RandomPosition, Color").fourway(5).color("green").attr({w: 50, h: 50});
  var myEnt = Crafty.e("2D, DOM, Fourway, RandomPosition, Color").fourway(5).color("green").attr({w: 50, h: 50});
  
  });  // Meteor.startup closure
} // Meteor.isClient closure

if (Meteor.isServer) {
} // Meteor.isServer closure
