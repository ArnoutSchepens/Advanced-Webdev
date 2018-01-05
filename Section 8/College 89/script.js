$("#btn").click(function() {
	getCat();
});

function getCat() {
	$.getJSON("https://random.cat/meow")
		.done(replaceCatImage)
		.fail(function() {
			console.log("ERROR");
		});
}

function replaceCatImage(res) {
	$("#imgCat").attr("src", res.file);
}

init();

function init() {
	getCat();
}
