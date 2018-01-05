arrNumbers = [1, 2, 3, 4, 5];
arrNames = ["Albert", "Alexander", "Axel", "Benjamin"];

function doubleValue(arr) {
	var newArr = [];
	arr.forEach(function(val) {
		newArr.push(val * 2);
	});
	return newArr;
}
console.log(doubleValue(arrNumbers));

function onlyEvenValues(arr) {
	var newArr = [];
	arr.forEach(function(val) {
		if (val % 2 === 0) {
			newArr.push(val);
		}
	});
	return newArr;
}
console.log(onlyEvenValues(arrNumbers));

function showFirstAndLast(arr) {
	var newArr = [];
	arr.forEach(function(val) {
		newArr.push(val[0] + val[val.length - 1]);
	});
	return newArr;
}
console.log(arrNames);

function addKeyAndValue(arr, key, value) {
	arr.forEach(function(val) {
		val[key] = value;
	});
	return arr;
}

function vowelCount(str) {
	var splitArr = str.split("");
	var obj = {};
	var vowels = "aeuio";

	splitArr.forEach(function(letter) {
		if (vowels.indexOf(letter.toLowerCase()) !== -1) {
			if (letter in obj) {
				obj[letter]++;
			} else {
				obj[letter] = 1;
			}
		}
	});
}
