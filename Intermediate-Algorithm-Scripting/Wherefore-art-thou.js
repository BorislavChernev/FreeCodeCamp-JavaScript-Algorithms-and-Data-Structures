function whatIsInAName(collection, source) {
	const soruceKeys = Object.keys(source);

	return collection.filter((obj) =>
		soruceKeys
			.map((key) => obj.hasOwnProperty(key) && obj[key] === source[key])
			.reduce((a, b) => a && b)
	);
}

whatIsInAName(
	[
		{ first: 'Romeo', last: 'Montague' },
		{ first: 'Mercutio', last: null },
		{ first: 'Tybalt', last: 'Capulet' },
	],
	{ last: 'Capulet' }
);
