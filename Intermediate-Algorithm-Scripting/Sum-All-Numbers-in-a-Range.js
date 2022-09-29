function sumAll(arr) {
    let [a, b] = arr;
	let sum = a + b;

	for (let i = Math.min(...arr) + 1; i < Math.max(...arr); i++) {
		sum += i;
	}

	return sum;
}

console.log(sumAll([1, 4]));
