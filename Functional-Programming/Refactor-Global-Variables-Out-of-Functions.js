var bookList = [
	'The Hound of the Baskervilles',
	'On The Electrodynamics of Moving Bodies',
	'Philosophiæ Naturalis Principia Mathematica',
	'Disquisitiones Arithmeticae',
];

function add(array, bookName) {
	let sliced = array.slice(0);
	sliced.push(bookName);
	return sliced;
}

function remove(array, bookName) {
	let slicedTwo = array.slice(0);
	if (slicedTwo.indexOf(bookName) >= 0) {
		let index = slicedTwo.indexOf(bookName);

		slicedTwo.splice(index, 1);
		return slicedTwo;
	}
}