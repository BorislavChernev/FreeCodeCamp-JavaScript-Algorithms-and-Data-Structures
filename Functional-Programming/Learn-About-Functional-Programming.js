const prepareTea = () => 'greenTea';

const getTea = (numOfCups) => {
	const teaCups = [];

	for (let cups = 1; cups <= numOfCups; cups += 1) {
		const teaCup = prepareTea();
		teaCups.push(teaCup);
	}
	return teaCups;
};

const tea4TeamFCC = getTea(40);
