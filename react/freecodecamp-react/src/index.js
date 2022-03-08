import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

const JSX = (
	<div>
		<h1>Hello, user!</h1>
		<p>Lets render this to the DOM.</p>
	</div>
);

ReactDOM.render(JSX, root);
