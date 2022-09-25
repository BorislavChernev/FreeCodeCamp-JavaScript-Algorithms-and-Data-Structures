function urlSlug(title) {
	return title.toLowerCase().trim().split(/\s+/).join('-');
}
console.log(urlSlug('A Mind Needs Books Like A Sword Needs A Whetstone'));
