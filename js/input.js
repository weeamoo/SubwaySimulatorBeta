//empty container vars
var input = {};
var gamepad;
var controllerMode = false;
//this is the list of bindable controlls in the game and stuff pulls from it now
input.up = {};
input.down = {};
input.left = {};
input.right = {};
input.brakes = {};
input.doorControl = {};
input.shoot = {};
input.special = {};
input.radio = {};
input.hop= {};
input.phone = {};
input.pause = {};
//pause is weird

//no pressed var for pause cause weird

var viewKeycode = false;

//default binds
input.left.a = 37;
input.left.b = 65;
input.left.c = 74;
input.right.a = 39;
input.right.b = 68;
input.right.c = 76;
input.up.a = 38;
input.up.b = 87;
input.up.c = 73;
input.down.a = 40;
input.down.b = 83;
input.down.c = 75;
input.brakes.a = 16;
input.brakes.b = 0;
input.brakes.c = 0;
input.pause.a = 27;
input.pause.b = 0;
input.pause.c = 0;
input.doorControl.a = 71;
input.doorControl.b = 0;
input.doorControl.c = 0;
input.shoot.a = 90;
input.shoot.b = 0;
input.shoot.c = 0;
input.special.a = 88;
input.special.b = 0;
input.special.c = 0;
input.radio.a = 82;
input.radio.b = 0;
input.radio.c = 0;
input.phone.a = 67;
input.phone.b = 0;
input.phone.c = 0;
input.hop.a = 32;
input.hop.b = 0;
input.hop.c = 0;

//generate pressed vars
for (var property in input) {
  eval("input." + property + ".pressed = false");
}

//called every frame to update input values
function updateInput () {

  //updates gamepad var with new info
  getControllerInput();

  //controller support is new so it is off by default
  if (controllerMode) {

    //left and right axis
    switch (gamepad.axes[0]) {
      case -1:
        input.left.pressed = true;
        input.right.pressed = false;
      break;
      case 0:
        input.left.pressed = false;
        input.right.pressed = false;
      break;
      case 1:
        input.left.pressed = false;
        input.right.pressed = true;
      break;
    }

    //up and down axis
    //looks backwards but it works
    switch (gamepad.axes[1]) {
      case -1:
        input.up.pressed = true;
        input.down.pressed = false;
        player.lastPress = "Up";
      break;
      case 0:
        input.up.pressed = false;
        input.down.pressed = false;
      break;
      case 1:
        input.up.pressed = false;
        input.down.pressed = true;
        player.lastPress = "Down";
      break;
    }

    //B button
    //B for breaks
    if (gamepad.buttons[0].pressed) {
      input.brakes.pressed = true;
    } else {
      input.brakes.pressed = false;
    }

    //select
    //select = door?
    //what the fuck
    //it's testing
    //k fine
    if (gamepad.buttons[9].pressed) {
      input.doorControl.pressed = true;
    } else {
      input.doorControl.pressed = false;
    }
  
  }
  
}

//sets var to true when key is pressed
document.onkeydown = function(event) {
  switch (event.keyCode) {
    case input.left.a:
    case input.left.b:
    case input.left.c:
        input.left.pressed = true;
      break;
    case input.right.a:
    case input.right.b:
    case input.right.c:
        input.right.pressed = true;
      break;
    case input.up.a:
    case input.up.b:
    case input.up.c:
        input.up.pressed = true;
        entity.player.lastPress = "Up";
      break;
    case input.down.a:
    case input.down.b:
    case input.down.c:
        input.down.pressed = true;
        entity.player.lastPress = "Down"
      break;
    case input.brakes.a:
    case input.brakes.b:
    case input.brakes.c:
        input.brakes.pressed = true;
      break;
//    pause menu
    case input.pause.a:
    case input.pause.b:
    case input.pause.c:
        togglePause();
      break;
    case input.doorControl.a:
    case input.doorControl.b:
    case input.doorControl.c:
        input.doorControl.pressed = true;
        togglePlayerDoor();
      break;
    case input.shoot.a:
    case input.shoot.b:
    case input.shoot.c:
        input.shoot.pressed = true;
      break;
    case input.special.a:
    case input.special.b:
    case input.special.c:
        input.special.pressed = true;
      break;
    case input.radio.a:
    case input.radio.b:
    case input.radio.c:
        input.radio.pressed = true;
      break;
    case input.phone.a:
    case input.phone.b:
    case input.phone.c:
        input.phone.pressed = true;
      break;
    case input.hop.a:
    case input.hop.b:
    case input.hop.c:
        input.hop.pressed = true;
        hop(entity.player, 25);
      break;
  }
  
  //stuff for binding keys
  lastKey = event.keyCode;
  
  //    outputs key code when viewKeycode is true
  if (viewKeycode) { 
    alert("JS Keycode: " + event.keyCode + "\nLookup Table: " + keyCodeLookup[event.keyCode]);
  } if (bindMenuOpen) {
    //runs code for updating display of last pressed key in binding menu when it's open
    updateLastPressDisplay ()
  }
};

//sets var to false when key is released
document.onkeyup = function(event) {
  switch (event.keyCode) {
    case input.left.a:
    case input.left.b:
    case input.left.c:
        input.left.pressed = false;
      break;
    case input.right.a:
    case input.right.b:
    case input.right.c:
        input.right.pressed = false;
      break;
    case input.up.a:
    case input.up.b:
    case input.up.c:
        input.up.pressed = false;
      break;
    case input.down.a:
    case input.down.b:
    case input.down.c:
        input.down.pressed = false;
      break;
    case input.brakes.a:
    case input.brakes.b:
    case input.brakes.c:
        input.brakes.pressed = false;
      break;
    case input.shoot.a:
    case input.shoot.b:
    case input.shoot.c:
        input.shoot.pressed = false;
      break;
    case input.special.a:
    case input.special.b:
    case input.special.c:
        input.special.pressed = false;
      break;
    case input.radio.a:
    case input.radio.b:
    case input.radio.c:
        input.radio.pressed = false;
      break;
    case input.phone.a:
    case input.phone.b:
    case input.phone.c:
        input.phone.pressed = true;
      break;
    case input.hop.a:
    case input.hop.b:
    case input.hop.c:
        input.hop.pressed = false;
      break;
    }
};

function getControllerInput () {
  gamepad = navigator.getGamepads()[0];
}
