//empty container vars
var input = {};
var gamepad;
var controllerMode = false;
input.up = {};
input.down = {};
input.left = {};
input.right = {};
input.brakes = {};
input.doorControl = {};
//container for player input
player.input = {};
//pause is weird
input.pause = {};

//set pressed to false to start
player.input.up = false;
player.input.down = false;
player.input.left = false;
player.input.right = false;
player.input.brakes = false;
player.input.doorControl = false;
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
input.brakes.b = "UNBOUND";
input.brakes.c = "UNBOUND";
input.pause.a = 27;
input.pause.b = "UNBOUND";
input.pause.c = "UNBOUND";
input.doorControl.a = 71;
input.doorControl.b = "UNBOUND";
input.doorControl.c = "UNBOUND";

//called every frame to update input values
function updateInput () {

  //controller support is new so it is off by default
  if (controllerMode) {

    //updates gamepad var with new info
    getControllerInput();

    //left and right axis
    switch (gamepad.axes[0]) {
      case -1:
        player.input.left = true;
        player.input.right = false;
      break;
      case 0:
        player.input.left = false;
        player.input.right = false;
      break;
      case 1:
        player.input.left = false;
        player.input.right = true;
      break;
    }

    //up and down axis
    //looks backwards but it works
    switch (gamepad.axes[1]) {
      case -1:
        player.input.up = true;
        player.input.down = false;
      break;
      case 0:
        player.input.up = false;
        player.input.down = false;
      break;
      case 1:
        player.input.up = false;
        player.input.down = true;
      break;
    }

    //B button
    //B for breaks
    if (gamepad.buttons[0].pressed) {
      player.input.brakes = true;
    } else {
      player.input.brakes = false;
    }

    //select
    //select = door?
    //what the fuck
    //it's testing
    //k fine
    if (gamepad.buttons[9].pressed) {
      player.input.doorControl = true;
    } else {
      player.input.doorControl = false;
    }
  
  }
  
}

//sets var to true when key is pressed
document.onkeydown = function(event) {
  switch (event.keyCode) {
    case input.left.a:
    case input.left.b:
    case input.left.c:
        player.input.left = true;
      break;
    case input.right.a:
    case input.right.b:
    case input.right.c:
        player.input.right = true;
      break;
    case input.up.a:
    case input.up.b:
    case input.up.c:
        player.input.up = true;
        player.lastPress = "Up";
      break;
    case input.down.a:
    case input.down.b:
    case input.down.c:
        player.input.down = true;
        player.lastPress = "Down"
      break;
    case input.brakes.a:
    case input.brakes.b:
    case input.brakes.c:
        player.input.brakes = true;
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
        player.input.doorControl = true;
        togglePlayerDoor();
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
        player.input.left = false;
      break;
    case input.right.a:
    case input.right.b:
    case input.right.c:
        player.input.right = false;
      break;
    case input.up.a:
    case input.up.b:
    case input.up.c:
        player.input.up = false;
      break;
    case input.down.a:
    case input.down.b:
    case input.down.c:
        player.input.down = false;
      break;
    case input.brakes.a:
    case input.brakes.b:
    case input.brakes.c:
        player.input.brakes = false;
      break;
    }
};

function getControllerInput () {
  gamepad = navigator.getGamepads()[0];
}