function filterByValue(arr, key) {
	return arr.filter(function(val) {
		return val[key] !== undefined;
	});
}
console.log(
	filterByValue(
		[
			{ first: "Elie", last: "Schoppik" },
			{ first: "Tim", last: "Garcia", isCatOwner: true },
			{ first: "Matt", last: "Lane" },
			{ first: "Colt", last: "Steele", isCatOwner: true }
		],
		"isCatOwner"
	)
);

function find(arr, searchValue) {
	return arr.filter(function(val) {
		return val === searchValue;
	});
}
console.log(find([1, 2, 3, 4, 5], 3));
console.log(find([1, 2, 3, 4, 5], 10));

function findInObj(arr, key, searchValue) {
	return arr.filter(function(val) {
		return val[key] === searchValue;
	})[0];
}
console.log(
	findInObj(
		[
			{ first: "Elie", last: "Schoppik" },
			{ first: "Tim", last: "Garcia", isCatOwner: true },
			{ first: "Matt", last: "Lane" },
			{ first: "Colt", last: "Steele", isCatOwner: true }
		],
		"isCatOwner",
		true
	)
);

function removeVowels(str) {
	var vowels = "aeiou";
	return str
		.toLowerCase()
		.split("")
		.filter(function(val) {
			return vowels.indexOf(val) === -1;
		})
		.join("");
}
console.log(removeVowels("Elie"));
console.log(removeVowels("TIM"));
console.log(removeVowels("ZZZZZZ"));

function doubleOddNumbers(arr) {
	return arr
		.filter(function(val) {
			return val % 2 !== 0;
		})
		.map(function(val) {
			return (val *= 2);
		});
}
console.log(doubleOddNumbers([1, 2, 3, 4, 5]));
console.log(doubleOddNumbers([4, 4, 4, 4, 4]));
