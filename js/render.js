
//places subway car on screen using game coords
function updateSubPos (xPass, yPass) {

// translates game units to percent of screen
	xPass = xPass / 16;
	yPass = yPass / 9;

	document.getElementById("playerCarDiv").style.left = xPass + "%";
	document.getElementById("playerCarDiv").style.bottom = yPass + "%"
}

//used to move the background 
function updateBackPos (xPass, yPass) {

// translates game units to percent of screen
	xPass = xPass / 16;
	yPass = yPass / 9;

	document.getElementById("world").style.left = xPass + "%";
	document.getElementById("world").style.bottom = yPass + "%"
}

//universial function that can move other stuff
function updatePos (elementID, xPass, yPass) {

// translates game units to percent of screen
	xPass = xPass / 16;
	yPass = yPass / 9;

	document.getElementById(elementID).style.left = xPass + "%";
	document.getElementById(elementID).style.bottom = yPass + "%"
}