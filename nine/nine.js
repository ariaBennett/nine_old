

if (Meteor.isClient) {
  Meteor.startup(function() { 
    Session.set('isDebug', true);

    if (Session.equals('isDebug', true)) {

      Crafty.init(1024, 576);
      Crafty.c("RandomPosition", {
        init: function() {
          this.attr({
            x: Crafty.math.randomInt(50,350), y: Crafty.math.randomInt(50,350)
          });
        }
      });

      var player = Crafty.e("2D, DOM, Fourway, RandomPosition, Collision, Tween, Color, Player, Delay").fourway(5).color("green").attr({w: 16, h: 16}).onHit('Enemy', function() {
          this.disableControl();
          var controlLossDuration = 10;
          this.tween({x: this.x - 30}, controlLossDuration);
      }, function() {
        this.delay(function () {
          this.enableControl();
        }, 10, 0);
      });
      var enemy = Crafty.e("2D, DOM, RandomPosition, Color, Collision, Enemy").color("red").attr({w: 16, h: 16});

      Crafty.modules({'crafty-debug-bar': 'release'}, function() {
        Crafty.debugBar.show();
      });
    } // isDebug closure
  
  });  // Meteor.startup closure
} // Meteor.isClient closure

if (Meteor.isServer) {
} // Meteor.isServer closure
