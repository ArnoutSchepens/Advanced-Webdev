class Student {

	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	sayHi()
	{
		return `Hello ${this.firstName} ${this.lastName}`;
	}
}

var alex = new Student('Alex', 'Smith');
console.log(alex.firstName);
console.log(alex.lastName);
console.log(alex.sayHi());
console.log(alex);