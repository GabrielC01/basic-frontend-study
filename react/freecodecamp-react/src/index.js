import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

const JSX = (
	<div>
		<h1>Hello, user!</h1>
		<p>This is an exercise from FreeCodeCamp's Front End Development Libraries.</p>
		<ul>
			<li>Element</li>
			<li>Element</li>
			<li>Element</li>
		</ul>
	</div>
);

ReactDOM.render(JSX, root);
