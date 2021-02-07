//makes container for lvl stuff
lvlData.debug.test1 = [];

lvlData.debug.test1.width = 4800;
lvlData.debug.test1.height = 900;
lvlData.debug.test1.css = "/levels/debug/test4/css/test4.css";
lvlData.debug.test1.geo = function (x, y, dir) {player.speedLimit = 1;return 500;};

//html data
lvlData.debug.test1.bg1 = "";
lvlData.debug.test1.bg2 = "";
lvlData.debug.test1.bg3 = "";
lvlData.debug.test1.bg4 = "";
lvlData.debug.test1.bg5 = "";
lvlData.debug.test1.fg1 = "";
lvlData.debug.test1.fg2 = "";
lvlData.debug.test1.fg3 = "";
lvlData.debug.test1.fg4 = "";
lvlData.debug.test1.fg5 = "";
lvlData.debug.test1.sfg1 = "";

//factor of 0 will sync it to the car and essentially make a still image of it
//factor of 1 will make it move with the background
//anything in between is in between

lvlData.debug.test1.bg1factor = 1;
lvlData.debug.test1.bg2factor = 1;
lvlData.debug.test1.bg3factor = 1;
lvlData.debug.test1.bg4factor = 1;
lvlData.debug.test1.bg5factor = 0;
lvlData.debug.test1.fg1factor = 1;
lvlData.debug.test1.fg2factor = 1;
lvlData.debug.test1.fg3factor = 1;
lvlData.debug.test1.fg4factor = 1;
lvlData.debug.test1.fg5factor = 1;
lvlData.debug.test1.sfg1factor = 1;