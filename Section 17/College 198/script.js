class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	sayHello() {
		return `Hello ${this.firstName} ${this.lastName}`;
	}
}

class Student extends Person {}

console.log(Student.prototype.constructor === Student);