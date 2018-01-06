function House(bedrooms, bathroom, numSqft) {
	this.bedrooms = bedrooms;
	this.bathroom = bathroom;
	this.numSqft = numSqft;
}
var firstHouse = new House(2, 2, 1000);
console.log(firstHouse.bedrooms);
console.log(firstHouse.bathroom);
console.log(firstHouse.numSqft);

function Dog(name, age) {
	this.name = name;
	this.age = age;
	this.bark = function() {
		console.log(this.name + " just barked");
	};
}
var rusty = new Dog("Rusty", 3);
var fido = new Dog("Fido", 1);
rusty.bark();
fido.bark();
