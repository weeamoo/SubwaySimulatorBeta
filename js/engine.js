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
		noClip = false;
		console.log("No Clip off");
	} else {
		noClip = true;
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
function setPlayerWantedLevel (level) {
	player.wantedLevel = level;
	updateWantedStars(level);
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
	document.getElementById('hudSpeedDisplay').innerHTML = (player.xSpeed * 8.64).toFixed(2) + " KM/H";
	//update speed limit display
	document.getElementById('hudSpeedLimitDisplay').innerHTML = (player.speedLimit * 8.64).toFixed(2) + " KM/H";
	//update switch choice display
	document.getElementById('hudSwitchDisplay').innerHTML = player.lastPress;
}

//music player stuff
function playVideoHud (id) {
	//id should be video link until I add more stuff
	document.getElementById('hudVideo').src = "https://www.youtube-nocookie.com/embed/" + id.slice(-11) + "?autoplay=1&controls=0&loop=1";
	document.getElementById('hudVideo').classList.remove('invis')
}

//door code
function togglePlayerDoor () {
	if (player.doorOpen) {
		closePlayerDoor();
	} else {
		openPlayerDoor ();
	}
}

function openPlayerDoor () {
	document.getElementById("playerCarDoorImg").style.right = "15%";
	player.doorOpen = true;
}

function closePlayerDoor () {
	document.getElementById("playerCarDoorImg").style.right = "0%";
	player.doorOpen = false;
}

//rando vars

//container var for player data
var player = {};

var noClip = false;
var freeCam = false;
player.unlockY = false;
player.xSpeed = 0;
player.ySpeed = 0;
player.wantedLevel = 0;
player.maxXSpeed = 25;
player.maxYSpeed = 25;
player.speedLimit = 0;
player.lastPress = "Up";
player.doorOpen = false;
player.x = 0;
player.y = 0;
//putting some semicontstants here lol
//semi constants, can be changed when buying upgrandes


//acceleration power in percent of speed per frame
player.accelPower = 0.1;

//what minimum speed should be when key is held
player.kick = 0.05;

//when the car will stop completely while brakes are held
player.brakesFullStop = 0.1;

//brakes power
player.brakePower = 0.1;
