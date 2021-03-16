//debug folder
entityTemplate.debug = {};

entityTemplate.debug.wanderCar = function (name, x, y) {
	//name			the name for the entity, ex: if this was creeper it's JS var would be entity.creeper and it's html ID would be entity_creeper
	//x x-coord
	//y y-coord
	
	//if name is blank it will get a random one
	if (name == "") {
		"entity_" + Math.random().toString().slice(2);
	}
	
	//start with default data
	var output = defaultEntityData();
	output.name = name;
	//modifies
	output.id = "entity_" + name;
	output.ai = ai.wanderCar;
	output.html = "<div id=\"" + output.id + "\" class=\"playerCarDiv\" style=\"left: 0%; bottom: 29.1111%;\"><img id=\"playerCarBodyImg\" class=\"playerCarImg\" src=\"/img/player/car.png\"><img id=\"playerCarDoorImg\" class=\"playerCarImg\" src=\"/img/player/door.png\"></div>";

	return output;
}
