function Dog(name) {
	this.name = name;
}

Dog.prototype = {
	constructor: Dog,
	numLegs: 2,
	eat: function () {
		console.log('nom nom nom');
	},
	describe: function () {
		console.log('My name is ' + this.name);
	},
};
