function Person(name) {
	this.name = name;
}
console.log(Person.prototype);

var elie = new Person("Elie")
var colt = new Person("Colt");

console.log("elie.__proto__ === Person.prototype:", elie.__proto__ === Person.prototype);