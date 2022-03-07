import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root');

/* Components and props */

function Welcome(props) {
	return <h1>Hello, {props.name}!</h1>;
}

function App() {
	return (
		<div>
			<Welcome name="Sara" />
			<Welcome name="Cahal" />
			<Welcome name="Edite" />
		</div>
	);
}

ReactDOM.render(<App />, rootElement);

