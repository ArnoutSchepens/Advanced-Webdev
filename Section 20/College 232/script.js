var quotes = [
	{
		quote: 'I see dead people.',
		movie: 'The Sixth Sense',
		year: 1999,
		rating: 'PG-13'
	},
	{
		quote: 'May the force be with you.',
		movie: 'Star Wars: Episode IV - A New Hope',
		year: 1977,
		rating: 'PG'
	},
	{
		quote:
			"You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?",
		movie: 'Dirty Harry',
		year: 1971,
		rating: 'R'
	},
	{
		quote: "You had me at 'hello.'",
		movie: 'Jerry Maguire',
		year: 1996,
		rating: 'R'
	},
	{
		quote:
			'Just keep swimming. Just keep swimming. Swimming, swimming, swimming.',
		movie: 'Finding Nemo',
		year: 2003,
		rating: 'G'
	}
];

var colours = {
	G: '#3cff00',
	PG: '#f9ff00',
	'PG-13': '#ff9000',
	R: '#ff0000'
};

d3
	.select('#quotes')
	.style('list-style', 'none')
	.selectAll('li')
	.data(quotes)
	.enter()
	.append('li')
	.text(d => '"' + d.quote + '" - ' + d.movie + ' (' + d.year + ')')
	.style('margin', '20px')
	.style('padding', '20px')
	.style('font-size', d => (d.quote.length < 25 ? '2em' : '1em'))
	.style('background-color', d => colours[d.rating])
	.style('border-radius', '8px');

console.log(quotes.pop());
console.log(d3.selectAll('li').data(quotes));
console.log(
	d3
		.selectAll('li')
		.data(quotes)
		.exit()
);
console.log(
	d3
		.selectAll('li')
		.data(quotes)
		.exit()
		.remove()
);

var nonRQuotes = quotes.filter(function(movie) {
	return movie.rating !== 'R';
});
d3
	.selectAll('li')
	.data(nonRQuotes, function(data) {
		return data.quote;
	})
	.exit()
	.remove();
