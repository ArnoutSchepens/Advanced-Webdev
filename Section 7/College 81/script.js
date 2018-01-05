var btn = document.querySelector("button");
btn.addEventListener("click", function() {
	var url = "https://api.github.com/users/seviran";
	fetch(url)
		.then(handleErrors)
		.then(function(request) {
			console.log("Everything is fine");
			console.log(request);
		})
		.catch(function(error) {
			console.log("There is a problem");
			console.log(error);
		});
});

function handleErrors(request) {
	if (!request.ok) {
		throw Error(request.status);
	}
	return request;
}
