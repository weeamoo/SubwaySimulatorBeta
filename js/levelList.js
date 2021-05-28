//list all levels so that level loader can find them

//function to register level as something that can work, make sure to create parent structure before calling
//level should be object name (ex lvlData.debug.test1)
//ex: registerLevel("lvlData.debug.test1");
function registerLevel (level) {
	//adds lvldata
	level = "lvlData." + level;
	//creates level data container
	eval(level + " = [];");
	eval(level + ".loaded = false;");
	eval(level + ".path = \"/levels/" + level.slice(8).replace(".", "/") + "/js/" + level.slice(8) + ".js\";");
}

//main var that all levels will be loaded into
var lvlData = [];

//debug levels go here
lvlData.debug = [];
registerLevel("debug.caramelldansen");
registerLevel("debug.miku");
registerLevel("debug.test1");
registerLevel("debug.test2");
registerLevel("debug.test3");
registerLevel("debug.test4");
registerLevel("debug.test5");
registerLevel("debug.test6");
