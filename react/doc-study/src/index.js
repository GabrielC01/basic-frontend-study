import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root');

function greet(user) {
	if (user) {
		return <h1>Hello, {user}!</h1>;
	} else {
		return <h1>Hello, Stranger.</h1>;
	}
}

const user = 'Gabriel';

ReactDOM.render(
	greet(user),
	rootElement
);
