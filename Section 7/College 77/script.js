var btn = document.querySelector("button");
var price = document.querySelector("#price");
var XHR = new XMLHttpRequest();

var currency = "EUR";

document.querySelector("#currency").innerHTML = currency;

btn.addEventListener("click", function() {
	setXHR();

	XHR.onreadystatechange = function() {
		if (XHR.readyState === 4 && XHR.status === 200) {
			price.innerHTML = JSON.parse(XHR.responseText).bpi[currency].rate;
		}
	};
});

var intervalId = setInterval(function() {
	setXHR();

	XHR.onreadystatechange = function() {
		if (XHR.readyState === 4 && XHR.status === 200) {
			price.innerHTML = JSON.parse(XHR.responseText).bpi[currency].rate;
		}
	};
}, 5000);

window.onload = function() {
	setXHR();

	XHR.onreadystatechange = function() {
		if (XHR.readyState === 4 && XHR.status === 200) {
			price.innerHTML = JSON.parse(XHR.responseText).bpi[currency].rate;
		}
	};
};

function setXHR()
{
	this.XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
	this.XHR.send();
}