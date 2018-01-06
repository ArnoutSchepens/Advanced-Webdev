var arr = [
	{ title: "Instructor", first: "Elie", last: "Schoppik" },
	{ title: "Instructor", first: "Tim", last: "Garcia", isCatOwner: true },
	{ title: "Instructor", first: "Matt", last: "Lane" },
	{ title: "Instructor", first: "Colt", last: "Steele", isCatOwner: true }
];

function hasOddNumber(arr) {
	console.log("hasOddNumbers");
	return arr.some(function(val) {
		return val % 2 !== 0;
	});
}
console.log(hasOddNumber([1, 2, 2, 2, 2, 2, 4]));
console.log(hasOddNumber([2, 2, 2, 2, 2, 4]));

function hasAZero(num) {
	console.log("hasAZero");
	return num
		.toString()
		.split("")
		.some(function(val) {
			return val === "0";
		});
}
console.log(hasAZero(3332123213101232321));
console.log(hasAZero(1212121));

function hasOnlyOddNumbers(arr) {
	console.log("hasOnlyOddNumbers");
	return arr.every(function(val) {
		return val % 2 !== 0;
	});
}
console.log(hasOnlyOddNumbers([1, 3, 5, 7]));
console.log(hasOnlyOddNumbers([1, 2, 3, 5, 7]));

function hasNoDuplicates(arr) {
	console.log("hasNoDuplicates");
	return arr.every(function(val) {
		return arr.indexOf(val) === arr.lastIndexOf(val);
	});
}
console.log(hasNoDuplicates([1, 2, 3, 1]));
console.log(hasNoDuplicates([1, 2, 3]));

function hasCertainKey(arr, key) {
	console.log("hasCertainKey");
	return arr.every(function(val) {
		return val[key] !== undefined;
	});
}
console.log(hasCertainKey(arr, "first"));
console.log(hasCertainKey(arr, "isCatOwner"));

function hasCertainValue(arr, key, searchValue) {
	console.log("hasCertainValue");
	return arr.every(function(val) {
		return val[key] === searchValue;
	});
}
console.log(hasCertainValue(arr, "title", "Instructor"));
console.log(hasCertainValue(arr, "first", "Elie"));
