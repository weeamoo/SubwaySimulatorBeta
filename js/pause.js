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
    document.getElementById('pauseMenu').classList.remove("invis");

}

function unPauseGame () {
    paused = false;
    document.getElementById('pauseMenu').classList.add("invis");

}