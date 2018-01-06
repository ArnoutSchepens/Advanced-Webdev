var person = {
	firsName: "Abel",
	sayHi: function() {
		setTimeout(
			function() {
				console.log("Hi", this.firsName);
			}.bind(this),
			1000
		);
	}
};

person.sayHi();
