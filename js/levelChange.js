//container vars
var levelWidth = 0;
var levelHeight = 0;

function loadLevel (level, x, y) {

	player.xSpeed = 0;
	player.ySpeed = 0;
	player.x = x;
	player.y = y;

	//calls to reset all world divs
	lvlReset();

	//translates passed sting to level data to load in
	switch (level) {
		case "debug/caramelldansen":
			//level geometry
			//this needs a third input for up or down for the switch selector
			getNearestRail = lvlData.debug.caramelldansen.geo;
			//level size
			levelWidth = lvlData.debug.caramelldansen.width;
			levelHeight = lvlData.debug.caramelldansen.height;
			//css sheet for background
			document.getElementById("lvlLoaderCSS").href = lvlData.debug.caramelldansen.css;
			//HTML data for background
			document.getElementById('worldBg1').innerHTML = lvlData.debug.caramelldansen.bg1;
		break;
		case "debug/miku":
			//level geometry
			//this needs a third input for up or down for the switch selector
			getNearestRail = lvlData.debug.miku.geo;
			//level size
			levelWidth = lvlData.debug.miku.width;
			levelHeight = lvlData.debug.miku.height;
			//css sheet for background
			document.getElementById("lvlLoaderCSS").href = lvlData.debug.miku.css;
			//HTML data for background
			document.getElementById('worldBg1').innerHTML = lvlData.debug.miku.bg1;
		break;
		case "debug/test1":
			//level geometry
			//this needs a third input for up or down for the switch selector
			getNearestRail = lvlData.debug.test1.geo;
			//level size
			levelWidth = lvlData.debug.test1.width;
			levelHeight = lvlData.debug.test1.height;
			//css sheet for background
			document.getElementById("lvlLoaderCSS").href = lvlData.debug.test1.css;
			//HTML data for background
			document.getElementById('worldBg1').innerHTML = lvlData.debug.test2.bg1;
		break;
		case "debug/test2":
			//level geometry
			//this needs a third input for up or down for the switch selector
			getNearestRail = lvlData.debug.test2.geo;
			//level size
			levelWidth = lvlData.debug.test2.width;
			levelHeight = lvlData.debug.test2.height;
			//css sheet for background
			document.getElementById("lvlLoaderCSS").href = lvlData.debug.test2.css;
			//HTML data for background
			document.getElementById('worldBg1').innerHTML = lvlData.debug.test2.bg1;
		break;
	}
	
	//calls for bounds to be calced after loading level
	calcBounds();
}

function loadLevelNew (level, x, y) {

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
	eval("document.getElementById(\"worldSFg5\").innerHTML = lvlData." + level + ".sfg5;");

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
}

//default level geometry function
//this needs a third input for up or down for the switch selector
var getNearestRail = function (x, y) {return 0;}

//loads container vars to hold level data (just dir structure that has nowhere else to be)
var lvlData = [];
lvlData.debug = [];