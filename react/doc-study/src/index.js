import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root');

/* React Conditionals */

function MissedGoal() {
	return <h1>MISSED!</h1>;
}

function MadeGoal() {
	return <h1>Goal!</h1>;
}

function Goal(props) {
	const isGoal = props.isGoal;
	if (isGoal)
		return <MadeGoal />;
	return <MissedGoal />;
}

ReactDOM.render(
	<Goal isGoal="true"/>,
	rootElement
);
