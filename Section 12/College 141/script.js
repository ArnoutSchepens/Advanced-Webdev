function Vehicle(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
	isRunning = false;
}

Vehicle.prototype.turnOn = function() {
	this.isRunning = true;
};

Vehicle.prototype.turnOff = function() {
	this.isRunning = false;
};

Vehicle.prototype.honk = function() {
	if (this.isRunning) {
		return "Beep!";
	}
};

var vehicle = new Vehicle("Kever", "Volkswagen", 1985);
console.log(vehicle.honk());
console.log(vehicle.turnOn());
console.log(vehicle.honk());
console.log(vehicle.turnOff());
console.log(vehicle.honk());
