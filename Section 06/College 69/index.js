
function countDown(seconds) {
	var intervalId = setInterval(function() {
		seconds--;
		if (seconds > 0) {
			console.log("Timer: " + seconds);
		} else {
			console.log("Ring Ring Ring!!!");
			clearInterval(intervalId);
		}
	}, 1000);
}
countDown(5);
