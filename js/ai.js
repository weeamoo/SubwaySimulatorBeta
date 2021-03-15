//container for differnet ai to make organization happen
var ai = {};

//placeholder ai, probably will do nothing
ai.default = function (entity) {};

//set to this for it be controlled by controller/keyboard
ai.controller = function (entity) {
	//goes through each physical input and copies it to entity's input
	for (var property in input) {
		entity.input.property = input.property.pressed;
	}
};