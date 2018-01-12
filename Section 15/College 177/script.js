// ES5
var instructor = {
	firstName: 'Alex',
	sayHi: function() {
		setTimeout(
			function() {
				console.log('Hello ' + this.firstName);
			}.bind(this),
			1000
		);
	}
};
instructor.sayHi();

// ES2015
var instructor2 = {
	firstName: 'John',
	sayHi: function() {
		setTimeout(() => {
			console.log('Hello ' + this.firstName);
		}, 1000);
	}
};
instructor2.sayHi();