//runs every frame
function everyFrame () {

	//don't run the game if it's paused
	if (paused == false) {

		frameMovement();

		frameSpeedEnv();

		renderStuff();
	}

	//calls function after one frame has passed
	requestAnimationFrame(everyFrame);
}

function frameMovement () {
	
	update(player);

}

function frameSpeedEnv () {
	if (player.input.brakes) {
		if (Math.abs(player.xSpeed) < player.brakesFullStop) {
			player.xSpeed = 0;
		} else if (player.xSpeed > 0) {
			player.xSpeed = brake(player.xSpeed, 1, player.brakePower);
		} else {
			player.xSpeed = brake(player.xSpeed, -1, player.brakePower);
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
