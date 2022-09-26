function checkPositive(arr) {
	return arr.every((x) => x > 0);
}

checkPositive([1, 2, 3, -4, 5]);
