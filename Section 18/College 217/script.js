async function getMovie1() {
	var responseOne = await $.getJSON(
		`https://omdbapi.com?t=titanic&apikey=thewdb`
	);
	var responseTwo = await $.getJSON(
		`https://omdbapi.com?t=shrek&apikey=thewdb`
	);

	console.log(responseOne);
	console.log(responseTwo);
}
getMovie1();

// Much faster
async function getMovie2() {
	var titanicPromise = $.getJSON(
		`https://omdbapi.com?t=titanic&apikey=thewdb`
	);
	var shrekPromise = $.getJSON(`https://omdbapi.com?t=shrek&apikey=thewdb`);

	var titanicData = await titanicPromise;
	var shrekData = await shrekPromise;
	console.log(titanicData);
	console.log(shrekData);
}
getMovie2();

async function getMovieData(first, second) {
	var movieList = await Promise.all([
		$.getJSON(`https://omdbapi.com?t=${first}&apikey=thewdb`),
		$.getJSON(`https://omdbapi.com?t=${second}&apikey=thewdb`)
	]);
	console.log(movieList[0].Year);
	console.log(movieList[1].Year);
}

getMovieData('shrek', 'blade');
