d3.select('h1').on('click', function() {
	console.log('Event listeners are sweet');
});

d3.select('h1').on('click', null);

d3.select('#new-note').on('submit', function() {
	// How do we access the event object?
	d3.event.preventDefault();

	var input = d3.select('input');
	d3
		.select('#notes')
		.append('p')
		.classed('note', true)
		.text(input.property('value'));
	input.property("value", '');
});

d3.selectAll('p').remove();