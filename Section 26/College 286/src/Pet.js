import React, { Component } from 'react';
import HobbyList from './HobbyList';

class Pet extends Component {
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

export default Pet;
