import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root');

/* React Conditionals */

function Garage(props) {
	const cars = props.cars;
	return (
		<>
			<h1>Garage</h1>
			{/* If the bolean expression is true, then the code after && is ran. */}
			{cars.length > 0 &&
			<h2>
				You have {cars.length} cars in your garage.
			</h2>
			}
		</>
	);
}

const cars = ['Ford', 'BMW', 'Audi'];

ReactDOM.render(
	<Garage cars={cars}/>,
	rootElement
);
