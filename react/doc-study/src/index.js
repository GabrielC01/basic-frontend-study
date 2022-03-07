import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root');


function formatUser(user) {
	return user.firstName + ' ' + user.lastName;
}

const user = {
	firstName: 'Gabriel',
	lastName: 'Chaves'
};

const element = (
	<h1>
		Hello, {formatUser(user)}!
	</h1>
);

ReactDOM.render(
	element,
	rootElement
);
