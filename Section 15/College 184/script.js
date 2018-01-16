var firstName = 'Alex';
var lastName = 'Smith';

// ES5
var instructorES5 = {
	firstName: firstName,
	lastName: lastName,
	SayHello: function() {
		return 'Hello!';
	}
};

// ES2015
var instructorES2015 = {
	firstName,
	lastName,
	sayHello() {
		return 'Hello!';
	}
};

// ES5
var instructorES5 = {};
instructorES5[firstName] = "That's me!";
console.log(instructorES5.Alex);

// ES2015
var instructorES2015 = {
    [firstName]: "That's me!"
};
console.log(instructorES2015.Alex);