var person = {
	firstName: "Colt",
	sayHi: function() {
		return "Hi", this.firstName;
	},
	determineContext: function() {
		return this === person;
	},
	dogs: {
		sayHello: function() {
			return "Hello " + this.firstName;
		},
		determineContext: function() {
			return this === person;
		}
	}
};
console.log(person.dogs.sayHello.call(person));
console.log(person.dogs.determineContext.call(person));

function sayHi() {
	return "Hi", this.firstName;
}
var person1 = {
	firstName: "Abel"
};
var person2 = {
	firstName: "Alex"
};
console.log(sayHi.call(person1));
console.log(sayHi.call(person2));

var divs = document.querySelectorAll("div");
var divsArray = [].slice.call(divs);
var filteredDivs = divsArray.filter(function(val) {
	return val.innerText === "Hello";
});

console.log(filteredDivs);
