var array = [1, 2, 3, 4, 5];
var arrayPure = [1, 2, 3, 4, 5];

// Non-pure function
function doubleVals(arr) {
	for (let i = 0; i < arr.length; i++) {
		arr[i] *= 2;
	}

	return arr;
}
doubleVals(array);
console.log(array);

// Pure function
function doubleValsPure(arr) {
	return arr.map(v => v * 2);
}
doubleValsPure(arrayPure);
console.log(arrayPure);

var person = { id: 53, name: 'Alex' };
var personPure = { id: 53, name: 'Alex' };
var pure = { id: 53, name: 'Alex' };
// Non-pure funtion
function addJob(job) {
	person.job = job;
}
addJob('Instructor');
console.log(person);

// Pure function
function addJobPure(job) {
	return Object.assign({}, personPure, { job });
}
pure = addJobPure('Instructor');
console.log(personPure);
console.log(pure);

var personSpreadPure = { id: 15, name: 'Jonathan' };
var pureSpread = { id: 15, name: 'Jonathan' };

function addJobPure(personObj, job) {
	return { ...personObj, job };
}

pureSpread = addJobPure(personSpreadPure, "Instructor");
console.log(personSpreadPure);
console.log(pureSpread);
