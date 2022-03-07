import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root');

/* State and lifecycle */

function Clock(props) {
	return (
		<div>
			<h1>Hello, user!</h1>
			<h2>It is {props.date.toLocaleTimeString()}.</h2>
		</div>
	);
}

function tick() {
	ReactDOM.render(
		<Clock date={new Date()} />,
		rootElement
	);
}

setInterval(tick, 1000);
