// SVG variables
var width = 500;
var height = 500;
var padding = 40;

// Y-axis variables
var yMax = d3.max(birthData2011, d => d.lifeExpectancy);
var yMin = d3.min(birthData2011, d => d.lifeExpectancy);
var yMinMax = d3.extent(birthData2011, d => d.lifeExpectancy);

// Y-scale variable, scales yMin to height, which is the bottom of the SVG,
//    scales yMax to 0, which is the top of the SVG
// d3.extent() returns min and max in an array, which replaces yMin and yMax
var yScale = d3
	.scaleLinear()
	.domain(yMinMax)
	.range([height - padding, padding]);
var yAxis = d3
	.axisLeft(yScale)
	.tickSize(-width + 2 * padding)
	.tickSizeOuter(0);

// X-axis variable
var xMinMax = d3.extent(birthData2011, d => d.births / d.population);

// X-scale variable
var xScale = d3
	.scaleLinear()
	.domain(xMinMax)
	.range([padding, width - padding]);
var xAxis = d3
	.axisBottom(xScale)
	.tickSize(-height + 2 * padding)
	.tickSizeOuter(0);

// Map density to colours
var density = d3.extent(birthData2011, d => d.population / d.area);
var colorScale = d3
	.scaleLinear()
	.domain(density)
	.range(['lightgreen', 'black']);

// Radius
var births = d3.extent(birthData2011, d => d.births);
var radiusScale = d3
	.scaleLinear()
	.domain(births)
	.range([2, 40]);

// SVG Y-axis
d3
	.select('svg')
	.append('g')
	.attr('transform', 'translate(' + padding + ',0)')
	.call(yAxis);

// SVG X-axis
d3
	.select('svg')
	.append('g')
	.attr('transform', 'translate(0,' + (height - padding) + ')')
	.call(xAxis);

// SVG circles
d3
	.select('svg')
	.attr('width', width)
	.attr('height', height)
	.selectAll('circle')
	.data(birthData2011)
	.enter()
	.append('circle')
	.attr('cx', d => xScale(d.births / d.population))
	.attr('cy', d => yScale(d.lifeExpectancy))
	.attr('r', d => radiusScale(d.births))
	.attr('fill', d => colorScale(d.population / d.area));

d3
	.select('svg')
	.append('text')
	.attr('x', width / 2)
	.attr('y', height - padding)
	.attr('dy', '1.5em')
	.style('text-anchor', 'middle')
	.text('Births per Capita');

d3
	.select('svg')
	.append('text')
	.attr('x', width / 2)
	.attr('y', padding)
	.style('text-anchor', 'middle')
	.style('font-size', '1.5em')
	.text('Births per Capita');

d3
	.select('svg')
	.append('text')
	.attr('transform', 'rotate(-90)')
	.attr('x', -height / 2)
	.attr('y', padding)
	.attr('dy', '-1.4em')
	.style('text-anchor', 'middle')
	.text('Life Expectancy');
