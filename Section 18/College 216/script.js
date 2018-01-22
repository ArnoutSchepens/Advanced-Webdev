async function first() {
	return 'We did it!';
}
console.log(first());
first().then(val => console.log(val));

async function getMovieData() {
	console.log('Starting');
	var movieData = await $.getJSON(
		'https://omdbapi.com?t=titanic&apikey=thewdb'
	);
	console.log('All done');
	console.log(movieData);
}
getMovieData();

var movieCollector = {
	data: 'titanic',
	async getMovie() {
		var response = await $.getJSON(
			`https://omdbapi.com?t=${this.data}&apikey=thewdb`
		);
		console.log(response);
	}
};
movieCollector.getMovie();

class MovieData {
	constructor(name) {
		this.name = name;
	}

	async getMovie() {
		try {
			var response = await $.getJSON(
				`https://omdbapi.com?t=${this.data}&apikey=thewdb`
			);
			console.log(response);
		} catch (e) {
			console.log('Movie does not exist');
		}
	}
}
var m = new MovieData('shrek');
m.getMovie();

async function getUser(user) {
	try {
		var response = await $.getJSON(
			`https://api.github.com/users/${user}`
		);
		console.log(response);
	} catch (e) {
		console.log('User does not exist');
	}
}

getUser("seviran");
getUser("foo!!!");