function destroyer(arr) {
	const valsToRemove = Array.from(arguments).slice(1);
	return arr.filter(function (val) {
		return !valsToRemove.includes(val);
	});
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
