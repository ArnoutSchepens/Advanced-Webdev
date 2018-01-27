import React, { Component } from 'react';
import './App.css';
import { PropTypes } from 'prop-types';

const InstructorItem = props => {
	return (
		<li>
			<h3>{props.name}</h3>
			<h4>Hobbies: {props.hobbies.join(', ')}</h4>
		</li>
	);
};
InstructorItem.propTypes = {
	name: PropTypes.string,
	hobbies: PropTypes.arrayOf(PropTypes.string)
};


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			instructors: [
				{
					name: 'Aaron',
					hobbies: ['Sailing', 'React']
				},
				{
					name: 'Alex',
					hobbies: ['Math', 'D3']
				},
				{
					name: 'Jonathan',
					hobbies: ['Css', 'Hiking']
				},
				{
					name: 'Abel',
					hobbies: ['Music', 'ES2015']
				}
			]
		};

		setTimeout(() => {
			const randInstructor = Math.floor(
				Math.random() * this.state.instructors.length
			);

			const randHobby = Math.floor(
				Math.random() *
					this.state.instructors[randInstructor].hobbies.length
			);

			const instructors = this.state.instructors.map(
				(instructor, idx) => {
					if (idx === randInstructor) {
						const hobbies = [...instructor.hobbies];
						console.log(hobbies);
						hobbies.splice(randHobby, 1);
						return {
							...instructor,
							hobbies: hobbies
						};
					}
					return instructor;
				}
			);

			this.setState({ instructors });
		}, 1000);
	}
	render() {
		const instructors = this.state.instructors.map((instructor, idx) => (
			<InstructorItem 
			key={idx}
			name={instructor.name}
			hobbies={instructor.hobbies}
			/>
		));
		return (
			<div className="App">
				<ul>{instructors}</ul>
			</div>
		);
	}
}

export default App;
