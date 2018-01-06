function Person(firstName, lastName, favoriteColor, favoriteNumber) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.favoriteColor = favoriteColor;
	this.favoriteNumber = favoriteNumber;
	this.multiplyFavoriteNumber = function(multiply) {
		return this.favoriteNumber * multiply;
	};
}

function Parent(firstName, lastName, favoriteColor, favoriteFood) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.favoriteColor = favoriteColor;
	this.favoriteFood = favoriteFood;
}

function Child(firstName, lastName, favoriteColor, favoriteFood) {
	Parent.apply(this, arguments);
}

var child = new Child("Abel", "Collin", "Green", "Spaghetti");
console.log(child.favoriteFood);
