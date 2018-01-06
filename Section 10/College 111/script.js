var arr = [1, 2, 3];

arr.some(function(value, index, array) {
	return value < 2;
});

function some(array, callback) {
	for (var i = 0; i < array.length; i++) {
		if (callback(array[i], i, array)) {
			return true;
		}
	}
	return false;
}

function hasEvenNumber(arr) {
	return arr.some(function(value) {
		return value % 2 === 0;
	});
}
console.log(hasEvenNumber([1, 2, 3, 4]));
console.log(hasEvenNumber([1, 3, 5]));

function hasComma(str) {
	return str.split("").some(function(value) {
		return value === ",";
	});
}
console.log(hasComma("This is wonderful"));
console.log(hasComma("This, is wonderful"));
