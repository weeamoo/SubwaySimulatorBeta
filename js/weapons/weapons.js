weapon = {};

weapon.none = function (entityPass) {}

weapon.norm = function (entityPass) {

	if (entityPass.weaponCooldown == 0) {
		summon(entityTemplate.bullet.norm("", entityPass.x, entityPass.y, entityPass));
		entityPass.weaponCooldown = 15;
	}
}
