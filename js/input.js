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
left.1 = 37;
left.2 = 65;
left.3 = 74;
right.1 = 39;
right.2 = 68;
right.3 = 76;
up.1 = 38;
up.2 = 87;
up.3 = 73;
down.1 = 40;
down.2 = 83;
down.3 = 75;
brakes.1 = 16;
brakes.2 = "UNBOUND";
brakes.3 = "UNBOUND";
pause.1 = 27;
pause.2 = "UNBOUND";
pause.3 = "UNBOUND";

//sets var to true when key is pressed
document.onkeydown = function(event) {
  switch (event.keyCode) {
    case left.1:
    case left.2:
    case left.3:
        left.pressed = true;
      break;
    case right.1:
    case right.2:
    case right.3:
        right.pressed = true;
      break;
    case up.1:
    case up.2:
    case up.3:
        up.pressed = true;
      break;
    case down.1:
    case down.2:
    case down.3:
        down.pressed = true;
      break;
    case brakes.1:
    case brakes.2:
    case brakes.3:
        brakes.pressed = true;
      break;
//    pause menu
    case pause.1:
    case pause.2:
    case pause.3:
        togglePause();
      break;
//    outputs key code when viewKeycode is true
    default:
      if (viewKeycode) { 
        alert(event.keyCode);
      }
      break;

    }
};

//sets var to false when key is released
document.onkeyup = function(event) {
  switch (event.keyCode) {
    case left.1:
    case left.2:
    case left.3:
        left.pressed = false;
      break;
    case right.1:
    case right.2:
    case right.3:
        right.pressed = false;
      break;
    case up.1:
    case up.2:
    case up.3:
        up.pressed = false;
      break;
    case down.1:
    case down.2:
    case down.3:
        down.pressed = false;
      break;
    case brakes.1:
    case brakes.2:
    case brakes.3:
        brakes.pressed = false;
      break;
    }
};
