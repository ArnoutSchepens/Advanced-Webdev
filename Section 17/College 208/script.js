function* pauseAndReturnValues(sum) {
	for (let i = 0; i < sum; i++) {
		yield i;
	}
}
let number = 5;
var gen = pauseAndReturnValues(number);
for (let i = 0; i <= number; i++) {
	console.log(gen.next());
}
for (let val of pauseAndReturnValues(number)) {
	console.log(val);
}

function* printValues() {
	yield 'First';
	yield 'Second';
	yield 'Third';
}
var g = printValues();
console.log(g.next());
console.log(g.next());
console.log(g.next());

function* getMovieData(movieName) {
	console.log('Starting');
	yield $.getJSON(`https://omdbapi.com?t=${movieName}&apikey=thewdb`);
	console.log('Ending');
}

var movieGetter = getMovieData('titanic');
movieGetter.next().value.then(val => console.log(val));
