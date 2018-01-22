var people = [
	{ name: 'Jonathan' },
	{ name: 'Aaron' },
	{ name: 'Abel' },
	{ name: 'Alex' }
];

let personName = people.find(function(person) {
	return person.name === 'Abel';
});
console.log(personName);

let personIndex = people.findIndex(function(person) {
	return person.name === 'Alex';
});
console.log(personIndex);

// ES5
console.log('awesome'.indexOf('some') > -1);
// ES2015
console.log('awesome'.includes('some'));

// ES5
var isNumberES5 = function seeIfNumber(val) {
	if (typeof val === 'number' && !isNaN(val)) {
		return 'It is a number';
	}
};
console.log(isNumberES5(65));
console.log(isNumberES5('65'));
// ES2015
var isNumberES2015 = function seeIfNumber(val) {
	if (Number.isFinite(val)) {
		return 'It is a number';
	}
};
console.log(isNumberES2015(65));
console.log(isNumberES2015('65'));
