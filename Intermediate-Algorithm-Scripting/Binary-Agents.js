function binaryAgent(str) {
	var biString = str.split(' ');
	var uniString = [];

	for (var i = 0; i < biString.length; i++) {
		uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
	}

	return uniString.join('');
}
