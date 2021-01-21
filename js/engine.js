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

//rando vars

var noClip = false;
var freeCam = false;
var xSpeed = 0;
var ySpeed = 0;

//putting some semicontstants here lol
//semi constants, can be changed when buying upgrandes


//acceleration power in percent of speed per frame
var playerAccelPower = 0.1;

//what minimum speed should be when key is held
var kick = 0.05;

//when the car will stop completely while brakes are held
var brakesFullStop = 0.05;

//brakes power
var palyerBrakePower = 0.1;