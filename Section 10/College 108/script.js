function doubleValues(arr) {
	return arr.map(function(val) {
		return val * 2;
	});
}
console.log(doubleValues([1, 2, 3]));
console.log(doubleValues([1, -2, -3]));

function valTimesIndex(arr) {
	return arr.map(function(val, idx) {
		return val * idx;
	});
}
console.log(valTimesIndex([1, 2, 3]));
console.log(valTimesIndex([1, -2, -3]));

function extractKey(arr, key) {
	return arr.map(function(val) {
		return val[key];
	});
}
console.log(
	extractKey(
		[{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
		"name"
	)
);

function extractFullName(arr) {
	return arr.map(function(val) {
		return val.first + " " + val.last;
	});
}
console.log(
	extractFullName([
		{ first: "Elie", last: "Schoppik" },
		{ first: "Tim", last: "Garcia" },
		{ first: "Matt", last: "Lane" },
		{ first: "Colt", last: "Steele" }
	])
);
