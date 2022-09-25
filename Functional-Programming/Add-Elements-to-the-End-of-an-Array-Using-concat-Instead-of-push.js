function nonMutatingPush(original, newItem) {
	return original.concat(newItem);
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingPush(first, second);
