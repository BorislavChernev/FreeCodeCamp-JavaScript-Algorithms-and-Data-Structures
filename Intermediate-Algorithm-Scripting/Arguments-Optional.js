function addTogether() {
	const [first, second] = arguments;

	if (typeof first !== 'number') {
		return undefined;
	} else if (arguments.length === 1) {
		function addSecond(second) {
			if (typeof second !== 'number') {
				return undefined;
			} else {
				return first + second;
			}
		}

		return addSecond;
	} else if (typeof second !== 'number') {
		return undefined;
	} else {
		return first + second;
	}
}
