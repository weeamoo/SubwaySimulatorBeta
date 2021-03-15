//runs every frame
function everyFrame () {

	//don't run the game if it's paused
	if (paused == false) {

		frameMovement();

		renderStuff();

		updateInput();
		
	}

	//calls function after one frame has passed
	requestAnimationFrame(everyFrame);
}

function frameMovement () {
	
	updateAll(entity);

}

function renderStuff () {
	//update HUD
	updateHUD();

	//calcs new camera pos
	updateCameraOffset();

	//moves sub to position & moves camera if freecam is off
	//updates background position with offset value
	updateBackPos(0 - xOffset, 0 - yOffset);

}

//inital call to function to start eveything up
requestAnimationFrame(everyFrame);
