function displayAtRandomTime() {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			if (Math.random() > 0.5) {
				resolve('Yes');
			} else {
				reject('No');
			}
		}, 1000);
	});
}

displayAtRandomTime()
	.then(function(value) {
		console.log(value);
	})
	.catch(function(error) {
		console.log(error);
	});

var years = [];
$.getJSON('https://omdbapi.com?t=titanic&apikey=thewdb')
	.then(function(movie) {
		years.push(movie.Year);
		console.log(years);
		return $.getJSON('https://omdbapi.com?t=shrek&apikey=thewdb');
    })
    .then(function(movie){
        years.push(movie.Year);
        console.log(years);
    })
	.catch(function(error) {
		console.log(error);
    });
console.log("ALL DONE!");
