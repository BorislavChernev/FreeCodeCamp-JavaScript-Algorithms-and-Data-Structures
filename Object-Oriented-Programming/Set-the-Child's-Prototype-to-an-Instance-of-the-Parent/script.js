function Animal() {}

Animal.prototype = {
	constructor: Animal,
	eat: function () {
		console.log('nom nom nom');
	},
};

function Dog() {}

let beagle = new Dog();
Dog.prototype = Object.create(Animal.prototype);