// ES5
var add = function(a, b) {
	return a + b;
};
// ES2015
var add = (a, b) => {
	return a + b;
};
// OR
var add = (a, b) => a + b;

// ES5
[1, 2, 3].map(function(value) {
	return value * 2;
});
// ES2015
[1, 2, 3].map = value => value * 2;

// ES5
function doubleAndFilter(arr) {
	return arr
		.map(function(value) {
			return value * 2;
		})
		.filter(function(value) {
			return value % 3 === 0;
		});
}
console.log(doubleAndFilter([5, 10, 15, 20]));
// ES2015

var doubleAndFilter = arr =>
	arr.map(value => value * 2).filter(value => value % 3 === 0);
console.log(doubleAndFilter([3, 10, 15, 20]));
