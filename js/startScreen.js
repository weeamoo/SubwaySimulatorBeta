var onStartMenu = true;

setTimeout(function(){idleBackground()}, 60000);

function startGame () {
	
	//clear it out
	entity = {};

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
		
		//clear it out
		entity = {};

		summon(entityTemplate.player("player", 0, 0));
		player.ai = ai.wanderCar;
	    
		loadLevel(lvlData.debug.test4, 0, 0);
	    	paused = false;
	}
}

//wallpaper mode
//runs once everything is loaded
window.addEventListener('load', function () {
	
	//spawns player car
	summon(entityTemplate.player("player", 0, 0));
	
	//checks to see if wallpaper mode is passed to it once everything is loaded
	if (window.location.toString().slice(-15) == "?wallpaper=true") {
		wallpaperMode();
	}
})

function wallpaperMode () {
	//clear it out
	entity = {};

	summon(entityTemplate.player("player", 0, 0));
	player.ai = ai.wanderCar;
	    
	loadLevel(lvlData.debug.test4, 0, 0);
	paused = false;
	onStartMenu = false;
	//hide title screen
	document.getElementById("titleScreen").classList.add("invis");
}
