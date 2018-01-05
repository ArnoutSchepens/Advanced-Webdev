var p1 = new Promise(function(resolve, reject) {
	resolve([1, 2, 3, 4]);
});

p1
	.then(function(arr) {
		console.log("Promise p1 resolved with data: ", data);
	})
	.catch(function(data) {
		console.log("Promise p1 was rejected with data: ", data);
	});

var p2 = new Promise(function(resolve, reject) {
	var num = Math.random();
	if (num < 0.5) {
		resolve(num);
	} else {
		reject(num);
	}
});

p2
	.then(function(result) {
		console.log("P2: Succes: " + result);
	})
	.catch(function(error) {
		console.log("P2: Error: " + error);
	});

var promise = new Promise(function(resolve, reject) {
	setTimeout(function() {
		var randomInt = Math.floor(Math.random() * 10);
		resolve(randomInt);
	}, 4000);
});

promise.then(function(data) {
	console.log("Random int passed to resolve: ", data);
});
