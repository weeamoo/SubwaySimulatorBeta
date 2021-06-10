entityTemplate.police = {};
entityTemplate.police.normal = function (name, x, y) {
	//name			the name for the entity, ex: if this was creeper it's JS var would be entity.creeper and it's html ID would be entity_creeper
	//x x-coord
	//y y-coord

	if (name == "") {
		name = "police_" + Math.random().toString().slice(2);
	}
	
	//start with default data
	var output = defaultEntityData();
	output.name = name;
	//modifies
	output.x = x;
	output.y = y;
	output.id = "entity_" + name;
	output.ai = ai.police.standard;
	output.weapon = weapon.test;
	output.speedLimitCalc = function (entityPass) {if (entityPass.lights) {return 999999;} else {return(speedLimitCalc(entityPass.x, entityPass.y))}};
	//patrolling mode
	output.patrolling = true;
	//area around police car that can be scanned for crimes
	output.range = 200;
	//how far you have to get away for car to stop following you
	output.extendedRange = 2000;
	//how much the police car will let you go over the speed limit before assigning a wanted level
	output.speedTolerance = 0.5;
	//chasing mode
	output.chasing = false;
	//what police car is chasing
	output.target = "none";
	//stores state of the lights
	output.lights = false;
	output.html = "<div id=\"" + output.id + "\" class =\"policeCarDiv\" style=\"left: 0%; bottom: 29.1111%;\"><img id=\"policeCarImg\" class=\"policeCarImg\" src=\"/img/cops/normal/cop2.png\"></div>";

	return output;
}

ai.police = {};
//standard police ai
ai.police.standard = function (entityPass) {
	if (entityPass.patrolling) {
		//code for when police car is patrolling
		//calls wanderCar ai for roaming
		ai.wanderCar(entityPass);
	}

	//checks every entity and determines if it's within the cop car's collum of sight
	for (var property in entity) {
		eval("ai.police.functions.entityCheck(entity." + property + ", entityPass);");
	}

	//manage lights
	if (entityPass.lights) {
		//lights are on, see if they need to turn off
		if (entityPass.chasing == false) {
			//okay to turn lights off now
			document.getElementById(entityPass.id).innerHTML = "<img id=\"policeCarImg\" class=\"policeCarImg\" src=\"/img/cops/normal/cop2.png\">";
			entityPass.lights = false;
		}
	} else {
		//lights are off, see if they need to turn on
		if (entityPass.chasing) {
			//okay to turn lights on now
			document.getElementById(entityPass.id).innerHTML = "<img id=\"policeCarImg\" class=\"policeCarImg\" src=\"/img/cops/normal/cop2.gif\">";
			entityPass.lights = true;
		}
	}
}

//extra code things to make thigns easier
ai.police.functions = {};
ai.police.functions.entityCheck =  function (entityPass, policePass) {
	//console.log(entityPass);
	//console.log(policePass);

	//left wall, right wall, top wall, bottom wall, not itself
	if (entityPass.x >= policePass.x - policePass.range && entityPass.x <= policePass.x + policePass.range && entityPass.y <= policePass.y + policePass.range && entityPass.y >= policePass.y - policePass.range && entityPass != policePass) {
		//this should mean car is in view
		//check for speeding & assign wanted level if needed
		//console.log("enti in range");

		if (entityPass.wantedLevel > 0) {
			if (policePass.target == "none") {
				//if car is not currently in pursuit of an entity
				policePass.target = entityPass;
				policePass.chasing = true;
				policePass.patrolling = false;
			}
		} else {
			//check speed
			if (Math.abs(entityPass.xSpeed) > entityPass.speedLimit + policePass.speedTolerance) {
				//assign wanted level
				setWantedLevel(entityPass, 1);
			}
		}

		//if entity is target of pursuit
		if (entityPass == policePass.target) {
			//end the chase if the wanted level has expired
			if (entityPass.wantedLevel == 0) {
				policePass.target = "none";
				policePass.chasing = false;
				policePass.patrolling = true;
			}
		}
	}

	//chasing AI if entity is target of pursuit
	if (entityPass.x >= policePass.x - policePass.extendedRange && entityPass.x <= policePass.x + policePass.extendedRange && entityPass.y <= policePass.y + policePass.extendedRange && entityPass.y >= policePass.y - policePass.extendedRange && entityPass == policePass.target && entityPass != policePass) {
		if (entityPass.x > policePass.x) {
			policePass.input.right = true;
			policePass.input.left = false;
		} else {
			policePass.input.right = false;
			policePass.input.left = true;
		}

		if (entityPass.y > policePass.y) {
			policePass.lastPress = "Up";
		} else {
			policePass.lastPress = "Down";
		}
	}
}
