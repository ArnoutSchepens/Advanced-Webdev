var arr = [1, 2, 3];

// ES5
var a = arr[0];
var b = arr[1];
var c = arr[2];
console.log(a);
console.log(b);
console.log(c);
// 2015
[a, b, c] = arr;
console.log(a);
console.log(b);
console.log(c);

function returnNumbers(a, b) {
	return [a, b];
}
// ES5
var first = returnNumbers(5, 10)[0];
var second = returnNumbers(5, 10)[1];
console.log(first);
console.log(second);
// ES2015
[first, second] = returnNumbers(7, 14);
console.log(first);
console.log(second);

// ES5
function swapES5(a, b) {
	var temp = a;
	a = b;
	b = temp;
	return [a, b];
}
console.log(swapES5(10, 5));
// ES2015

function swapES2015(a, b) {
	return ([a, b] = [b, a]);
}
console.log(swapES2015(10, 5));
