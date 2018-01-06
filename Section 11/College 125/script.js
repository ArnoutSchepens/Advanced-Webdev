var person1 = {
	firstName: "Elie",
	sayHi: function() {
		return "Hi", this.firstName;
	},
	determineContext: function() {
		return this === person1;
	},
	context: this
};
console.log(person1.sayHi());
console.log(person1.determineContext());

var person2 = {
	firstName: "Elie",
	context: this
};
console.log(person2.context);

var person3 = {
	firstName: "Colt",
	sayHi: function() {
		return "Hi", this.firstName;
	},
	determineContext: function() {
		return this === person3;
	},
	dogs: {
		sayHello: function() {
			return "Hello " + this.firstName;
		},
		determineContext: function() {
			return this === person3;
		}
	}
};
console.log(person3.determineContext());
console.log(person3.dogs.sayHello());
console.log(person3.dogs.determineContext());
