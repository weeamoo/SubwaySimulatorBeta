weapon = {};

weapon.none = {};
weapon.none.shoot = function (entityPass) {}

weapon.test = {};
weapon.test.cooldown = 15;
weapon.test.shoot = function (entityPass) {

	if (entityPass.weaponCooldown == 0) {
		summon(entityTemplate.bullet.test("", entityPass.x, entityPass.y, entityPass));
		entityPass.weaponCooldown = weapon.test.cooldown;
	}
}
