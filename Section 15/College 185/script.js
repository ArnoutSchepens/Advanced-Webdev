// ES5
var instructor = {
	firstName: 'Alex',
	lastName: 'Smith'
};
var firstNameES5 = instructor.firstName;
var lastNameES5 = instructor.lastName;
console.log(firstNameES5);
console.log(lastNameES5);

// ES2015
var { firstName: firstNameES2015, lastName: lastNameES2015 } = instructor;
console.log(firstNameES2015);
console.log(lastNameES2015);

// ES5
function createInstructorES5(options) {
	var option = options || {};
	var name = option.name || { first: 'Matt', last: 'Lane' };
	var isHilarious = option.isHilarious || false;
	return [name.first, name.last, isHilarious];
}

console.log(createInstructorES5());
console.log(createInstructorES5({ isHilarious: true }));
console.log(createInstructorES5({ name: { first: 'Abe', last: 'Garcia' } }));

// ES2015
function createInstructorES2015({
	name = { first: 'Matt', last: 'Lane' },
	isHilarious = false
} = {}) {
	return [name.first, name.last, isHilarious];
}
console.log(createInstructorES2015());
console.log(createInstructorES2015({ isHilarious: true }));
console.log(createInstructorES2015({ name: { first: 'Abe', last: 'Garcia' } }));

// ES5
function displayInfoES5(obj) {
	return [obj.name, obj.favColor];
}
var instructorES5 = {
	name: 'Abe',
	favColor: 'Purple'
};
console.log(displayInfoES5(instructorES5));

// ES2015
function displayInfoES2015({ name, favColor }) {
	return [name, favColor];
}

var instructorES2015 = {
	name: 'John',
	favColor: 'Blue'
};
console.log(displayInfoES2015(instructorES2015));