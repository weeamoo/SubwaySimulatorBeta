lvlData.demo.demo1.width = 9000;
lvlData.demo.demo1.height = 8000;
lvlData.demo.demo1.spawnX = 100;
lvlData.demo.demo1.spawnY = 0;
lvlData.demo.demo1.css = "/levels/demo/demo1/css/demo1.css";
//lvlData.demo.demo1.geo = function (x, y, dir) {return 500;};
lvlData.demo.demo1.speedLimit = function (x, y) {return 5;};
lvlData.demo.demo1.objects = function (x, y, entity) {};
lvlData.demo.demo1.loadScript = function () {summon(entityTemplate.police.normal("lvlSpawnPoliceA", 2300, 4100));entity.lvlSpawnPoliceA.patrolling = false;};

//html data
//lvlData.demo.demo1.bg1 = "";
lvlData.demo.demo1.bg2 = "";
lvlData.demo.demo1.bg3 = "";
lvlData.demo.demo1.bg4 = "";
lvlData.demo.demo1.bg5 = "";
lvlData.demo.demo1.fg1 = "";
lvlData.demo.demo1.fg2 = "";
lvlData.demo.demo1.fg3 = "";
lvlData.demo.demo1.fg4 = "";
lvlData.demo.demo1.fg5 = "";
lvlData.demo.demo1.sfg1 = "";

//factor of 0 will sync it to the car and essentially make a still image of it
//factor of 1 will make it move with the background
//anything in between is in between

lvlData.demo.demo1.bg1factor = 1;
lvlData.demo.demo1.bg2factor = 1;
lvlData.demo.demo1.bg3factor = 1;
lvlData.demo.demo1.bg4factor = 1;
lvlData.demo.demo1.bg5factor = 1;
lvlData.demo.demo1.fg1factor = 1;
lvlData.demo.demo1.fg2factor = 1;
lvlData.demo.demo1.fg3factor = 1;
lvlData.demo.demo1.fg4factor = 1;
lvlData.demo.demo1.fg5factor = 1;
lvlData.demo.demo1.sfg1factor = 1;

