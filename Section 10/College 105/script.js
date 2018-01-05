var arr = [1, 2, 3];

arr.forEach(function(value, index, array) {
	console.log(value);
});

function forEach(array, callback) {
	for (var i = 0; i < array.length; i++) {
		callback(array[i], i, array);
	}
}

forEach(arr, function(value, index, array) {
	console.log(value);
});
