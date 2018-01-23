var width = 600;
var height = 600;
var padding = 50;

var data = regionData.filter(mustHaveKeys);

// Scales
var xScale = d3
	.scaleLinear()
	.domain(d3.extent(data, d => d.adultLiteracyRate))
	.range([padding, width - padding]);
var yScale = d3
	.scaleLinear()
	.domain(d3.extent(data, d => d.subscribersPer100))
	.range([height - padding, padding]);
var rScale = d3
	.scaleLinear()
	.domain(d3.extent(data, d => d.medianAge))
	.range([5, 30]);
var fScale = d3
	.scaleLinear()
	.domain(d3.extent(data, d => d.urbanPopulationRate))
	.range(['green', 'blue']);

// Axis
var xAxis = d3
	.axisBottom(xScale)
	.tickSize(-height + 2 * padding)
	.tickSizeOuter(0);
var yAxis = d3
	.axisLeft(yScale)
	.tickSize(-width + 2 * padding)
	.tickSizeOuter(0);

// SVG
var svg = d3
	.select('svg')
	.attr('width', width)
	.attr('height', height);

// SVG Axis
svg
	.append('g')
	.attr('transform', 'translate(0, ' + (height - padding) + ')')
	.call(xAxis);

svg
	.append('g')
	.attr('transform', 'translate(' + padding + ', 0)')
	.call(yAxis);

svg
	.append('text')
	.attr('x', width / 2)
	.attr('y', height - padding)
	.attr('dy', padding / 2)
	.attr('text-anchor', 'middle')
	.text('Literacy Rate, Aged 15 and Up');

svg
	.append('text')
	.attr('transform', 'rotate(-90)')
	.attr('x', -height / 2)
	.attr('dy', padding / 2)
	.attr('text-anchor', 'middle')
	.text('Cellular Subscribers per 100 People');

// SVG Circles
svg
	.selectAll('circle')
	.data(regionData)
	.enter()
	.append('circle')
	.attr('cx', data => xScale(data.adultLiteracyRate))
	.attr('cy', data => yScale(data.subscribersPer100))
	.attr('r', data => rScale(data.medianAge))
	.attr('fill', data => fScale(data.urbanPopulationRate))
	.style('stroke', '#ffffff');

// SVG Title
svg
	.append('text')
	.attr('x', width / 2)
	.attr('dy', '1em')
	.style('text-anchor', 'middle')
	.style('font-size', '2em')
	.text('Cellular Subscriptions vs. Literacy Rate');

function mustHaveKeys(obj) {
	var keys = [
		'subscribersPer100',
		'adultLiteracyRate',
		'medianAge',
		'urbanPopulationRate'
	];
	for (var i = 0; i < keys.length; i++) {
		if (obj[keys[i]] === null) {
			return false;
		}
		return true;
	}
}
