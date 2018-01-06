function outer(a) {
	return function inner(b) {
		return a + b;
	};
}

console.log(outer(5));
console.log(outer(5)(5));

var storeOuter = outer(10);
console.log(storeOuter(5));

function outerFunction() {
	var data = "something from outerFunction";
	var fact = "Remember me!";
	return function innerFunction() {
		debugger;
		return fact;
	};
}

outerFunction()();
console.log(outerFunction()());
