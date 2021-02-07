//makes container for lvl stuff
lvlData.debug.test4 = [];

lvlData.debug.test4.width = 4800;
lvlData.debug.test4.height = 900;
lvlData.debug.test4.css = "/levels/debug/test4/css/test4.css";
lvlData.debug.test4.geo = function (x, y, dir) {player.speedLimit = 1;return 500;};

//html data
lvlData.debug.test4.bg1 = "";
lvlData.debug.test4.bg2 = "";
lvlData.debug.test4.bg3 = "";
lvlData.debug.test4.bg4 = "<img id=\"bg4BackBuildingA\" class=\"backBuilding\" src=\"/img/world/buildings/basic/tall.png\"><img id=\"bg4BackBuildingB\" class=\"backBuilding\" src=\"/img/world/buildings/basic/subwaySimulator.png\"><img id=\"bg4BackBuildingC\" class=\"backBuilding\" src=\"/img/world/buildings/basic/subsim.moe2.png\"><img id=\"bg4BackBuildingD\" class=\"backBuilding\" src=\"/img/world/buildings/basic/subsim.moe2.png\">";
lvlData.debug.test4.bg5 = "<img id=\"bg5BackImg\" src=\"/levels/debug/test4/img/purpleBlackGraStars2.png\">";
lvlData.debug.test4.fg1 = "";
lvlData.debug.test4.fg2 = "";
lvlData.debug.test4.fg3 = "";
lvlData.debug.test4.fg4 = "";
lvlData.debug.test4.fg5 = "";
lvlData.debug.test4.sfg1 = "";

//factor of 0 will sync it to the car and essentially make a still image of it
//factor of 1 will make it move with the background
//anything in between is in between

lvlData.debug.test4.bg1factor = 1;
lvlData.debug.test4.bg2factor = 1;
lvlData.debug.test4.bg3factor = 1;
lvlData.debug.test4.bg4factor = 0.5;
lvlData.debug.test4.bg5factor = 0;
lvlData.debug.test4.fg1factor = 1;
lvlData.debug.test4.fg2factor = 1;
lvlData.debug.test4.fg3factor = 1;
lvlData.debug.test4.fg4factor = 1;
lvlData.debug.test4.fg5factor = 1;
lvlData.debug.test4.sfg1factor = 1;