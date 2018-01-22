d3.select('form').on('submit', function() {
	d3.event.preventDefault();
	var input = d3.select('input');
	var text = input.property('value');

	var letters = d3
		.select('#letters')
		.selectAll('.letter')
		.data(getFrequencies(text), function(data) {
			return data.character;
		});

	letters
		.classed('new', false)
		.exit()
		.remove();

	letters
		.enter()
		.append('div')
		.classed('letter', true)
		.classed('new', true)
		.merge(letters)
		.style('width', '20px')
		.style('line-height', '20px')
		.style('margin-right', '5px')
		.style('height', function(data) {
			return data.count * 20 + 'px';
		})
		.text(function(data) {
			return data.character;
		});

	d3.select('#phrase').text('Analysis of: ' + text);

	d3
		.select('#count')
		.text('(New characters: ' + letters.enter().nodes().length + ')');

	input.property('value', '');
});

d3.select('#reset').on('click', function() {
	d3.select('input').property('value', '');
	d3.select('#phrase').text('');
	d3.select('#count').text('');
	d3.select('#letters').text('');
});

function getFrequencies(string) {
	var sorted = string
		.toLowerCase()
		.split('')
		.sort();
	var data = [];

	for (let i = 0; i < sorted.length; i++) {
		var last = data[data.length - 1];
		if (last && last.character === sorted[i]) {
			last.count++;
		} else {
			data.push({ character: sorted[i], count: 1 });
		}
	}
	return data;
}

getFrequencies('Hello World!');
