var paused = true;

function togglePause () {

    if (onStartMenu == false) {
        if (paused) {
            unPauseGame();
        } else {
            pauseGame();
        }
    }
}

function pauseGame () {
    paused = true;
    //show pause menu
    document.getElementById('pauseMenu').classList.remove("invis");
    //hide HUD
    document.getElementById("hud").classList.add("invis");

}

function unPauseGame () {
    paused = false;
    //hide pause menu
    document.getElementById('pauseMenu').classList.add("invis");
    //show HUD
    document.getElementById("hud").classList.remove("invis");

}