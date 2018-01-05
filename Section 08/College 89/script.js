$("#btn").click(function() {
	getCat();
});

function getCat() {
	$.getJSON("https://random.cat/meow")
		.done(replaceCatImage)
		.fail(handleErrors);
}

function replaceCatImage(res) {
	$("#imgCat").attr("src", res.file);
}

function handleErrors(err) {
	console.log("Eerror; not pawsible");
}

init();

function init() {
	getCat();
}
