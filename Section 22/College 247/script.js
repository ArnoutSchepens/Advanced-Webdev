var minYear = d3.min(birthData, function(data) {
	return data.year;
});
var maxYear = d3.max(birthData, function(data) {
	return data.year;
});
var width = 600;
var height = 600;
var barPadding = 10;
var numBars = 12;
var barWidth = width / numBars - barPadding;
var maxBirths = d3.max(birthData, function(data) {
	return data.births;
});
var yScale = d3
	.scaleLinear()
	.domain([0, maxBirths])
	.range([height, 0]);

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
		birthData.filter(function(d) {
			return d.year === minYear;
		})
	)
	.enter()
	.append('rect')
	.attr('width', barWidth)
	.attr('height', function(data) {
		return height - yScale(data.births);
	})
	.attr('y', function(data) {
		return yScale(data.births);
	})
	.attr('x', function(d, i) {
		return (barWidth + barPadding) * i;
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
			return height - yScale(data.births);
		})
		.attr('y', function(data) {
			return yScale(data.births);
		});
});
