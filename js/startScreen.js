var onStartMenu = true;

setTimeout(function(){idleBackground()}, 60000);

function startGame () {

	//make player car exist
	summon(entityTemplate.player("player", 0, 0));

	//hide title screen
	document.getElementById("titleScreen").classList.add("invis");

	//show hud
	document.getElementById("hud").classList.remove("invis");

	//starting level
	loadLevel(lvlData.debug.test4, 0, 0);

	//slef
	onStartMenu = false;
	paused = false;
}

function addMikuToTitle () {
	document.getElementById("titleScreen").style.backgroundImage = "url(\"https://surfinontheinter.net/img/myspace/mikuback.jpg\")";
}

function idleBackground () {
	if (onStartMenu == true) {

		summon(entityTemplate.player("player", 0, 0));
	    
		loadLevel(lvlData.debug.test4, 0, 0);
		player.xSpeed = 0.1;
	    	paused = false;
	}
}
