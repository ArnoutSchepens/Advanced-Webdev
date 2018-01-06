function sayHi() {
	return "Hi " + this.firstName;
}

function addNumbers(a, b, c, d) {
	return this.firstName + " just calculated " + (a + b + c + d);
}

var person1 = {
	firstName: "Abel"
};

var person2 = {
	firstName: "Alex"
};

console.log(sayHi.call(person1));
console.log(sayHi.apply(person2));

console.log(addNumbers.call(person1, 1, 2, 3, 4));
console.log(addNumbers.apply(person2, [1, 2, 3, 4]));

var nums = [5, 7, 1, 4, 2];
console.log(Math.max(nums));
console.log(Math.max.apply(this, nums));

function sumValues(a, b, c) {
	return a + b + c;
}
var values = [4, 1, 2];
console.log(sumValues(values));
console.log(sumValues.apply(this, values));
