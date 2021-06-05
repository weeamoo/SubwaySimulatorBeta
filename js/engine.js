//no clue what thease comments are for or what I wanted to have be in this script, oh well that's probably becasue I didn't read them. LOLOLOLOLOLZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ

//I'll read them l8r



/* write code here to find screen size and save it to vars */

/* make function here to call get nearest rail and  then have it decide weather to warp the subway up a bit to be on top of the rail or let it fall

	Condition	Return
	above rail	0
	on rail		1
	in rail		1

*/

/* make function here to move car to specific coords on map in game units and translate them to whatever is needed for tha browser

*/

function toggleNoClip () {
	if (noClip) {
		entity.player.noClip = false;
		console.log("No Clip off");
	} else {
		entity.player.noClip = true;
		console.log("No Clip on");
	}
}

function toggleFreeCam () {
	if (freeCam) {
		freeCam = false;
		document.getElementById('body').classList.add("hideScroll");
		console.log("freecam off");
	} else {
		freeCam = true;
		document.getElementById('body').classList.remove("hideScroll");
		console.log("freecam on");
	}
}

//wanted level functions

//takes a wanted level, applies it to the player, and requests update of stars
function setWantedLevel (entityPass, level) {
	entityPass.wantedLevel = level;
	if (entityPass == entity.player) {
		updateWantedStars(level);
	}
	entityPass.wantedTimer = level * 3600;
}

//sets wanted stars on screen to number passed, can be called outside of updatePlayerWantedLevel function for cutscenes and stuff
function updateWantedStars (stars) {
	switch (stars) {
		case 0:
			document.getElementById('wantedStarsDiv').classList.add("invis");
		break;
		case 1:
			document.getElementById('wantedStarsDiv').classList.remove("invis");
			document.getElementById('wantedStar1').src = "/img/gui/police/wanted/starFull.gif";
			document.getElementById('wantedStar2').src = "/img/gui/police/wanted/emptyStar.png";
			document.getElementById('wantedStar3').src = "/img/gui/police/wanted/emptyStar.png";
			document.getElementById('wantedStar4').src = "/img/gui/police/wanted/emptyStar.png";
			document.getElementById('wantedStar5').src = "/img/gui/police/wanted/emptyStar.png";
		break;
		case 2:
			document.getElementById('wantedStarsDiv').classList.remove("invis");
			document.getElementById('wantedStar1').src = "/img/gui/police/wanted/starFull.gif";
			document.getElementById('wantedStar2').src = "/img/gui/police/wanted/starFull.gif";
			document.getElementById('wantedStar3').src = "/img/gui/police/wanted/emptyStar.png";
			document.getElementById('wantedStar4').src = "/img/gui/police/wanted/emptyStar.png";
			document.getElementById('wantedStar5').src = "/img/gui/police/wanted/emptyStar.png";
		break;
		case 3:
			document.getElementById('wantedStarsDiv').classList.remove("invis");
			document.getElementById('wantedStar1').src = "/img/gui/police/wanted/starFull.gif";
			document.getElementById('wantedStar2').src = "/img/gui/police/wanted/starFull.gif";
			document.getElementById('wantedStar3').src = "/img/gui/police/wanted/starFull.gif";
			document.getElementById('wantedStar4').src = "/img/gui/police/wanted/emptyStar.png";
			document.getElementById('wantedStar5').src = "/img/gui/police/wanted/emptyStar.png";
		break;
		case 4:
			document.getElementById('wantedStarsDiv').classList.remove("invis");
			document.getElementById('wantedStar1').src = "/img/gui/police/wanted/starFull.gif";
			document.getElementById('wantedStar2').src = "/img/gui/police/wanted/starFull.gif";
			document.getElementById('wantedStar3').src = "/img/gui/police/wanted/starFull.gif";
			document.getElementById('wantedStar4').src = "/img/gui/police/wanted/starFull.gif";
			document.getElementById('wantedStar5').src = "/img/gui/police/wanted/emptyStar.png";
		break;
		case 5:
			document.getElementById('wantedStarsDiv').classList.remove("invis");
			document.getElementById('wantedStar1').src = "/img/gui/police/wanted/starFull.gif";
			document.getElementById('wantedStar2').src = "/img/gui/police/wanted/starFull.gif";
			document.getElementById('wantedStar3').src = "/img/gui/police/wanted/starFull.gif";
			document.getElementById('wantedStar4').src = "/img/gui/police/wanted/starFull.gif";
			document.getElementById('wantedStar5').src = "/img/gui/police/wanted/starFull.gif";
		break;
	}
}

