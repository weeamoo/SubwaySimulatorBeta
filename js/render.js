//containers for storing values adjusted for movement factors
xPos = [];
yPos = [];

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

	//vars divide by 16 and divide by 9 translate game units to percent values the factor is a movement factor for giving things scale
	xPos.bg1 = xPass * bg1factor / 16;
	yPos.bg1 = yPass * bg1factor / 9;
	xPos.bg2 = xPass * bg2factor / 16;
	yPos.bg2 = yPass * bg2factor / 9;
	xPos.bg3 = xPass * bg3factor / 16;
	yPos.bg3 = yPass * bg3factor / 9;
	xPos.bg4 = xPass * bg4factor / 16;
	yPos.bg4 = yPass * bg4factor / 9;
	xPos.bg5 = xPass * bg5factor / 16;
	yPos.bg5 = yPass * bg5factor / 9;
	xPos.fg1 = xPass * fg1factor / 16;
	yPos.fg1 = yPass * fg1factor / 9;
	xPos.fg2 = xPass * fg2factor / 16;
	yPos.fg2 = yPass * fg2factor / 9;
	xPos.fg3 = xPass * fg3factor / 16;
	yPos.fg3 = yPass * fg3factor / 9;
	xPos.fg4 = xPass * fg4factor / 16;
	yPos.fg4 = yPass * fg4factor / 9;
	xPos.fg5 = xPass * fg5factor / 16;
	yPos.fg5 = yPass * fg5factor / 9;
	xPos.sfg1 = xPass * sfg1factor / 16;
	yPos.sfg1 = yPass * sfg1factor / 9;

	document.getElementById("worldBg1").style.left = xPos.bg1 + "%";
	document.getElementById("worldBg1").style.bottom = yPos.bg1 + "%"
	document.getElementById("worldBg2").style.left = xPos.bg2 + "%";
	document.getElementById("worldBg2").style.bottom = yPos.bg2 + "%"
	document.getElementById("worldBg3").style.left = xPos.bg3 + "%";
	document.getElementById("worldBg3").style.bottom = yPos.bg3 + "%"
	document.getElementById("worldBg4").style.left = xPos.bg4 + "%";
	document.getElementById("worldBg4").style.bottom = yPos.bg4 + "%"
	document.getElementById("worldBg5").style.left = xPos.bg5 + "%";
	document.getElementById("worldBg5").style.bottom = yPos.bg5 + "%"
	document.getElementById("worldFg1").style.left = xPos.fg1 + "%";
	document.getElementById("worldFg1").style.bottom = yPos.fg1 + "%"
	document.getElementById("worldFg2").style.left = xPos.fg2 + "%";
	document.getElementById("worldFg2").style.bottom = yPos.fg2 + "%"
	document.getElementById("worldFg3").style.left = xPos.fg3 + "%";
	document.getElementById("worldFg3").style.bottom = yPos.fg3 + "%"
	document.getElementById("worldFg4").style.left = xPos.fg4 + "%";
	document.getElementById("worldFg4").style.bottom = yPos.fg4 + "%"
	document.getElementById("worldFg5").style.left = xPos.fg5 + "%";
	document.getElementById("worldFg5").style.bottom = yPos.fg5 + "%"
	document.getElementById("worldSFg1").style.left = xPos.sfg1 + "%";
	document.getElementById("worldSFg1").style.bottom = yPos.sfg1 + "%"
}

//universial function that can move other stuff
function updatePos (elementID, xPass, yPass) {

// translates game units to percent of screen
	xPass = xPass / 16;
	yPass = yPass / 9;

	document.getElementById(elementID).style.left = xPass + "%";
	document.getElementById(elementID).style.bottom = yPass + "%"
}
