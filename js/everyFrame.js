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
	if (left.pressed) {
		if (Math.abs(player.xSpeed) < player.kick) {
			player.xSpeed = 0 - player.kick;
		}
		player.xSpeed = accel(player.xSpeed, -1, player.accelPower);
	} else if (right.pressed) {
		if (Math.abs(player.xSpeed) < player.kick) {
			player.xSpeed = player.kick;
		}
		player.xSpeed = accel(player.xSpeed, 1, player.accelPower);
	}
	
	//y coord movement if you have freecam or unlocked
	
	if (noClip || player.unlockY) {
		if (up.pressed) {
		if (Math.abs(player.ySpeed) < player.kick) {
			player.ySpeed = 0 - player.kick;
		}
		player.ySpeed = accel(player.ySpeed, -1, player.accelPower);
	} else if (down.pressed) {
		if (Math.abs(player.ySpeed) < player.kick) {
			player.ySpeed = player.kick;
		}
		player.ySpeed = accel(player.xSpeed, 1, player.accelPower);
	}
	}

}

function frameMovement () {

	//sets y to where the rail is (if needed)
	if (noClip == false && player.unlockY == false) {
		player.y = getNearestRail(player.x, player.y);
	}

	//applies one frame of movement
	player.x = player.x + player.xSpeed;

	//calcs new camera pos
	updateCameraOffset();

	//moves sub to position & moves camera if freecam is off
	if (freeCam) {
		updateSubPos(player.x, player.y);
	} else {
		updateSubPos(player.x - xOffset, player.y - yOffset);
		updateBackPos(0 - xOffset, 0 - yOffset);
	}

}

//need to redo this so that anything can use it when ai cars are added
function frameSpeedEnv () {
	if (brakes.pressed) {
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
