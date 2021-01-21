//vars

var x = 0;
var y = 0;

//runs every frame
function everyFrame () {

	//don't run the game if it's paused
	if (paused == false) {

		keyActions();

		frameMovement();

		frameSpeedEnv();
	}

	//calls function after one frame has passed
	requestAnimationFrame(everyFrame);
}

function keyActions () {

	//for each directions sees if speed is far enough away from zero then calls accel function
	if (left) {
		if (Math.abs(xSpeed) < kick) {
			xSpeed = 0 - kick;
		}
		xSpeed = accel(xSpeed, -1, playerAccelPower);
	} else if (right) {
		if (Math.abs(xSpeed) < kick) {
			xSpeed = kick;
		}
		xSpeed = accel(xSpeed, 1, playerAccelPower);
	}

}

function frameMovement () {

	//sets y to where the rail is
	y = getNearestRail(x, y);

	//applies one frame of movement
	x = x + xSpeed;

	//calcs new camera pos
	updateCameraOffset();

	//moves sub to position & moves camera if freecam is off
	if (freeCam) {
		updateSubPos(x, y);
	} else {
		updateSubPos(x - xOffset, y - yOffset);
		updateBackPos(0 - xOffset, 0 - yOffset);
	}

}

function frameSpeedEnv () {
	if (brakes) {
		if (Math.abs(xSpeed) < brakesFullStop) {
			xSpeed = 0;
		} else if (xSpeed > 0) {
			xSpeed = brake(palyerBrakePower, 1, palyerBrakePower);
		} else {
			xSpeed = brake(palyerBrakePower, -1, palyerBrakePower);
		}
	}
}

//inital call to function to start eveything up
requestAnimationFrame(everyFrame);