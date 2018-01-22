/*
	1. Write a function called hasMostFollowers, which accepts a variable number of arguments. You should then make an AJAX call 
	to the Github User API (https://developer.github.com/v3/users/#get-a-single-user) to get the name and number of followers of each argument. 
	The function should return a string which displays the username who has the most followers. 
	Hint - Try to use Promise.all to solve this and remember that the jQuery AJAX methods ($.getJSON, $.ajax, etc.) return a promise.

	2. Write a function called starWarsString, which accepts a number. You should then make an AJAX call to the Star Wars API 
	(https://swapi.co/ ) to search for a specific character by the number passed to the function. Your function should return 
	a promise that when resolved will console.log the name of the character. 

	Bonus 1 -  Using the data from the previous AJAX call above, make another AJAX request to get the first film that character 
	is featured in and return a promise that when resolved will console.log the name of the character and the film they are featured in  

	Bonus 2 -  Using the data from Bonus 1 - make another AJAX call to get the information about the first planet that the film contains. 
	Your function should return a promise that when resolved will console.log the name of the character and the film they are 
	featured in and the name of the planet.  
*/

function hasMostFollowers(...usernames) {
	let baseUrl = 'https://api.github.com/users/';
	let urls = usernames.map(username => $.getJSON(baseUrl + username));
	return Promise.all(urls).then(function(data) {
		let max = data.sort((a, b) => a.followers < b.followers)[0];
		return `${max.name} has the most followers with ${max.followers}`;
	});
}
hasMostFollowers('ellie', 'tigarcia', 'colt').then(function(data) {
	console.log(data);
});

function starWarsString(id) {
	var str = '';
	return $.getJSON(`https://swapi.co/api/people/${id}`)
		.then(function(data) {
			str += `${data.name} is featured in `;
			var filmData = data.films[0];
			return $.getJSON(filmData);
		})
		.then(function(res) {
			str += `${res.title}, directed by ${res.director} `;
			let planetData = res.planets[0];
			return $.getJSON(planetData);
		})
		.then(function(res) {
			str += `and it takes place on ${res.name}`;
			return str;
		})
		.then(function(finalResult) {
			return finalResult;
		})
		.catch(function(err) {
			console.log(err);
		});
}
starWarsString(1).then(function(data) {
	console.log(data);
});
