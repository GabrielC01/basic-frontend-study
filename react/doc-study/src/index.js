import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root');

/* Nesting tags */

const element = (
	<div>
		<h1>This is a child</h1>
		<h2>This is a another child</h2>
	</div>
);


ReactDOM.render(
	element,
	rootElement
);
