var minYear = birthData[0].year;
var maxYear = birthData[birthData.length - 1].year;
var width = 600;
var height = 600;
var numBars = 12;
var barPadding = 10;
var barwidth = width / numBars - barPadding;

d3
	.select('input')
	.property('min', minYear)
	.property('max', maxYear)
	.property('value', minYear);

d3
	.select('svg')
	.attr('width', width)
	.attr('height', height)
	.selectAll('rect')
	.data(
		birthData.filter(function(data) {
			return data.year === minYear;
		})
	)
	.enter()
	.append('rect')
	.attr('width', barwidth)
	.attr('height', function(data) {
		return data.births / 2.5e6 * height;
	})
	.attr('y', function(data) {
		return height - data.births / 2.5e6 * height;
	})
	.attr('x', function(d, idx) {
		return (barwidth + barPadding) * idx;
	})
	.attr('fill', 'purple');

d3.select('input').on('input', function() {
	var year = +d3.event.target.value;
	d3
		.selectAll('rect')
		.data(
			birthData.filter(function(data) {
				return data.year === year;
			})
		)
		.attr('height', function(data) {
			return data.births / 2.5e6 * height;
		})
		.attr('y', function(data) {
			return height-data.births / 2.5e6 * height;
		});
});
