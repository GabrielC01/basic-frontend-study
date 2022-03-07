import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root');

/* Updating rendered elements */
// React elements are immutable, so, in order to update the UI,
// it's necessary to create new elements.

function tick() {
	const element = (
		<div>
			<h1>Hello, user!</h1>
			<h2>It is {new Date().toLocaleTimeString()}.</h2>
		</div>
	);
	ReactDOM.render(element, rootElement);
}

setInterval(tick, 1000);
