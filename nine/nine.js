if (Meteor.isClient) {
  Nine = function() {
    // start gamepad init
    var gamepad = new Gamepad();

    gamepad.bind(Gamepad.Event.CONNECTED, function(device) {
      // a new gamepad connected
    });

    gamepad.bind(Gamepad.Event.DISCONNECTED, function(device) {
      // gamepad disconnected
    });

    gamepad.bind(Gamepad.Event.UNSUPPORTED, function(device) {
      // an unsupported gamepad connected (add new mapping)
    });

    gamepad.bind(Gamepad.Event.BUTTON_DOWN, function(e) {
      // e.control of gamepad e.gamepad pressed down
      if (_.has(Session.get('controls').gamepad, e.control)) {
        console.log('Button Pressed: ' + e.control);
      }
    });

    gamepad.bind(Gamepad.Event.BUTTON_UP, function(e) {
      // e.control of gamepad e.gamepad released
    });

    gamepad.bind(Gamepad.Event.AXIS_CHANGED, function(e) {
      // e.axis changed to value e.value for gamepad e.gamepad
      if (_.has(Session.get('controls').gamepad, e.axis)) {

        var threshold = 0.1;

        if ((e.value) > threshold) {
          console.log('Direction pressed: ' + Session.get('controls').gamepad[e.axis].positive);
        }
        else if ((e.value) < -threshold) {
          console.log('Direction pressed: ' + Session.get('controls').gamepad[e.axis].negative);
        }
        else {
          console.log('Direction axis set to zero for: ' + Session.get('controls').gamepad[e.axis].positive 
            + ' and: ' + Session.get('controls').gamepad[e.axis].negative);
        }
      }
    });

    gamepad.bind(Gamepad.Event.TICK, function(gamepads) {
      // gamepads were updated (around 60 times a second)
    });

    this.gamepad = gamepad;

    if (!this.gamepad.init()) {
      alert('Your browser does not support gamepads.  Please use Chrome or Firefox.');
    }
    // end gamepad init

    // begin controls init
    Session.set('controls', { 

      'gamepad' : { // start gamepad
        'LEFT_STICK_X' : {
          'positive' : 'right',
          'negative' : 'left'
        },
        'LEFT_STICK_Y' : {
          'positive' : 'down',
          'negative' : 'up'
        }
        /*
        'DPAD_RIGHT' : 'right',
        'DPAD_DOWN' : 'down',
        'DPAD_LEFT' : 'left',
        'DPAD_UP' : 'up'
        */
      }, // end gamepad

      'keyboard' : { // start keyboard
        '39' : 'right', // right arrow key
        '40' : 'down', // down arrow key
        '37' : 'left', // left arrow key
        '38' : 'up' // up arrow key
      } // end keyboard

    }); // end controls init
    
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
