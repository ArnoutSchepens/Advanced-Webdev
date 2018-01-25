import React, { Component } from 'react';
import RecipeList from './RecipeList';
import './RecipeApp.css';
import Navbar from './Navbar';

class RecipeApp extends Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				<RecipeList />
			</div>
		);
	}
}

export default RecipeApp;
