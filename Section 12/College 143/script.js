function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

Person.prototype.sayHi = function() {
	return 'Hello ' + this.firstName + ' ' + this.lastName;
};

function Student(firstName, lastName) {
	return Person.apply(this, arguments);
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.status = function() {
	return "I'm currently a student";
};

var elie = new Person('Elie', 'Schoppik'); 
console.log(elie.status);

console.log(Student.prototype.constructor);

Student.prototype.constructor = Student;
console.log(Student.prototype.constructor);