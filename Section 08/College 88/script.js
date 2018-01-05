$("#getBtn").click(function() {
	$.get("https://api.github.com/users/seviran")
		.done(function(data) {
			console.log(data);
		})
		.fail(function(err) {
			console.log("Error!");
		});
});

$("#postBtn").click(function() {
	var data = { name: "Charlie", city: "Florence" };
	$.post("https://api.github.com/users/seviran", data)
		.done(function(data) {
			console.log(data);
		})
		.fail(function(err) {
			console.log("Error!");
		});
});

$("#getJSONBtn").click(function() {
	$.getJSON("https://api.github.com/users/seviran")
		.done(function(data) {
			console.log(data);
		})
		.fail(function() {
			console.log("Problem");
		});
});
