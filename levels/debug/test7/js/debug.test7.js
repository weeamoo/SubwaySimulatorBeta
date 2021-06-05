lvlData.debug.test7.width = 1600;
lvlData.debug.test7.height = 900;
lvlData.debug.test7.css = "/levels/debug/test7/css/test7.css";
/*lvlData.debug.test7.geo = function (x, y, dir) {player.speedLimit = 1;return 262;};  see workspace below*/

//html data
lvlData.debug.test7.bg1 = "<table id=\"testLvl6BgaGridLevelTable\" cellspacing=\"0\"><tbody><tr><td class=\"testLvl6BgaGridTd\" colspan=\"9\"></td><td class=\"testLvl6BgaGridTd\"><img class=\"testLvl6BgaGridImg\" src=\"/levels/debug/test7/img/bridge/bridgeAngle2.png\"></td><td class=\"testLvl6BgaGridTd\"><img class=\"testLvl6BgaGridImg\" src=\"/levels/debug/test7/img/bridge/bridge.png\"></td><td class=\"testLvl6BgaGridTd\"><img class=\"testLvl6BgaGridImg\" src=\"/levels/debug/test7/img/bridge/bridgeAngle.png\"></td></tr><tr><td class=\"testLvl6BgaGridTd\" colspan=\"7\"></td><td class=\"testLvl6BgaGridTd\"><img class=\"testLvl6BgaGridImg\" src=\"/levels/debug/test7/img/bridge/bridgeAngle2.png\"></td><td class=\"testLvl6BgaGridTd\"><img class=\"testLvl6BgaGridImg\" src=\"/levels/debug/test7/img/bridge/bridge.png\"></td><td class=\"testLvl6BgaGridTd\" colspan=\"3\"></td><td class=\"testLvl6BgaGridTd\"><img class=\"testLvl6BgaGridImg\" src=\"/levels/debug/test7/img/bridge/bridgeAngle.png\"></td></tr><tr><td class=\"testLvl6BgaGridTd\"><img class=\"testLvl6BgaGridImg\" src=\"/levels/debug/test7/img/bridge/bridge.png\"></td><td class=\"testLvl6BgaGridTd\"><img class=\"testLvl6BgaGridImg\" src=\"/levels/debug/test7/img/bridge/bridge.png\"></td><td class=\"testLvl6BgaGridTd\"><img class=\"testLvl6BgaGridImg\" src=\"/levels/debug/test7/img/bridge/bridge.png\"></td><td class=\"testLvl6BgaGridTd\"><img class=\"testLvl6BgaGridImg\" src=\"/levels/debug/test7/img/bridge/bridge.png\"></td><td class=\"testLvl6BgaGridTd\"><img class=\"testLvl6BgaGridImg\" src=\"/levels/debug/test7/img/bridge/bridge.png\"></td><td class=\"testLvl6BgaGridTd\"><img class=\"testLvl6BgaGridImg\" src=\"/levels/debug/test7/img/bridge/bridge.png\"></td><td class=\"testLvl6BgaGridTd\"><img class=\"testLvl6BgaGridImg\" src=\"/levels/debug/test7/img/bridge/bridge.png\"></td><td class=\"testLvl6BgaGridTd\" colspan=\"6\"></td><td class=\"testLvl6BgaGridTd\"><img class=\"testLvl6BgaGridImg\" src=\"/levels/debug/test7/img/bridge/bridge.png\"></td><td class=\"testLvl6BgaGridTd\"><img class=\"testLvl6BgaGridImg\" src=\"/levels/debug/test7/img/bridge/bridge.png\"></td><td class=\"testLvl6BgaGridTd\"><img class=\"testLvl6BgaGridImg\" src=\"/levels/debug/test7/img/bridge/bridge.png\"></td></tr><tr><td class=\"testLvl6BgaGridTd\"><img class=\"testLvl6BgaGridImg\" src=\"/levels/debug/test7/img/bridge/pole.png\"></td></tr><tr><td class=\"testLvl6BgaGridTd\"><img class=\"testLvl6BgaGridImg\" src=\"/levels/debug/test7/img/bridge/pole.png\"></td></tr></tbody></table>";
lvlData.debug.test7.bg2 = "";
lvlData.debug.test7.bg3 = "";
lvlData.debug.test7.bg4 = "";
lvlData.debug.test7.bg5 = "<img id=\"bg5BackImg\" src=\"/levels/debug/test7/img/purpleBlackGraStars2.png\">";
lvlData.debug.test7.fg1 = "";
lvlData.debug.test7.fg2 = "";
lvlData.debug.test7.fg3 = "";
lvlData.debug.test7.fg4 = "";
lvlData.debug.test7.fg5 = "";
lvlData.debug.test7.sfg1 = "";

//factor of 0 will sync it to the car and essentially make a still image of it
//factor of 1 will make it move with the background
//anything in between is in between

lvlData.debug.test7.bg1factor = 1;
lvlData.debug.test7.bg2factor = 0;
lvlData.debug.test7.bg3factor = 0;
lvlData.debug.test7.bg4factor = 0;
lvlData.debug.test7.bg5factor = 0;
lvlData.debug.test7.fg1factor = 0;
lvlData.debug.test7.fg2factor = 0;
lvlData.debug.test7.fg3factor = 0;
lvlData.debug.test7.fg4factor = 0;
lvlData.debug.test7.fg5factor = 0;
lvlData.debug.test7.sfg1factor = 0;


/* workspace */

lvlData.debug.test7.geo = function getNearestRail (x, y, dir) {
	
	switch (true) {

		/*x coord starts at zero */

    		case (x < 600):
        		
    			return 362;

        		break;
    		case (x < 610):
        		
    			if (dir == "Up") {

                    return x - 238;
                
                } else {

                    return (x * -1) + 962;

                }

        		break;

    		case (x < 700):
        		
    			if (y > x - 248) {

                    return x - 238;

                } else {

                    return (x * -1) + 962;
                }

        		break;
    		case (x < 900):
        		
    			if (y > 452) {


                    return 462;

                } else {

                    return 262;

                }

        		break;
    		case (x < 990):
        		
    			if (y > (x * -1) + 1352) {

                    return (x * -1) + 1362;

                } else {

                    return x - 638;

                }

        		break;
    		case (x < 1000):
        		
    			if (dir == "Up") {

                    return (x * -1) + 1362;

                } else {

                    return x - 638;

                }

        		break;
            case (x < 1200):
                
                return 362;

                break;
            case (x < 1300):
                
                return x - 838;

                break;
    		default:
        		
        		return 462;

           	break;
	}

};

//tells the stupid system that the level is ready
lvlData.debug.test7.loaded = true;