function printRest(a, b, ...c) {
	console.log('a:', a);
	console.log('b:', b);
	console.log('c:', c);
}

printRest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
printRest(1, 2, 3);

var sumArguments = (...args) => args.reduce((acc, next) => acc + next);
console.log(sumArguments(10, 5, 7, 6, 1, 0));
