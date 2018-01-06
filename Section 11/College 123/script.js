"use strict";

console.log(this);

var dog = "Husky";
console.log(window.dog);

var data = {};
data.cat = "Maine Coon";
console.log(data.cat);

function whatIsThis() {
	return this;
}
console.log(whatIsThis());

function variableInThis() {
	this.person = "Elie";
}
console.log(variableInThis());
console.log(person);