//update HUD stuff
function updateHUD () {
	//update speed display

	//how to find 8.64 100 game units ~ 4 M which means 1 M = 25 game units
	//internal speed value is game units per frame
	//game runs at 60 fps
	// 1/25 * 60 * 60 / 1000
	//document.getElementById('hudSpeedDisplay').innerHTML = (entity.player.xSpeed * 8.64).toFixed(2) + " KM/H";
	//update speed limit display
	//document.getElementById('hudSpeedLimitDisplay').innerHTML = (entity.player.speedLimit * 8.64).toFixed(2) + " KM/H";
	//update switch choice display
	document.getElementById('hudSwitchDisplay').innerHTML = entity.player.lastPress;
	//update balance
	document.getElementById('hudBalanceDisplay').innerHTML = "¥ " + entity.player.money;
	//update lives
	document.getElementById('hudLivesDisplay').innerHTML = entity.player.lives;
	//update HP
	document.getElementById('hudHPDisplay').innerHTML = entity.player.hp;
	//update speeds limit display
	document.getElementById('hudSpeedsDisplay').innerHTML = (entity.player.xSpeed * 8.64).toFixed(2) + "/" + (entity.player.speedLimit * 8.64).toFixed(2) + " KM/H";
	//update wanted timer
	document.getElementById('wantedTimer').innerHTML = (entity.player.wantedTimer / 3600).toFixed(0) + ":" + ((entity.player.wantedTimer / 60) % 60).toFixed(0) ;
}

//music player stuff
function playVideoHud (id) {
	//id should be video link until I add more stuff
	document.getElementById('hudVideo').src = "https://www.youtube-nocookie.com/embed/" + id.slice(-11) + "?autoplay=1&controls=0&loop=1";
	document.getElementById('hudVideo').classList.remove('invis')
}

//door code
function togglePlayerDoor () {
	if (entity.player.doorOpen) {
		closePlayerDoor();
	} else {
		openPlayerDoor ();
	}
}

function openPlayerDoor () {
	document.getElementById("playerCarDoorImg").style.right = "65%";
	entity.player.doorOpen = true;
}

function closePlayerDoor () {
	document.getElementById("playerCarDoorImg").style.right = "50%";
	entity.player.doorOpen = false;
}

//updates object sent to it (does physics and stuff and sets it to the new position
function update (entityPass) {

	//runs ai for entity
	entityPass.ai(entityPass);
	
	

	//calls for accel calculations
	calcAccel(entityPass);
	
	//applies one frame of movementX
	entityPass.x = entityPass.x + entityPass.xSpeed;

	//sets y to where the rail is (if needed)
	if (entityPass.noClip == false) {

		//if it's below the track (going uphill) move it up to rail and upates upwards speed
		if (entityPass.y + entityPass.ySpeed <= getNearestRail(entityPass.x, entityPass.y, entityPass.lastPress)) {
			//checks to see how far below the track the train is
			if (entityPass.y + entityPass.ySpeed + 0.05 >= getNearestRail(entityPass.x, entityPass.y, entityPass.lastPress)) {
				entityPass.y = getNearestRail(entityPass.x, entityPass.y, entityPass.lastPress)
			} else {
				//applies Y movement
				entityPass.ySpeed = getNearestRail(entityPass.x, entityPass.y, entityPass.lastPress) - entityPass.y;
			}
		} else {
			//shit's falling need to calc gravity
			if (entityPass.ySpeed < entityPass.terminalVelocity * -1) {
				//falling faster than terminal velocity nothing to do
			} else {
				//calc gravity
				entityPass.ySpeed = entityPass.ySpeed - entityPass.weight;
			}
		}
		
	}
	
	//applies one frame of movementY
	entityPass.y = entityPass.y + entityPass.ySpeed;

	//applies camera offset
	updatePos(entityPass.id ,entityPass.x - xOffset, entityPass.y - yOffset);

	if (entityPass.wantedLevel > 0) {
		//ticks wanted level down by one if need be
		if (entityPass.wantedTimer > 0) {
			entityPass.wantedTimer = entityPass.wantedTimer - 1;
		}

		//removes wanted level when time hits zero
		if (entityPass.wantedTimer == 0) {
			setWantedLevel (entityPass, 0)
		}
	}
}

function updateAll (entityPass) {
	//updates all entities in container passed to it
	for (var property in entityPass) {
		eval("update(entityPass." + property + ");");
	}
}

