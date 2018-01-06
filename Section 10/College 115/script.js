var names = ["Tim", "Matt", "Colt", "Elie"];

var namesReduce = names.reduce(function(accumulator, nextValue) {
	return (accumulator += " " + nextValue);
}, "The instructors are");
console.log(namesReduce);

var counts = {};
var arr = [5, 4, 1, 4, 5];
var arrReduce = arr.reduce(function(accumulator, nextValue) {
	if (nextValue in accumulator) {
		accumulator[nextValue]++;
	} else {
		accumulator[nextValue] = 1;
	}
	return accumulator;
}, counts);
console.log(arrReduce);

function sumOddNumbers(arr) {
	return arr.reduce(function(accumulator, nextValue) {
		if (nextValue % 2 !== 0) {
			accumulator += nextValue;
		}
		return accumulator;
	}, 0);
}
console.log(sumOddNumbers([1, 2, 3, 4, 5]));

function createFullName(arr) {
	return arr.reduce(function(accumulator, nextValue) {
		accumulator.push(nextValue.first + " " + nextValue.last);
		return accumulator;
	}, []);
}
console.log(
	createFullName([
		{ first: "Colt", last: "Steele" },
		{ first: "Matt", last: "Lane" }
	])
);
