var btn = document.querySelector("#btn");
var img = document.querySelector("#photo");

// Listen for clicks
btn.addEventListener("click", function() {
	// Make the request
	var XHR = new XMLHttpRequest();
	XHR.onreadystatechange = function() {
		if (XHR.readyState === 4 && XHR.status === 200) {
			var url = JSON.parse(XHR.responseText).message;
			console.log(url);
			img.src = url;
		}
	};
	XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
	XHR.send();
});
