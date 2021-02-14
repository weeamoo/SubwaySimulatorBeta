//container vars
var levelWidth = 0;
var levelHeight = 0;

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

	//clearing stuff
	player.xSpeed = 0;
	player.ySpeed = 0;
	player.x = x;
	player.y = y;

	//calls to reset all world divs
	lvlReset();

	//sets geo function
	eval("getNearestRail = lvlData." + level + ".geo;");

	//level size
	eval("levelWidth = lvlData." + level + ".width;");
	eval("levelHeight = lvlData." + level + ".height;");

	//recalculate level bounds
	calcBounds()

	//css sheet for background
	eval("document.getElementById(\"lvlLoaderCSS\").href = lvlData." + level + ".css;");

	//HTML data for backgrounds
	eval("document.getElementById(\"worldBg1\").innerHTML = lvlData." + level + ".bg1;");
	eval("document.getElementById(\"worldBg2\").innerHTML = lvlData." + level + ".bg2;");
	eval("document.getElementById(\"worldBg3\").innerHTML = lvlData." + level + ".bg3;");
	eval("document.getElementById(\"worldBg4\").innerHTML = lvlData." + level + ".bg4;");
	eval("document.getElementById(\"worldBg5\").innerHTML = lvlData." + level + ".bg5;");

	//HTML data for foregrounds
	eval("document.getElementById(\"worldFg1\").innerHTML = lvlData." + level + ".fg1;");
	eval("document.getElementById(\"worldFg2\").innerHTML = lvlData." + level + ".fg2;");
	eval("document.getElementById(\"worldFg3\").innerHTML = lvlData." + level + ".fg3;");
	eval("document.getElementById(\"worldFg4\").innerHTML = lvlData." + level + ".fg4;");
	eval("document.getElementById(\"worldFg5\").innerHTML = lvlData." + level + ".fg5;");
	eval("document.getElementById(\"worldSFg1\").innerHTML = lvlData." + level + ".sfg1;");

	//speed factor stuff
	eval("bg1factor = lvlData." + level + ".bg1factor");
	eval("bg2factor = lvlData." + level + ".bg2factor");
	eval("bg3factor = lvlData." + level + ".bg3factor");
	eval("bg4factor = lvlData." + level + ".bg4factor");
	eval("bg5factor = lvlData." + level + ".bg5factor");
	eval("fg1factor = lvlData." + level + ".fg1factor");
	eval("fg2factor = lvlData." + level + ".fg2factor");
	eval("fg3factor = lvlData." + level + ".fg3factor");
	eval("fg4factor = lvlData." + level + ".fg4factor");
	eval("fg5factor = lvlData." + level + ".fg5factor");
	eval("sfg1factor = lvlData." + level + ".sfg1factor");

	//factor of 0 will sync it to the car and essentially make a still image of it
	//factor of 1 will make it move with the background
	//anything in between is in between

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
var getNearestRail = function (x, y, dir) {return 0;}

//loads container vars to hold level data (just dir structure that has nowhere else to be)
var lvlData = [];
lvlData.debug = [];
