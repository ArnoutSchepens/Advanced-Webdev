var arr = [1, 2, 3, 4, 5];

var simpleReduce = arr.reduce(function(accumulator, nextValue) {
	console.log(accumulator + nextValue);
	return accumulator + nextValue;
});

console.log("Result is: ", simpleReduce);

var extendedReduce = arr.reduce(function(accumulator, nextValue) {
	console.log(accumulator + nextValue);
	return accumulator + nextValue;
}, 10);

console.log(extendedReduce);
