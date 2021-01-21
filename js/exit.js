function exit () {

	//does not fucking work will fix later

	document.getElementById("pauseMenuH1").innerHTML = "c";
	document.getElementById("title").innerHTML = "c";
	sleep(200);
	document.getElementById("pauseMenuH1").innerHTML = "cy";
	document.getElementById("title").innerHTML = "cy";
	sleep(200);
	document.getElementById("pauseMenuH1").innerHTML = "cya";
	document.getElementById("title").innerHTML = "cya";
	sleep(200);
	document.getElementById("pauseMenuH1").innerHTML = "cya ";
	document.getElementById("title").innerHTML = "cya ";
	sleep(200);
	document.getElementById("pauseMenuH1").innerHTML = "cya l";
	document.getElementById("title").innerHTML = "cya l";
	sleep(200);
	document.getElementById("pauseMenuH1").innerHTML = "cya l8";
	document.getElementById("title").innerHTML = "cya l8";
	sleep(200);
	document.getElementById("pauseMenuH1").innerHTML = "cya l8r";
	document.getElementById("title").innerHTML = "cya l8r";

	window.location.replace("https://hentaihaven.org/");
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}