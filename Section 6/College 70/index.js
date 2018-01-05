
setTimeout(function()
{
	console.log("Hello from the timeout");
}, 0);

for(var i = 0; i < 1000000000; i++)
{
	var x = i * 2;
}
console.log("Done with loop");