lvlData.demo.demo1.geo = function (x, y, dir) {
	
	switch (true) {
		case (x < 300):
        	switch (true) {
        		case (y > 5900):
        			return 6000;
        		break;
        		case (y > 3400):
        			return 3500;
        		break;
        		case (y > 1600):
        			return 1700;
        		break;
        		default:
        			return 0;
        		break;
        	}
		case (x < 325):
        	switch (true) {
        		case (y > 5900):
        			return 6000;
        		break;
        		case (y > 3400):
        			return 3500;
        		break;
        		case (y > 1600):
        			if (dir == "Up") {
        				return x + 1400;
        			} else {
        				return (x * -1) + 2000;
        			}
        		break;
        		default:
        			return 0;
        		break;
        	}
        break;
		case (x < 500):
        	switch (true) {
        		case (y > 5900):
        			return 6000;
        		break;
        		case (y > 3400):
        			return 3500;
        		break;
        		case (y > x + 1395):
        			return x + 1400;
        		break;
        		case (y > 1400):
        			return (x * -1) + 2000;
        		break;
        		default:
        			return 0;
        		break;
        	}
        break;
		case (x < 525):
        	switch (true) {
        		case (y > 5900):
        			if (dir == "Up") {
        				return 6000;
        			} else {
        				return (x * -1) + 6500;
        			}
        		break;
        		case (y > 3400):
        			if (dir == "Up") {
        				return x + 3000;
        			} else {
        				return (x * -1) + 4000;
        			}
        		break;
        		case (y > x + 1395):
        			return x + 1400;
        		break;
        		case (y > 1400):
        			return (x * -1) + 2000;
        		break;
        		default:
        			return 0;
        		break;
        	}
        break;
		case (x < 600):
        	switch (true) {
        		case (y > 5900):
        			return 6000;
        		break;
        		case (y > 5400):
        			return (x * -1) + 6500;
        		break;
        		case (y > x + 2990):
        			return x + 3000;
        		break;
        		case (y > 2900):
        			return (x * -1) + 4000;
        		break;
        		case (y > x + 1395):
        			return x + 1400;
        		break;
        		case (y > 1300):
        			return (x * -1) + 2000;
        		break;
        		default:
        			return 0;
        		break;
        	}
        break;
		case (x < 1000):
        	switch (true) {
        		case (y > 5900):
        			return 6000;
        		break;
        		case (y > 5400):
        			return (x * -1) + 6500;
        		break;
        		case (y > x + 2990):
        			return x + 3000;
        		break;
        		case (y > 2900):
        			return (x * -1) + 4000;
        		break;
        		case (y > 1900):
        			return 2000;
        		break;
        		case (y > 1300):
        			return 1400;
        		break;
        		default:
        			return 0;
        		break;
        	}
        break;
		case (x < 1200):
        	switch (true) {
        		case (y > 5900):
        			x + 5000;
        		break;
        		case (y > 5400):
        			return 5500;
        		break;
        		case (y > 3900):
        			return 4000;
        		break;
        		case (y > 2900):
        			return 3000;
        		break;
        		case (y > 1900):
        			return x + 1000;
        		break;
        		case (y > 1300):
        			return 1400;
        		break;
        		default:
        			return 0;
        		break;
        	}
        break;
		case (x < 1400):
        	switch (true) {
        		case (y > 5900):
        			x + 5000;
        		break;
        		case (y > 5400):
        			return 5500;
        		break;
        		case (y > 3900):
        			return 4000;
        		break;
        		case (y > 2900):
        			return 3000;
        		break;
        		case (y > 1900):
        			return (x * -1) + 3400;
        		break;
        		case (y > 1300):
        			return 1400;
        		break;
        		default:
        			return 0;
        		break;
        	}
        break;
		case (x < 2000):
        	switch (true) {
        		case (y > 5900):
        			return x + 5000;
        		break;
        		case (y > 5400):
        			return 5500;
        		break;
        		case (y > 3900):
        			return 4000;
        		break;
        		case (y > 2900):
        			return 3000;
        		break;
        		case (y > 1900):
        			return 2000;
        		break;
        		case (y > 1300):
        			return 1400;
        		break;
        		default:
        			return 0;
        		break;
        	}
        break;
		case (x < 2300):
        	switch (true) {
        		case (y > 6900):
        			return 7000;
        		break;
        		case (y > 5400):
        			return 5500;
        		break;
        		case (y > 3600):
        			return (x - -1) + 6000;
        		break;
        		case (y > 2900):
        			return 3000;
        		break;
        		case (y > 1900):
        			return 2000;
        		break;
        		case (y > 1300):
        			return 1400;
        		break;
        		default:
        			return 0;
        		break;
        	}
        break;
		case (x < 2400):
        	switch (true) {
        		case (y > 6900):
        			return 7000;
        		break;
        		case (y > 5400):
        			return 5500;
        		break;
        		case (y > 3600):
        			return 3700;
        		break;
        		case (y > 2900):
        			return 3000;
        		break;
        		case (y > 1900):
        			return 2000;
        		break;
        		case (y > 1300):
        			return 1400;
        		break;
        		default:
        			return 0;
        		break;
        	}
        break;
		case (x < 2500):
        	switch (true) {
        		case (y > 6900):
        			return 7000;
        		break;
        		case (y > 5400):
        			return 5500;
        		break;
        		case (y > 3900):
        			return 4000;
        		break;
        		case (y > 3600):
        			return 3700;
        		break;
        		case (y > 2900):
        			return 3000;
        		break;
        		case (y > 1900):
        			return 2000;
        		break;
        		case (y > 1300):
        			return 1400;
        		break;
        		default:
        			return 0;
        		break;
        	}
        break;
		case (x < 2600):
        	switch (true) {
        		case (y > 6900):
        			return 7000;
        		break;
        		case (y > 5400):
        			return 5500;
        		break;
        		case (y > 3600):
        			return 3700;
        		break;
        		case (y > 2900):
        			return 3000;
        		break;
        		case (y > 1900):
        			return 2000;
        		break;
        		case (y > 1300):
        			return 1400;
        		break;
        		default:
        			return 0;
        		break;
        	}
        break;
		case (x < 2300):
        	switch (true) {
        		case (y > 6900):
        			return 7000;
        		break;
        		case (y > 5400):
        			return 5500;
        		break;
        		case (y > 3600):
        			return x + 1100;
        		break;
        		case (y > 2900):
        			return 3000;
        		break;
        		case (y > 1900):
        			return 2000;
        		break;
        		case (y > 1300):
        			return 1400;
        		break;
        		default:
        			return 0;
        		break;
        	}
        break;
		case (x < 4500):
        	switch (true) {
        		case (y > 6900):
        			return 7000;
        		break;
        		case (y > 5400):
        			return 5500;
        		break;
        		case (y > 3900):
        			return 4000;
        		break;
        		case (y > 2900):
        			return 3000;
        		break;
        		case (y > 1900):
        			return 2000;
        		break;
        		case (y > 1300):
        			return 1400;
        		break;
        		default:
        			return 0;
        		break;
        	}
        break;
		case (x < 4525):
        	switch (true) {
        		case (y > 6900):
        			return 7000;
        		break;
        		case (y > 5400):
        			return 5500;
        		break;
        		case (y > 3900):
        			if (dir == "Up") {
        				return x - 500;
        			} else {
        				return (x * -1) + 8500;
        			}
        		break;
        		case (y > 2900):
        			return 3000;
        		break;
        		case (y > 1900):
        			return 2000;
        		break;
        		case (y > 1300):
        			return 1400;
        		break;
        		default:
        			return 0;
        		break;
        	}
        break;
		case (x < 4975):
        	switch (true) {
        		case (y > 6900):
        			return 7000;
        		break;
        		case (y > 5400):
        			return 5500;
        		break;
        		case (y > 4000):
        			return x - 500;
        		break;
        		case (y > (x * -1) + 8490):
        			return (x * -1) + 8500;
        		break;
        		case (y > 2900):
        			return 3000;
        		break;
        		case (y > 1900):
        			return 2000;
        		break;
        		case (y > 1300):
        			return 1400;
        		break;
        		default:
        			return 0;
        		break;
        	}
        break;
		case (x < 5500):
        	switch (true) {
        		case (y > 6900):
        			return 7000;
        		break;
        		case (y > 5400):
        			return 5500;
        		break;
        		case (y > 4000):
        			return x - 500;
        		break;
        		case (y > 2900):
        			if (dir == "up") {
        				return (x * -1) + 8500;
        			} else {
        				return 3000;
        			}
        		break;
        		case (y > 1900):
        			return 2000;
        		break;
        		case (y > 1300):
        			return 1400;
        		break;
        		default:
        			return 0;
        		break;
        	}
        break;
		case (x < 5975):
        	switch (true) {
        		case (y > 6900):
        			return 7000;
        		break;
        		case (y > 5490):
        			return 5500;
        		break;
        		case (y > 4000):
        			return x - 500;
        		break;
        		case (y > 2900):
        			return 3000;
        		break;
        		case (y > 1900):
        			return 2000;
        		break;
        		default:
        			return 0;
        		break;
        	}
        break;
		case (x < 6000):
        	switch (true) {
        		case (y > 6900):
        			return 7000;
        		break;
        		case (y > 5400):
        			if (dir == "Up") {
        				return 5500;
        			} else {
        				x - 500;
        			}
        		break;
        		case (y > 2900):
        			return 3000;
        		break;
        		case (y > 1900):
        			return 2000;
        		break;
        		default:
        			return 0;
        		break;
        	}
        break;
		case (x < 6975):
        	switch (true) {
        		case (y > 6900):
        			return 7000;
        		break;
        		case (y > 5400):
        			return 5500;
        		break;
        		case (y > 2900):
        			return 3000;
        		break;
        		case (y > 1000):
        			return (x * -1) + 8000;
        		break;
        		default:
        			return x - 6000;
        		break;
        	}
        break;
		case (x < 7000):
        	switch (true) {
        		case (y > 6900):
        			return 7000;
        		break;
        		case (y > 5400):
        			return 5500;
        		break;
        		case (y > 2900):
        			return 3000;
        		break;
        		default:
        			if (dir == "Up") {
        				return (x * -1) + 8000;
        			} else {
        				return x - 6000;
        			}
        		break;
        	}
        break;
		case (x < 7975):
        	switch (true) {
        		case (y > 6000):
        			return (x * -1) + 1400;
        		break;
        		case (y > 5400):
        			return 5500;
        		break;
        		case (y > 2000):
        			return (x * -1) + 10000;
        		break;
        		default:
        			return x - 6000;
        		break;
        	}
        break;
		case (x < 8000):
        	switch (true) {
        		case (y > 6000):
        			return (x * -1) + 1400;
        		break;
        		case (y > 5400):
        			return 5500;
        		break;
        		default:
        			if (dir == "Up") {
        				return (x * -1) + 10000;
        			} else {
        				return x - 6000;
        			}
        		break;
        	}
        break;
		case (x < 8475):
        	switch (true) {
        		case (y > 5990):
        			return 6000;
        		break;
        		case (y > 5400):
        			return x - 2500;
        		break;
        		default:
        			return 2000;
        		break;
        	}
        break;
		case (x < 8500):
        	switch (true) {
        		case (y > 5400):
        			if (dir == "Up") {
        				return 6000;
        			} else {
        				return x - 2500;
        			}
        		break;
        		default:
        			return 2000;
        		break;
        	}
        break;
        default:
        	switch (true) {
        		case (y > 5900):
        			return 6000;
        		break;
        		default:
        			return 2000;
        		break;
        	}
        break;
	}
}


//tells the stupid system that the level is ready
lvlData.demo.demo1.loaded = true;