import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root');

/* Events */

function Greet() {
	const greet = (a) => {
		alert(a);
	}

	return (
		<button onClick={() => greet("Hello!")}>Click Me!</button>
	);
}

ReactDOM.render(
	<Greet />,
	rootElement
);
