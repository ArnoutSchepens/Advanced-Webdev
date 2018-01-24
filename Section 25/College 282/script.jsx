class Pet extends React.Component {
	render() {
		const liStyle = { fontSize: '1.5em' };

		return (
			<div className="card">
				<h2 className="name">Moxie</h2>
				<img
					src="https://github.com/tigarcia/Moxie/raw/master/moxie.png"
					alt="Moxie, cat"
				/>
				<h5 style={{fontSize: '2em', margin: '2px'}}>Hobbies:</h5>
				<ul>
					<li style={liStyle}>Sleep</li>
					<li style={liStyle}>Eat</li>
				</ul>
			</div>
		);
	}
}

ReactDOM.render(<Pet />, document.querySelector('#app'));
