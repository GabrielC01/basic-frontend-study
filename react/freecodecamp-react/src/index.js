import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

class MyComponent extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (<div><h1>Hello React!</h1></div>);
	}
};

ReactDOM.render(<MyComponent />, root);
