import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root');

/* Components and props */

function Welcome(props) {
	return <h1>Hello, {props.name}!</h1>;
}

// Rendering components:
const element = <Welcome name="Gabriel" />;
ReactDOM.render(element, rootElement);

// Obs: Always start component names with capital letters.
