var arr = [1, 2, 3];

arr.every(function(value, index, array) {
	console.log(value < 0);
	console.log(value > 0);
});

function every(array, callback) {
	for (var i = 0; i < array.length; i++) {
		if (callback[(array[i], i, array)]) {
			return false;
		}
	}
	return true;
}

function allLowerCase(str) {
	return str.split("").every(function(value) {
		return value === value.toLowerCase();
	});
}

console.log(allLowerCase("this is Really nice"));
console.log(allLowerCase("this is really nice"));

function allArrays(arr) {
	return arr.every(Array.isArray);
}
console.log(allArrays([[1], [2], [3, 4]]));
console.log(allArrays([[1], [2], {}]));
