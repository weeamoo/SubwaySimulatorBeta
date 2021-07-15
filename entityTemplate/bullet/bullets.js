//container
entityTemplate.bullet = {};

//normal one
entityTemplate.bullet.test = function (name, x, y, owner) {
	//name			the name for the entity, ex: if this was creeper it's JS var would be entity.creeper and it's html ID would be entity_creeper
	//x x-coord
	//y y-coord

	//if name is blank it will get a random one
	if (name == "") {
		name = "bullet_test_" + Math.random().toString().slice(2);
	}
	
	//start with default data
	var output = defaultEntityData();
	output.name = name;
	//modifies
	output.id = "entity_" + name;
	output.ai = ai.bullet.norm;
	output.html = "<div id=\"" + output.id + "\" class=\"bulletNormDiv\" style=\"left: 0%; bottom: 29.1111%;\"><img class=\"bulletNormImg\" src=\"/img/bullet/bullet.png\"></div>";
	output.speedLimitCalc = function (entityPass) {return 999999};
	output.xSpeed = 20;
	output.ySpeed = 0;
	output.weight = 0;
	output.x = x;
	output.y = y + 25;
	output.damage = 100;
	output.range = 20;
	output.owner = owner;

	return output;
}

//bullet code

ai.bullet = {};
//standard bullet ai
ai.bullet.norm = function (entityPass) {
	//checks every entity and determines if it's close enough to be considered hit
	for (var property in entity) {
		eval("ai.police.functions.entityCheck(entity." + property + ", entityPass);");
	}
	
	//remove if it goes off the screen
	if (entityPass.x > levelWidth) {
		despawn(entityPass);
	}
	
}

ai.bullet.functions = {};
ai.bullet.functions.entityCheck =  function (entityPass, bulletPass) {
	//console.log(entityPass);
	//console.log(bulletPass);

	//left wall, right wall, top wall, bottom wall, not itself
	if (entityPass.x >= bulletPass.x - policePass.range && entityPass.x <= bulletPass.x + bulletPass.range && entityPass.y <= bulletPass.y + bulletPass.range && entityPass.y >= bulletPass.y - bulletPass.range && entityPass != bulletPass) {
		//this should mean it hit
		entityPass.hp = entityPass.hp - bulletPass.damage;
		despawn(bulletPass);
	}

}
