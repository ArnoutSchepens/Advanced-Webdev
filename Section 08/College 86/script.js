$("#btn").click(function() {
	$.ajax({
		method: "GET",
		url: "https://baconipsum.com/api/?type=meat-and-filler",
		dataType: "json"
	})
		.done(addText)
		.fail(showError);
});

function addText(data) {
	$("#text").text(data[0]);
}

function showError(err) {
	alert("Something went wrong");
}
