//empty container vars
var up = {};
var down = {};
var left = {};
var right = {};
var brakes = {};
//pause is weird
var pause = {};

//set pressed to false to start
up.pressed = false;
down.pressed = false;
left.pressed = false;
right.pressed = false;
brakes.pressed = false;
//no pressed var for pause cause weird

var viewKeycode = false;

//default binds
left.a = 37;
left.b = 65;
left.c = 74;
right.a = 39;
right.b = 68;
right.c = 76;
up.a = 38;
up.b = 87;
up.c = 73;
down.a = 40;
down.b = 83;
down.c = 75;
brakes.a = 16;
brakes.b = "UNBOUND";
brakes.c = "UNBOUND";
pause.a = 27;
pause.b = "UNBOUND";
pause.c = "UNBOUND";

//sets var to true when key is pressed
document.onkeydown = function(event) {
  switch (event.keyCode) {
    case left.a:
    case left.b:
    case left.c:
        left.pressed = true;
      break;
    case right.a:
    case right.b:
    case right.c:
        right.pressed = true;
      break;
    case up.a:
    case up.b:
    case up.c:
        up.pressed = true;
      break;
    case down.a:
    case down.b:
    case down.c:
        down.pressed = true;
      break;
    case brakes.a:
    case brakes.b:
    case brakes.c:
        brakes.pressed = true;
      break;
//    pause menu
    case pause.a:
    case pause.b:
    case pause.c:
        togglePause();
      break;
//    outputs key code when viewKeycode is true
    default:
      if (viewKeycode) { 
        alert("JS Keycode: " + event.keyCode + "\\nLookup Table: " + keyCodeLookup[event.keyCode]);
      }
      break;

    }
};

//sets var to false when key is released
document.onkeyup = function(event) {
  switch (event.keyCode) {
    case left.a:
    case left.b:
    case left.c:
        left.pressed = false;
      break;
    case right.a:
    case right.b:
    case right.c:
        right.pressed = false;
      break;
    case up.a:
    case up.b:
    case up.c:
        up.pressed = false;
      break;
    case down.a:
    case down.b:
    case down.c:
        down.pressed = false;
      break;
    case brakes.a:
    case brakes.b:
    case brakes.c:
        brakes.pressed = false;
      break;
    }
};
