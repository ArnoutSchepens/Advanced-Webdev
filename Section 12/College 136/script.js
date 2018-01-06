function Vehicle(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
}

function Car(make, model, year) {
	Vehicle.apply(this, arguments);
	this.numWheels = 4;
}

function Motorcycle(make, model, year) {
	// Car.call(this, make, model, year);
	Vehicle.apply(this, arguments);
	this.numWheels = 2;
	// delete this.make;
}

var motorcycle = new Motorcycle(1, 2, 3);
console.log(motorcycle.make);
var car = new Car(4, 5, 6);
console.log(car.model);
