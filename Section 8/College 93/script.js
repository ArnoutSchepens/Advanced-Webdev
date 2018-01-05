var url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
var quote = document.querySelector("#quote");

function handleErrors(err) {
	console.log("Something went wrong:", err);
}

// XHR
var btnXHR = document.querySelector("#xhr");
btnXHR.addEventListener("click", function() {
	var XHR = new XMLHttpRequest();
	XHR.onreadystatechange = function() {
		if (XHR.readyState === 4 && XHR.status === 200) {
			quote.innerHTML = JSON.parse(XHR.responseText)[0];
		}
	};

	XHR.open("GET", url);
	XHR.send();
});
// Fetch
var btnFetch = document.querySelector("#fetch");
btnFetch.addEventListener("click", function() {
	fetch(url)
		.then(function(res) {
			return res.json();
		})
		.then(function(data) {
			quote.innerHTML = data[0];
		})
		.catch(handleErrors);
});

// jQuery
$("#jquery").click(function() {
	$.get(url)
		.done(function(res) {
			quote.innerHTML = res[0];
		})
		.fail(handleErrors);
});

// Axios
var btnAxios = document.querySelector("#axios");
btnAxios.addEventListener("click", function() {
	axios
		.get(url)
		.then(function(res) {
			quote.innerHTML = res.data[0];
		})
		.catch(handleErrors);
});
