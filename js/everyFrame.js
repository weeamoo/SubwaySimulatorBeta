//runs every frame
function everyFrame () {

	//don't run the game if it's paused
	if (paused == false) {

		keyActions();

		frameMovement();

		frameSpeedEnv();

		renderStuff();
	}

	//calls function after one frame has passed
	requestAnimationFrame(everyFrame);
}

function keyActions () {

	//for each directions sees if speed is far enough away from zero then calls accel function
	if (input.left.pressed && player.xSpeed > player.maxXSpeed * -1) {
		if (Math.abs(player.xSpeed) < player.kick) {
			player.xSpeed = 0 - player.kick;
		}
		player.xSpeed = accel(player.xSpeed, -1, player.accelPower);
	} else if (input.right.pressed && player.xSpeed < player.maxXSpeed * 1) {
		if (Math.abs(player.xSpeed) < player.kick) {
			player.xSpeed = player.kick;
		}
		player.xSpeed = accel(player.xSpeed, 1, player.accelPower);
	}
	
	//y coord movement if you have freecam or unlocked
	
	if (noClip || player.unlockY) {
		if (input.down.pressed && player.ySpeed > player.maxYSpeed * -1) {
		if (Math.abs(player.ySpeed) < player.kick) {
			player.ySpeed = 0 - player.kick;
		}
		player.ySpeed = accel(player.ySpeed, -1, player.accelPower);
	} else if (input.up.pressed && player.xSpeed > player.maxYSpeed * 1) {
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
		//this needs a third input for up or down for the switch selector
		player.y = getNearestRail(player.x, player.y, player.lastPress);
	}

	//applies one frame of movement
	player.x = player.x + player.xSpeed;
	player.y = player.y + player.ySpeed;

}

function frameSpeedEnv () {
	if (input.brakes.pressed) {
		if (Math.abs(player.xSpeed) < player.brakesFullStop) {
			player.xSpeed = 0;
		} else if (player.xSpeed > 0) {
			player.xSpeed = brake(player.brakePower, 1, player.brakePower);
		} else {
			player.xSpeed = brake(player.brakePower, -1, player.brakePower);
		}
	}
}

function renderStuff () {
	//update HUD
	updateHUD();

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

//inital call to function to start eveything up
requestAnimationFrame(everyFrame);
