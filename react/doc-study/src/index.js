import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root');

/* Events */

function EventType() {
	const showType = (b) => {
		alert(b.type);
		/* b represents the event that triggered the function. */
	}

	return (
		<button onClick={(event) => showType(event)}>Click Me!</button>
	);
}

ReactDOM.render(
	<EventType />,
	rootElement
);
