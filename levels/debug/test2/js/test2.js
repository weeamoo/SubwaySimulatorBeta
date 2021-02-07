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
lvlData.debug.test2.geo = function (x, y) {player.speedLimit = 25;return 500;};
lvlData.debug.test2.bg1 = generateLvlfdkhjdksd();