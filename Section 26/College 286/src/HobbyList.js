import React, {Component} from 'react';


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

export default HobbyList;