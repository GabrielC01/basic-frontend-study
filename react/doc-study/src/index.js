import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root');

/* Create elements */

const element1 = (
	<h1 className="greeting">
		Hello, user!
	</h1>
);

const element2 = React.createElement(
	'h1',
	{className: 'greeting'},
	'Hello, user!'
);

const bundle = (
	<div>
		{element1}
		{element2}
	</div>
);

ReactDOM.render(
	bundle,
	rootElement
);
