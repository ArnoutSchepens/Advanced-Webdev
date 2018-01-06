var arr = [
	{ name: "Elie" },
	{ name: "Tim" },
	{ name: "Matt" },
	{ name: "Colt" }
];
function extractValue(arr, key) {
	return arr.reduce(function(accumulator, nextValue) {
		accumulator.push(nextValue[key]);
		return accumulator;
	}, []);
}
console.log(extractValue(arr, "name"));

function vowelCount(str) {
	var vowels = "aeuio";
	return str
		.toLowerCase()
		.split("")
		.reduce(function(acc, next) {
			if (vowels.indexOf(next) !== -1) {
				if (acc[next]) {
					acc[next]++;
				} else {
					acc[next] = 1;
				}
			}
			return acc;
		}, {});
}
console.log(vowelCount("Elie"));
console.log(vowelCount("Tim"));
console.log(vowelCount("Matt"));
console.log(vowelCount("hmmm"));
console.log(vowelCount("I Am awesome and so are you"));

function addKeyAndValue(arr, key, value) {
	return arr.reduce(function(acc, next, idx) {
		acc[idx][key] = value;
		return acc;
	}, arr);
}
console.log(addKeyAndValue(arr, "title", "Instructor"));

function partition(arr, callback) {
	return arr.reduce(
		function(acc, next) {
			if (callback(next)) {
				acc[0].push(next);
			} else {
				acc[1].push(next);
			}
			return acc;
		},
		[[], []]
	);
}

function isEven(val) {
	return val % 2 === 0;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(partition(arr, isEven));

function isLongerThanThreeCharacters(val) {
	return val.length > 3;
}

var names = ["Elie", "Colt", "Tim", "Matt"];

console.log(partition(names, isLongerThanThreeCharacters));
