var url = "https://randomuser.me/api/";
var btn = document.querySelector("#btn");
var avatar = document.querySelector("#avatar");
var fullname = document.querySelector("#fullname");
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var city = document.querySelector("#city");

btn.addEventListener("click", function() {
	fetch(url)
		.then(handleErrors)
		.then(parseJSON)
		.then(updateProfile)
		.catch(printError);
});

function handleErrors(req) {
	if (!req.ok) {
		throw Error(req.status);
	}
	return req;
}

function parseJSON(req) {
	return req.json();
}

function updateProfile(req) {
	var person = req.results[0];
	avatar.src = person.picture.medium;
	fullname.innerText = capitalizeFirstLetter(
		person.name.first + " " + person.name.last
	);
	username.innerText = person.login.username;
	email.innerText = person.email;
	city.innerText = capitalizeFirstLetter(person.location.city);
	return req;
}

function printError(err) {
	console.log("Something went wrong:", err);
}

function capitalizeFirstLetter(word) {
	return word.replace(/\w\S*/g, function(word) {
		return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
	});
}
