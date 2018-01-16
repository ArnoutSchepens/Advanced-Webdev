class Student {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	sayHi() {
		return `Hello ${this.firstName} ${this.lastName}`;
	}

	static isStudent(obj) {
		return obj.constructor === Student;
	}
}

var alex = new Student('Alex', 'Smith');
console.log(Student.isStudent(alex));