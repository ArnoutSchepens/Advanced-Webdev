var person = { first: 'Alex', last: 'Smith', sex: 'Male', numsSiblings: 2 };
var { first, last, ...data } = person;
console.log(first);
console.log(last);
console.log(data);

var person2 = { ...person, first: 'Aaron' };

var defaults = { job: 'Admin', ownsCat: false, ownsDog: false };
var aaron = { ...defaults, ownsCat: true };
var alex = { ...defaults, ownsDog: true };
