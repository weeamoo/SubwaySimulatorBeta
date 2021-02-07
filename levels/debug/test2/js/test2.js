//makes container var for level data
lvlData.debug.test2 = [];

//little compression function
function generateLvlfdkhjdksd () {
	var cmprTst1Td = "<td id=\"debugGridLevelTd\"><img id=\"debugGridLevelImg\" src=\"/levels/debug/test2/img/bedrock.png\"></td>";

	var cmprTst1TdN = cmprTst1Td + cmprTst1Td + cmprTst1Td + cmprTst1Td + cmprTst1Td + cmprTst1Td + cmprTst1Td + cmprTst1Td + cmprTst1Td;

	var cmprTst1Tr = "<tr id=\"debugGridLevelTr\">" + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1TdN + cmprTst1Td + "</tr>";

	return "<table id=\"debugGridLevelTable\" cellspacing=\"0\"><tbody id=\"debugGridLevelTbody\">" + cmprTst1Tr + cmprTst1Tr + cmprTst1Tr + cmprTst1Tr + cmprTst1Tr + cmprTst1Tr + cmprTst1Tr + cmprTst1Tr + cmprTst1Tr + "</tbody></table>";
}

lvlData.debug.test2.width = 48000;
lvlData.debug.test2.height = 900;
lvlData.debug.test2.css = "/levels/debug/test2/css/test2.css";
lvlData.debug.test2.geo = function (x, y, dir) {player.speedLimit = 25;return 500;};
lvlData.debug.test2.bg1 = generateLvlfdkhjdksd();
lvlData.debug.test2.bg2 = "";
lvlData.debug.test2.bg3 = "";
lvlData.debug.test2.bg4 = "";
lvlData.debug.test2.bg5 = "";
lvlData.debug.test2.fg1 = "";
lvlData.debug.test2.fg2 = "";
lvlData.debug.test2.fg3 = "";
lvlData.debug.test2.fg4 = "";
lvlData.debug.test2.fg5 = "";
lvlData.debug.test2.sfg1 = "";

//factor of 0 will sync it to the car and essentially make a still image of it
//factor of 1 will make it move with the background
//anything in between is in between

lvlData.debug.test2.bg1factor = 1;
lvlData.debug.test2.bg2factor = 1;
lvlData.debug.test2.bg3factor = 1;
lvlData.debug.test2.bg4factor = 1;
lvlData.debug.test2.bg5factor = 1;
lvlData.debug.test2.fg1factor = 1;
lvlData.debug.test2.fg2factor = 1;
lvlData.debug.test2.fg3factor = 1;
lvlData.debug.test2.fg4factor = 1;
lvlData.debug.test2.fg5factor = 1;
lvlData.debug.test2.sfg1factor = 1;