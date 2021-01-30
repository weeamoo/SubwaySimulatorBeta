var onStartMenu = true;

function startGame () {

	//hide title screen
	document.getElementById("titleScreen").classList.add("invis");

	//starting level
	loadLevel("debug/test1", 0, 0);

	//slef
	onStartMenu = false;
	paused = false;
}