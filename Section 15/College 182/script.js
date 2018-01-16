var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [7, 8, 9];
// ES5
var combinedES5 = arr1.concat(arr2).concat(arr3);
console.log(combinedES5);
// ES2015
var combinedES2015 = [...arr1, ...arr2, ...arr3];
console.log(combinedES2015);

var arr = [3, 2, 4, 1, 5];
// ES5
console.log(Math.max.apply(this, arr));
// ES2015
console.log(Math.max(...arr));

function sumValues(a, b, c) {
	return a + b + c;
}
var nums = [12, 15, 20];
// ES5
console.log(sumValues.apply(this, nums));
// ES2015
console.log(sumValues(...nums));