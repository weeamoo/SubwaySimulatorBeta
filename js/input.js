//vars
var up = false;
var down = false;
var left = false;
var right = false;
var brakes = false;

var viewKeycode = false;

//default binds
var left1 = 37;
var left2 = 65;
var left3 = 74;
var right1 = 39;
var right2 = 68;
var right3 = 76;
var up1 = 38;
var up2 = 87;
var up3 = 73;
var down1 = 40;
var down2 = 83;
var down3 = 75;
var brakes1 = 16;
var brakes2 = "UNBOUND";
var brakes3 = "UNBOUND";
var pause1 = 27;
var pause2 = "UNBOUND";
var pause3 = "UNBOUND";

//sets var to true when key is pressed
document.onkeydown = function(event) {
  switch (event.keyCode) {
    case left1:
    case left2:
    case left3:
        left = true;
      break;
    case right1:
    case right2:
    case right3:
        right = true;
      break;
    case up1:
    case up2:
    case up3:
        up = true;
      break;
    case down1:
    case down2:
    case down3:
        down = true;
      break;
    case brakes1:
    case brakes2:
    case brakes3:
        brakes = true;
      break;
//    pause menu
    case pause1:
    case pause2:
    case pause3:
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
    case left1:
    case left2:
    case left3:
        left = false;
      break;
    case right1:
    case right2:
    case right3:
        right = false;
      break;
    case up1:
    case up2:
    case up3:
        up = false;
      break;
    case down1:
    case down2:
    case down3:
        down = false;
      break;
    case brakes1:
    case brakes2:
    case brakes3:
        brakes = false;
      break;
    }
};