//container vars
var levelWidth = 0;
var levelHeight = 0;
var playerBackup = {};

var bg1factor = 0;
var bg2factor = 0;
var bg3factor = 0;
var bg4factor = 0;
var bg5factor = 0;
var fg1factor = 0;
var fg2factor = 0;
var fg3factor = 0;
var fg4factor = 0;
var fg5factor = 0;
var sfg1factor = 0;

function loadLevel (level, x, y) {

	//fetch js file from server
	require([level.path]);
	//need to have it wait for this to finish before continuing

	//clearing stuff
	entity.player.xSpeed = 0;
	entity.player.ySpeed = 0;
	entity.player.x = x;
	entity.player.y = y;
	
	playerBackup = entity.player;
	removeAllEntities();
	summon(playerBackup);

	//calls to reset all world divs
	lvlReset();

	//sets geo function
	getNearestRail = getLevelPart(level.geo);
	
	//sets speed limit function
	speedLimitCalc = getLevelPart(level.speedLimit);
	
	//sets function for objects that can be collided with
	objectCalc = getLevelPart(level.speedLimit);

	//level size
	levelWidth = getLevelPart(level.width);
	levelHeight = getLevelPart(level.height);

	//recalculate level bounds
	calcBounds()

	//css sheet for background
	document.getElementById("lvlLoaderCSS").href = getLevelPart(level.css);

	//HTML data for backgrounds
	document.getElementById("worldBg1").innerHTML = getLevelPart(level.bg1);
	document.getElementById("worldBg2").innerHTML = getLevelPart(level.bg2);
	document.getElementById("worldBg3").innerHTML = getLevelPart(level.bg3);
	document.getElementById("worldBg4").innerHTML = getLevelPart(level.bg4);
	document.getElementById("worldBg5").innerHTML = getLevelPart(level.bg5);

	//HTML data for foregrounds
	document.getElementById("worldFg1").innerHTML = getLevelPart(level.fg1);
	document.getElementById("worldFg2").innerHTML = getLevelPart(level.fg2);
	document.getElementById("worldFg3").innerHTML = getLevelPart(level.fg3);
	document.getElementById("worldFg4").innerHTML = getLevelPart(level.fg4);
	document.getElementById("worldFg5").innerHTML = getLevelPart(level.fg5);
	document.getElementById("worldSFg1").innerHTML = getLevelPart(level.sfg1);

	//speed factor stuff
	bg1factor = getLevelPart(level.bg1factor);
	bg2factor = getLevelPart(level.bg2factor);
	bg3factor = getLevelPart(level.bg3factor);
	bg4factor = getLevelPart(level.bg4factor);
	bg5factor = getLevelPart(level.bg5factor);
	fg1factor = getLevelPart(level.fg1factor);
	fg2factor = getLevelPart(level.fg2factor);
	fg3factor = getLevelPart(level.fg3factor);
	fg4factor = getLevelPart(level.fg4factor);
	fg5factor = getLevelPart(level.fg5factor);
	sfg1factor = getLevelPart(level.sfg1factor);

	//factor of 0 will sync it to the car and essentially make a still image of it
	//factor of 1 will make it move with the background
	//anything in between is in between

}

//gets level parts from level data
function getLevelPart (part) {
	return part;
}

//clears all world divs
function lvlReset () {
	document.getElementById('worldBg1').innerHTML = "";
	document.getElementById('worldBg2').innerHTML = "";
	document.getElementById('worldBg3').innerHTML = "";
	document.getElementById('worldBg4').innerHTML = "";
	document.getElementById('worldBg5').innerHTML = "";
	document.getElementById('worldFg1').innerHTML = "";
	document.getElementById('worldFg2').innerHTML = "";
	document.getElementById('worldFg3').innerHTML = "";
	document.getElementById('worldFg4').innerHTML = "";
	document.getElementById('worldFg5').innerHTML = "";
	document.getElementById('worldSFg1').innerHTML = "";
	bg1factor = 0;
	bg2factor = 0;
	bg3factor = 0;
	bg4factor = 0;
	bg5factor = 0;
	fg1factor = 0;
	fg2factor = 0;
	fg3factor = 0;
	fg4factor = 0;
	fg5factor = 0;
	sfg1factor = 0;
}

//default level geometry function
//this needs a third input for up or down for the switch selector
var getNearestRail = function (x, y, dir) {return 0;};
var speedLimitCalc = function (x, y) {return 0;};
var objectCalc = function (x, y, entity) {};