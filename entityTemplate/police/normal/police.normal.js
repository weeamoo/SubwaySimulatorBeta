entityTemplate.police = {};
entityTemplate.police.normal = function (name, x, y) {
	//name			the name for the entity, ex: if this was creeper it's JS var would be entity.creeper and it's html ID would be entity_creeper
	//x x-coord
	//y y-coord

	if (name == "") {
		name = "police_" + Math.random().toString().slice(2);
	}
	
	//start with default data
	var output = defaultEntityData();
	output.name = name;
	//modifies
	output.id = "entity_" + name;
	output.ai = ai.police.normal;
	output.weapon = weapon.norm;
	output.patrolling = true;
	output.chasing = false;
	output.html = "<div id=\"" + output.id + "\" class =\"policeCarDiv\" style=\"left: 0%; bottom: 29.1111%;\"><img id=\"policeCarImg\" class=\"policeCarImg\" src=\"/img/cops/normal/cop.png\"></div>";

	return output;
}