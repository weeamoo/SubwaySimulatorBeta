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
			levelWidth = 1600;
			levelHeight = 900;
			//css sheet for background
			document.getElementById("lvlLoaderCSS").href = "/levels/debug/caramelldansen/css/caramelldansen.css";
			//HTML data for background
			document.getElementById('worldBg1').innerHTML = ;
		break;
		case "debug/miku":
			//level geometry
			//this needs a third input for up or down for the switch selector
			getNearestRail = lvlData.debug.miku.geo;
			//level size
			levelWidth = 48000;
			levelHeight = 900;
			//css sheet for background
			document.getElementById("lvlLoaderCSS").href = "/levels/debug/miku/css/miku.css";
			//HTML data for background
			document.getElementById('worldBg1').innerHTML = lvlData.debug.miku.bg1;
		break;
		case "debug/test1":
			//level geometry
			//this needs a third input for up or down for the switch selector
			getNearestRail = lvlData.debug.test1.geo;
			//level size
			levelWidth = 4800;
			levelHeight = 900;
			//css sheet for background
			document.getElementById("lvlLoaderCSS").href = "/levels/debug/test1/css/test1.css";
			//HTML data for background
			document.getElementById('worldBg1').innerHTML = lvlData.debug.test2.bg1;
		break;
		case "debug/test2":
			//level geometry
			//this needs a third input for up or down for the switch selector
			getNearestRail = lvlData.debug.test2.geo;
			//level size
			levelWidth = 48000;
			levelHeight = 900;
			//css sheet for background
			document.getElementById("lvlLoaderCSS").href = "/levels/debug/test2/css/test2.css";
			//HTML data for background
			document.getElementById('worldBg1').innerHTML = lvlData.debug.test2.bg1;
		break;
	}
	
	//calls for bounds to be calced after loading level
	calcBounds();
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