// setTimeout
var timerId = setTimeout(function() {
	console.log("This function runs in 30 seconds");
}, 30000);

setTimeout(function()
{
	console.log("Canceling the first setTimeout", timerId);
	clearTimeout(timerId);
}, 2000);

// setInterval
var num = 0;
var intervalId = setInterval(function()
{
	num++;
	console.log("num:", num);
	if(num === 5)
	{
		clearInterval(intervalId);
	}
}, 1000);

