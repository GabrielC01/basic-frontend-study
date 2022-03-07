import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root');

const name = 'Gabriel';
const newElement = <h1>Hello, {name}!</h1> // JSX can contain JS expressions

ReactDOM.render(
	newElement,
	rootElement
);
