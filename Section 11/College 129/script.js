function addNumbers(a, b, c, d) {
	return this.firstName + " just calculated " + (a + b + c + d);
}

var person = {
	firstName: "Abel"
};

var personCalc1 = addNumbers.bind(person, 1, 2, 3, 4);
console.log(personCalc1);
console.log(personCalc1());

var personCalc2 = addNumbers.bind(person, 5, 6);
console.log(personCalc2);
console.log(personCalc2(7, 8));

setTimeout(function() {
	console.log("Hello World!");
}, 20000);
