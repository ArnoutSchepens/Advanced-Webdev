class HobbyList extends React.Component {
	render() {
		// Style variables
		const liStyle = { fontSize: '1.5em' };

		// li-variables
		const hobbies = ['Sleeping', 'Eating', 'Cuddling'];

		return (
			<ul>
				{hobbies.map((hobby, idx) => {
					return (
						<li key={idx} style={liStyle}>
							{hobby}
						</li>
					);
				})}
			</ul>
		);
	}
}

class Pet extends React.Component {
	render() {
		// Style variables
		const liStyle = { fontSize: '1.5em' };

		return (
			<div className="card">
				<h2 className="name">Moxie</h2>
				<img
					src="https://github.com/tigarcia/Moxie/raw/master/moxie.png"
					alt="Moxie, cat"
				/>
				<h5 style={{ fontSize: '2em', margin: '2px' }}>Hobbies:</h5>
				<HobbyList />
			</div>
		);
	}
}

ReactDOM.render(<Pet />, document.querySelector('#app'));
