initGamepad = (function () {
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

  if (!gamepad.init()) {
    alert('Your browser does not support gamepads.  Please use Chrome or Firefox.');
  }

  return gamepad;
})();
// end gamepad init
