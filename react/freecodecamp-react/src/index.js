import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

const JSX = (
	<div className="myDiv">
		<h2>Welcome to React!</h2><br />
		<p>Be sure to close all tags!</p>
		<hr />
	</div>
);

ReactDOM.render(JSX, root);
