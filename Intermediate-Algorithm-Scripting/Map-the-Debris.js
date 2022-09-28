function orbitalPeriod(arr) {
	const GM = 398600.4418;
	const earthRadius = 6367.4447;

	const newArr = JSON.parse(JSON.stringify(arr));

	newArr.forEach(function (item) {
		const tmp = Math.round(
			2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM)
		);

		delete item.avgAlt;

		item.orbitalPeriod = tmp;
	});

	return newArr;
}
