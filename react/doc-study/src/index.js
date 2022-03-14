import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root');

/* React Lists */

// Renderind list items without keys, thus
// there's no tracking of them.

function Car(props) {
	return <li>I am a { props.brand }</li>;
}

function Garage() {
	const cars = ['Ford', 'BMW', 'Audi'];
	return (
		<>
			<h1>Who lives in my garage?</h1>
			<ul>
				{cars.map((car) => <Car brand={car}/>)}
			</ul>
		</>
	);
}

ReactDOM.render(
	<Garage />,
	rootElement
);
