var arr = [1, 2, 3];

arr.filter(function(value, index, array) {
	console.log(value > 2);
	return value > 2;
});

var names = [
	{ name: "Elie" },
	{ name: "Tim" },
	{ name: "Matt" },
	{ name: "Colt" }
];
names.filter(function(value, index, array) {
	console.log(value.name.length > 3);
	return value.name.length > 3;
});

function filter(array, callback) {
	var newArr = [];
	for (var i = 0; i < array.length; i++) {
		if (callback(array[i], i, array)) {
			newArr.push(array[i]);
		}
	}
}

function onlyFourLetterNames(arr) {
	return arr.filter(function(val) {
		return val.length === 4;
	});
}

console.log(onlyFourLetterNames(names));
