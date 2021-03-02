//makes container for lvl stuff
lvlData.debug.test5 = [];

lvlData.debug.test5.width = 1600;
lvlData.debug.test5.height = 900;
lvlData.debug.test5.css = "/levels/debug/test5/css/test5.css";
/*lvlData.debug.test5.geo = function (x, y, dir) {player.speedLimit = 1;return 262;};  see workspace below*/

//html data
lvlData.debug.test5.bg1 = "\n\n\t\t\t<table id=\"testLvl5BgaGridLevelTable\" cellspacing=\"0\">\n\n\t\t\t\t<tbody>\n\n\t\t\t\t\t<tr>\n\n\t\t\t\t\t\t<td class=\"testLvl4BgaGridTd\" colspan=\"8\"></td>\n\n\t\t\t\t\t\t<td class=\"testLvl5BgaGridTd\">\n\n\t\t\t\t\t\t\t<img class=\"testLvl5BgaGridImg\" src=\"/levels/debug/test5/img/bridge/bridgeAngle2.png\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t<td class=\"testLvl5BgaGridTd\">\n\n\t\t\t\t\t\t\t<img class=\"testLvl5BgaGridImg\" src=\"/levels/debug/test5/img/bridge/bridge.png\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t<td class=\"testLvl5BgaGridTd\">\n\n\t\t\t\t\t\t\t<img class=\"testLvl5BgaGridImg\" src=\"/levels/debug/test5/img/bridge/bridgeAngle.png\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\n\t\t\t\t\t</tr>\n\t\t\t\t\t\n\t\t\t\t</tbody>\n\n\t\t\t</table>\n\t\t\n\t\t";
lvlData.debug.test5.bg2 = "";
lvlData.debug.test5.bg3 = "";
lvlData.debug.test5.bg4 = "";
lvlData.debug.test5.bg5 = "<img id=\"bg5BackImg\" src=\"/levels/debug/test5/img/purpleBlackGraStars2.png\">";
lvlData.debug.test5.fg1 = "";
lvlData.debug.test5.fg2 = "";
lvlData.debug.test5.fg3 = "";
lvlData.debug.test5.fg4 = "";
lvlData.debug.test5.fg5 = "";
lvlData.debug.test5.sfg1 = "";

//factor of 0 will sync it to the car and essentially make a still image of it
//factor of 1 will make it move with the background
//anything in between is in between

lvlData.debug.test5.bg1factor = 1;
lvlData.debug.test5.bg2factor = 0;
lvlData.debug.test5.bg3factor = 0;
lvlData.debug.test5.bg4factor = 0;
lvlData.debug.test5.bg5factor = 0;
lvlData.debug.test5.fg1factor = 0;
lvlData.debug.test5.fg2factor = 0;
lvlData.debug.test5.fg3factor = 0;
lvlData.debug.test5.fg4factor = 0;
lvlData.debug.test5.fg5factor = 0;
lvlData.debug.test5.sfg1factor = 0;


/* workspace */

lvlData.debug.test5.geo = function getNearestRail (x, y, dir) {
	
	switch (true) {

		/*x coord starts at zero */

    		case (x < 700):
        		
    			return 262;

        		break;
    		case (x < 800):
        		
    			return x - 438;

        		break;
    		case (x < 900):
        		
    			return 362;

        		break;
    		case (x < 1000):
        		
    			return x - 538;

        		break;
    		case (x < 1100):
        		
    			return 462;

        		break;
    		case (x < 1300):
        		
    			return (x * -1) + 1562;

        		break;
    		default:
        		
        		return 262;

           	break;
	}

};