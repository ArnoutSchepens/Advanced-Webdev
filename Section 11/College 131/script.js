function arrayFrom(arrayLikeObject) {
	return [].slice.call(arrayLikeObject);
}
var divs = document.getElementsByTagName("div");
console.log(divs.reduce);
var converted = arrayFrom(divs);
console.log(converted.reduce);

function sumEvenArguments() {
	var args = [].slice.call(arguments);
	return args.reduce(function(acc, next) {
		if (next % 2 === 0) {
			return (acc += next);
		}
		return acc;
	}, 0);
}
console.log(sumEvenArguments(1, 2, 3, 4));
console.log(sumEvenArguments(1, 2, 6));
console.log(sumEvenArguments(1, 2));

function add(a, b) {
	return a + b;
}

function invokeMax(fn, num) {
	var max = 0;
	return function() {
		if (max >= num) {
			return "Maxed Out!";
		}
		max++;
		return fn.apply(this, arguments);
	};
}
var addOnlyThreeTimes = invokeMax(add, 3);
console.log(addOnlyThreeTimes(1, 2));
console.log(addOnlyThreeTimes(2, 2));
console.log(addOnlyThreeTimes(1, 2));
console.log(addOnlyThreeTimes(1, 2));

var addOnce = once(add, this);
console.log();
console.log();
console.log();
function doMath(a, b, c) {
	return (this.firstName = " adds " + (a + b + c));
}
var instructors = { firstName: "Elie" };
var doMathOnce = once(doMath, instructors);
doMathOnce(1, 2, 3);
doMathOnce(1, 2, 3);
function once(fn, thisArg) {
	var hasBeenCalled = false;
	return function() {
		if (!hasBeenCalled) {
			hasBeenCalled = true;
			return fn.apply(thisArg, arguments);
		}
	};
}

function firstNameFavoriteColor(favoriteColor) {
	return this.firstName + "'s favorite color is " + favoriteColor;
}
var person = {
	firstName: "Elie"
};
var bindFn = bind(firstNameFavoriteColor, person);
console.log(bindFn("green"));
var bindFn2 = bind(firstNameFavoriteColor, person, "blue");
console.log(bindFn2("green"));
function addFourNumbers(a, b, c, d) {
	return a + b + c + d;
}
console.log(bind(addFourNumbers, this, 1)(2, 3, 4));
console.log(bind(addFourNumbers, this, 1, 2)(3, 4));
console.log(bind(addFourNumbers, this, 1, 2, 3)(4));
console.log(bind(addFourNumbers, this, 1, 2, 3, 4)());
console.log(bind(addFourNumbers, this)(1, 2, 3, 4));
console.log(bind(addFourNumbers, this)(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
function bind(fn, thisArg) {
	var outerArgs = [].slice.call(arguments, 2);
	return function() {
		var innerArgs = [].slice.call(arguments);
		var allArgs = outerArgs.concat(innerArgs);
		return fn.apply(thisArg, allArgs);
	};
}

function personSubtract(a, b, c) {
	return this.firstName + " subtracts " + (a - b - c);
}
var person = {
	firstName: "Elie"
};
var flipFn = flip(personSubtract, person);
console.log(flipFn(3, 2, 1));
var flipFn2 = flip(personSubtract, person, 5, 6);
console.log(flipFn2(7, 8));
function subtractFourNumbers(a, b, c, d) {
	return a - b - c - d;
}
console.log(flip(subtractFourNumbers, this, 1)(2, 3, 4));
console.log(flip(subtractFourNumbers, this, 1, 2)(3, 4));
console.log(flip(subtractFourNumbers, this, 1, 2, 3)(4));
console.log(flip(subtractFourNumbers, this, 1, 2, 3, 4)());
console.log(flip(subtractFourNumbers, this)(1, 2, 3, 4));
console.log(flip(subtractFourNumbers, this, 1, 2, 3)(4, 5, 6, 7));
console.log(flip(subtractFourNumbers, this)(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(
	flip(subtractFourNumbers, this, 11, 12, 13, 14, 15)(
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10
	)
);

function flip(fn, thisArgs) {
	var outerArgs = [].slice.call(arguments, 2);
	return function() {
		var innerArgs = [].slice.call(arguments);
		var allArgs = outerArgs.concat(innerArgs).slice(0, fn.length);
		return fn.apply(thisArgs, allArgs.reverse());
	};
}
