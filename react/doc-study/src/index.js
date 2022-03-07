import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root');

/* Components and props */

// Function component:
function Welcome(props) {
	return <h1>Hello, {props.name}!</h1>;
}

// Class component:
class Welcome extends React.Component {
	render() {
		return <h1>Hello, {props.name}!</h1>;
	}
}
