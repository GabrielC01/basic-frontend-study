import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root');

/* State and lifecycle */

function tick() {
	ReactDOM.render(
		<Clock date={new Date()} />,
		rootElement
	);
}

class Clock extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello, user!</h1>
				<h2>It is {this.props.date.toLocaleTimeString()}.</h2>
			</div>
		);
	}
}

setInterval(tick, 1000);
