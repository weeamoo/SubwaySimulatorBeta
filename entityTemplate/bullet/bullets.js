//container
entityTemplate.bullet = {};

//normal one
entityTemplate.bullet.norm = function (name, x, y, owner) {
	//name			the name for the entity, ex: if this was creeper it's JS var would be entity.creeper and it's html ID would be entity_creeper
	//x x-coord
	//y y-coord

	//if name is blank it will get a random one
	if (name == "") {
		name = Math.random().toString().slice(2);
	}
	
	//start with default data
	var output = defaultEntityData();
	output.name = name;
	//modifies
	output.id = "entity_" + name;
	output.ai = ai.bullet.norm;
	output.html = "<img src=\"/img/bullet/bullet.png\" />";
	output.xspeed = 20;
	output.weight = 0;
	output.owner = owner;

	return output;
}