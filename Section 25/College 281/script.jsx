class Pet extends React.Component {
	render() {
		return (
			<div>
				<h2>Moxie</h2>
				<img
					src="https://github.com/tigarcia/Moxie/raw/master/moxie.png"
					alt="Moxie, cat"
				/>
			</div>
		);
	}
}

ReactDOM.render(<Pet />, document.querySelector('#app'));
