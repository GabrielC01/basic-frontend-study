import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root');

/* Events */

function greet() {
	alert('Hello');
}

class Event extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<button onClick={greet}>Click Me</button>
			</div>
		);
	}
}

ReactDOM.render(
	<Event />,
	rootElement
);
