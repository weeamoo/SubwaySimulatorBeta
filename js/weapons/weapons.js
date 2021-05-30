weapon = {};

weapon.none = function (entityPass) {}

weapon.norm = function (entityPass) {
	summon(entityTemplate.bullet.norm("", entityPass.x, entityPass.y, entityPass));
}