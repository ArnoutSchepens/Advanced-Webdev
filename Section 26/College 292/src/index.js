import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import RecipeApp from './RecipeApp';

ReactDOM.render(<RecipeApp />, document.getElementById('root'));
registerServiceWorker();
