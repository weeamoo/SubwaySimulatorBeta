//container for differnet ai to make organization happen
var ai = {};

//placeholder ai, probably will do nothing
ai.default = function (entityPass) {};

//set to this for it be controlled by controller/keyboard
ai.controller = function (entityPass) {
	//goes through each physical input and copies it to entity's input
	for (var property in input) {
		eval("entityPass.input." + property + " = input." + property + ".pressed;");
	}
};

//simple ai for car to go from one side of the map to the other 
ai.wanderCar = function (entityPass) {
	//slow movemet, will hit the brakes if going too fast
	if (Math.abs(entityPass.xSpeed) > entityPass.speedLimit) {
		entityPass.input.brakes = true;
		entityPass.input.left = false;
		entityPass.input.right = false;
	} else {
		//lets go of brake once slow enough
		entityPass.input.brakes = false;
	}

	//if you're really far left it will start you going right
	if (entityPass.x < 300) {
		entityPass.input.right = true;
	} else if (entityPass.x > levelWidth - 300) {
		//same thing but if ur right u go left
		entityPass.input.left = true;
	}
}

ai.bullet = {};
//standard bullet ai
ai.bullet.norm = function (entityPass) {
	//remove if it goes off the screen
	if (entityPass.x > levelWidth) {
		document.getElementById(entityPass.id) = "";
		delete entityPass;
	}
	
}
