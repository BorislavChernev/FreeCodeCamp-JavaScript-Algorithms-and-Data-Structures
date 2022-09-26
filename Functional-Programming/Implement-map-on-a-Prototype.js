
const s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
	const newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i]));
    }
	return newArray;
};

const new_s = s.myMap(function (item) {
	return item * 2;
});