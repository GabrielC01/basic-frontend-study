import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root');

/* State and lifecycle */

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {date: new Date()};
	}
	render() {
		return (
			<div>
				<h1>Hello, user!</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
			</div>
		);
	}
}

ReactDOM.render(
	<Clock />,
	rootElement
);
