console.log(d3);
console.log(d3.version);

console.log(d3.select('#page-title'));
console.log(d3.selectAll('li'));

console.log(d3.select('#page-title').node());
console.log(d3.selectAll('li').nodes());

console.log(
	d3
		.select('#page-title')
		.style('background-color', '#00feab')
		.style('color', '#ff0000')
		// .attr('class', 'new-class')
		// OR
		.classed('new-class', true)
		.classed('page-title', false)
		.text('D3 is cool!')
);

console.log(d3.select('#page-title').style('background-color'));
