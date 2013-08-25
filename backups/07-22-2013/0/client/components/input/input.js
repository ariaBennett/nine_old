Input = function() {
  this.gamepad = initGamepad();
  // begin input init
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

  }); // end input init
  return this;
};