function calcAccel (entityPass) {
	//made to be called by update function to accelereate entity based off it's inputs
	//for each directions sees if speed is far enough away from zero then calls accel function
	if (entityPass.input.left && entityPass.xSpeed > entityPass.maxXSpeed * -1) {
		if (Math.abs(entityPass.xSpeed) < entityPass.kick) {
			entityPass.xSpeed = 0 - entityPass.kick;
		}
		entityPass.xSpeed = accel(entityPass.xSpeed, -1, entityPass.accelPower);
	} else if (entityPass.input.right && entityPass.xSpeed < entityPass.maxXSpeed * 1) {
		if (Math.abs(entityPass.xSpeed) < entityPass.kick) {
			entityPass.xSpeed = entityPass.kick;
		}
		entityPass.xSpeed = accel(entityPass.xSpeed, 1, entityPass.accelPower);
	}
	
	//y coord movement if you have freecam or unlocked
	
	if (entityPass.noclip) {
		if (entityPass.input.down && entityPass.ySpeed > entityPass.maxYSpeed * -1) {
		if (Math.abs(entityPass.ySpeed) < entityPass.kick) {
			entityPass.ySpeed = 0 - entityPass.kick;
		}
		entityPass.ySpeed = accel(entityPass.ySpeed, -1, entityPass.accelPower);
	} else if (entityPass.input.up && entityPass.xSpeed > entityPass.maxYSpeed * 1) {
		if (Math.abs(entityPass.ySpeed) < entityPass.kick) {
			entityPass.ySpeed = entityPass.kick;
		}
		entityPass.ySpeed = accel(entityPass.xSpeed, 1, entityPass.accelPower);
	}
	}

	//stuff for brakes
	if (entityPass.input.brakes) {
		if (Math.abs(entityPass.xSpeed) < entityPass.brakesFullStop) {
			entityPass.xSpeed = 0;
		} else if (entityPass.xSpeed > 0) {
			entityPass.xSpeed = brake(entityPass.xSpeed, 1, entityPass.brakePower);
		} else {
			entityPass.xSpeed = brake(entityPass.xSpeed, -1, entityPass.brakePower);
		}
	}
}

function defaultEntityData () {
	//container var for player data
	var output = {};

	//don't change thease directly
	//thease store weather thease modes are enabled
	//freecam enables the scrollbars so you can move the camera
	//turns off collision detection when true
	output.noClip = false;
	//was for testing stuff, replaced by noclip, this one is probably not used
	output.unlockY = false;
	//how fast it is currently moving in each direction, should spawn with zero and change later
	output.xSpeed = 0;
	output.ySpeed = 0;
	//how many wanted stars you have
	output.wantedLevel = 0;
	//wanted timer
	output.wantedTimer = 0;
	//top speed of the car
	output.maxXSpeed = 25;
	//I don't think this is used
	output.maxYSpeed = 25;
	//fastest the car is legally allowed to go
	output.speedLimit = 2;
	//used for switches
	output.lastPress = "Up";
	//door state
	output.doorOpen = false;
	//coords
	output.x = 0;
	output.y = 0;
	//max downward speed that can come from gravity
	output.terminalVelocity = 81000;
	//weight more makes it fall faster
	output.weight = 2;
	//HTML ID of the elemet for the code to control
	//do not use the default one, plz change after making
	output.id = "default";

	//acceleration power in percent of speed per frame
	output.accelPower = 0.1;

	//what minimum speed should be when key is held
	output.kick = 0.05;

	//when the car will stop completely while brakes are held
	output.brakesFullStop = 0.1;

	//brakes power
	output.brakePower = 0.1;

	//ai script to use
	output.ai = ai.default;

	//controll input
	//container for entity input
	output.input = {};

	//Hp and lives
	output.hp = 100;
	output.lives = 0;

	//money
	output.money = 0;

	//add slot for weapon
	output.weapon = weapon.none;

	//setup inputs
	for (var property in input) {
		eval("output.input." + property + " = false;");
	}

	return output;

}

//function for spawning entity
function summon (entityPass) {

	//to use this do summon([templateFunction](name, x, y));
	//ex: to spawn the player and name them "player" and have them spawn at 0, 0
	//summon(entityTemplate.player("player", 0, 0));

	//entityPass	refrence to the template for entity
	//makes the entity var
	eval("entity." + entityPass.name + " = entityPass");

	//adds html data to page
	document.getElementById("entityDiv").innerHTML = document.getElementById("entityDiv").innerHTML + entityPass.html;

}

function removeAllEntities () {
	entity = {};
	document.getElementById("entityDiv").innerHTML = "";
}

//despawns an entity
function despawn (entityPass) {
	document.getElementById(entityPass.id).innerHTML = "";
	eval("delete entity." + entityPass.name + ";");
}

function shoot (entityPass) {
	//entityPass = entity shooting
	//weapon = weapon
	entityPass.weapon(entityPass);

}

function hop (entityPass, power) {
	//entityPass entity that is hopping
	//power power of hop

	entityPass.ySpeed = entityPass.ySpeed + power;

	//eval(entityPass + ".ySpeed = " + power + ";");

}

//rando vars
//all entitiy container
var entity = {};

//var for entity templates
var entityTemplate = {};

//don't change thease directly
//thease store weather thease modes are enabled
//freecam enables the scrollbars so you can move the camera
//toggle with toggleFreeCam()
var freeCam = false;
