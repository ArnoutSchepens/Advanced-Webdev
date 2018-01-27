import React, { Component } from 'react';
import './App.css';

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

			const instructors = this.state.instructors.map((instructor, idx) => {
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
      });
      
      this.setState({instructors});
		}, 1000);
	}
	render() {
		const instructors = this.state.instructors.map((instructor, idx) => (
			<li key={idx}>
				<h3>{instructor.name}</h3>
				<h4>Hobbies: {instructor.hobbies.join(', ')}</h4>
			</li>
		));
		return (
			<div className="App">
				<ul>{instructors}</ul>
			</div>
		);
	}
}

export default App;
