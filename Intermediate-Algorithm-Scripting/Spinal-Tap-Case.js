function spinalCase(str) {
	str = str.replace(/[^a-zA-Z0-9-]|[a-z][A-Z]/g, function (x) {
		if (x.match(/[a-z][A-Z]/)) {
			return x[0] + '-' + x[1];
		} else {
			return '-';
		}
	});
	return str.replace(/[A-Z]/g, function (x) {
		return x.toLowerCase();
	});
}
