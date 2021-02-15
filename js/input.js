//empty container vars
var input = {};
input.up = {};
input.down = {};
input.left = {};
input.right = {};
input.brakes = {};
input.doorControl = {};
//pause is weird
input.pause = {};

//set pressed to false to start
input.up.pressed = false;
input.down.pressed = false;
input.left.pressed = false;
input.right.pressed = false;
input.brakes.pressed = false;
input.doorControl.pressed = false;
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
        player.lastPress = "Up";
      break;
    case input.down.a:
    case input.down.b:
    case input.down.c:
        input.down.pressed = true;
        player.lastPress = "Down"
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
    }
};
