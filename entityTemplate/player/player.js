entityTemplate.player = function (name, x, y) {
	//name			the name for the entity, ex: if this was creeper it's JS var would be entity.creeper and it's html ID would be entity_creeper
	//x x-coord
	//y y-coord
	
	//start with default data
	var output = defaultEntityData();
	output.name = name;
	//modifies
	output.width = 95;
	output.height = 50;
	output.id = "entity_" + name;
	output.ai = ai.controller;
	output.weapon = weapon.test;
	output.html = "<div id=\"" + output.id + "\" style=\"left: 0%; bottom: 29.1111%;\"><img id=\"playerCarBodyImg\" class=\"playerCarImg\" src=\"/img/player/car.png\"><img id=\"playerCarDoorImg\" class=\"playerCarImg\" src=\"/img/player/door.png\"></div>";

	return output;
}
