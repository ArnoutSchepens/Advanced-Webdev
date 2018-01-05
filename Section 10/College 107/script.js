var arr = [1, 2, 3];

arr.map(function(value, index, array) {
	console.log(value * 2);
	return value * 2;
});

function map(arr, callback) {
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		newArr.push(callback(arr[i], i, arr));
	}
	return newArr;
}

function tripleValues(arr) {
	return arr.map(function(value) {
		return value * 3;
	});
}
console.log(tripleValues([1, 2, 3]));

function onlyFirstName(arr) {
	return arr.map(function(value) {
		return value.first;
	});
}
console.log(
	onlyFirstName([
		{ first: "Tim", last: "Garcia" },
		{ first: "Matt", last: "Lane" }
	])
);
