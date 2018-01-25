import React, { Component } from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css';

class RecipeList extends Component {
	static defaultProps = {
		recipes: [
			{
				title: 'Spaghetti',
				instructions:
					'Open jar of Spaghetti sauce. Bring to simmer. Boil water. Cook pasta until done. Combine pasta and sauce',
				ingredients: ['Pasta', '8 cups of water', '1 box spaghetti'],
				img: 'spaghetti.jpeg'
			},
			{
				title: 'Milkshake',
				instructions: 'Combine ice cream and milk. Blend until creamy',
				ingredients: ['2 scoops of ice cream', '8 ounces milk'],
				img: 'milkshake.jpeg'
			},
			{
				title: 'Avocado Toast',
				instructions:
					'Toast bread. Slice avocado and spread on bread. Add salt, oil, and pepper to tast',
				ingredients: [
					'2 slices of bread',
					'1 avocado',
					'1 tablespoon of olive oil',
					'1 pinch of salt',
					'Peper'
				],
				img: 'avocado_toast.jpeg'
			}
		]
	};

	static propTypes = {
		recipes: PropTypes.arrayOf(PropTypes.object).isRequired
	};

	render() {
		const recipes = this.props.recipes.map((recipe, idx) => {
			return <Recipe key={idx} {...recipe} />;
		});
		return <div className="recipe-list">{recipes}</div>;
	}
}

export default RecipeList;
