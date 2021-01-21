//seting up vars

var xMin = 800;
var yMin = 450;
var xMax = 0;
var yMax = 0;
var xOffset = 0;
var yOffset = 0;

//recalculates bounds for level
function calcBounds () {
	xMax = levelWidth - 800;
	yMax = levelHeight - 450;
}

//updates offsets for current position
function updateCameraOffset () {
	if (x < xMin) {
		//smaller than min, camera all the way to the left
		xOffset = 0;
	} else if (x > xMax) {
		//larger than max, camera all the way to the right
		xOffset = xMax - 800;
	} else {
		//between min and max, calc offset
		xOffset = x - xMin;
	}

	/* if (y < yMin) {
		//smaller than min, camera all the way to the bottom
		yOffset = 0;
	} else if (y > yMax) {
		//larger than max, camera all the way to the bottom
		yOffset = xMax;
	} else {
		//between min and max, calc offset
		yOffset = y - yMin;
	} */
}
