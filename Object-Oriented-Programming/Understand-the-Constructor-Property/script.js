function Dog(name) {
	this.name = name;
}

function joinDogFraternity(candidate) {
	return candidate.constructor === Dog;
}
