import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const root = document.getElementById('root');

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Welcome name="user" />
			</div>
		);
	}
}

class Welcome extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<p>Hello, <strong>{this.props.name}</strong>!</p>
			</div>
		);
	}
}

ReactDOM.render(<App />, root);
