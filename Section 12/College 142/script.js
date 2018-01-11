function Person(firstName, lastName, favoriteColor, favoriteNumber) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.favoriteColor = favoriteColor;
	this.favoriteNumber = favoriteNumber;
	this.family = [];
}

Person.prototype.fullName = function() {
	return this.firstName + ' ' + this.lastName;
};

Person.prototype.addToFamily = function(familyMember) {
	if (familyMember instanceof Person && !this.family.includes(familyMember)) {
		this.family.push(familyMember);
	}
	return this.family.length;
};

var person = new Person('Elie', 'Schoppik', 'purple', 34);
console.log(person.fullName()); // "Elie Schoppik"

var anotherPerson = new Person();
console.log(person.addToFamily(anotherPerson));
console.log(person.addToFamily(anotherPerson));
console.log(person.family.length); // 1

console.log(person.addToFamily('test')); // 1
console.log(person.addToFamily({})); // 1
console.log(person.addToFamily([])); // 1
console.log(person.addToFamily(false)); // 1
console.log(person.family.length); // 1

Array.prototype.map = function(callback) {
	var newArr = [];
	for (var i = 0; i < this.length; i++) {
		newArr.push(callback(this[i], i, this));
	}
	return newArr;
};

String.prototype.reverse = function() {
	var newStr = '';
	for (var i = this.length - 1; i >= 0; i--) {
		newStr += this[i];
	}
	return newStr;
};
