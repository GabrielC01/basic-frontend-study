import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

const CurrentDate = (props) => {
	return (
		<div>
			<p> The current date is: {props.date}</p>
		</div>
	);
}

class Calendar extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h3>What date is it?</h3>
				<CurrentDate date={Date()} />
			</div>
		);
	}
}

ReactDOM.render(<Calendar />, root);
