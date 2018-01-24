class Pet extends React.Component {
	render() {
		const h2 = ReactDOMFactories.h2(null, 'Moxie');
		const img = ReactDOMFactories.img({
			src: 'https://github.com/tigarcia/Moxie/raw/master/moxie.png',
			alt: 'Moxie, cat'
		});

		return ReactDOMFactories.div(null, h2, img);
	}
}

ReactDOM.render(React.createElement(Pet), document.querySelector('#app'));
