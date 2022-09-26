const Window = function (tabs) {
	this.tabs = tabs;
};

Window.prototype.join = function (otherWindow) {
	this.tabs = this.tabs.concat(otherWindow.tabs);
	return this;
};

Window.prototype.tabOpen = function (tab) {
	this.tabs.push('new tab');
	return this;
};

Window.prototype.tabClose = function (index) {
	const tabsBeforeIndex = this.tabs.slice(0, index);
	const tabsAfterIndex = this.tabs.slice(index + 1);

	this.tabs = tabsBeforeIndex.concat(tabsAfterIndex);

	return this;
};

const workWindow = new Window([
	'GMail',
	'Inbox',
	'Work mail',
	'Docs',
	'freeCodeCamp',
]);
const socialWindow = new Window([
	'FB',
	'Gitter',
	'Reddit',
	'Twitter',
	'Medium',
]);
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']);

const finalTabs = socialWindow
	.tabOpen()
	.join(videoWindow.tabClose(2))
	.join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);
