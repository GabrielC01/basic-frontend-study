import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const root = document.getElementById('root');

class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'freeCodeCamp'
		}
	}
	render() {
		return (
			<div>
				<h1>{this.state.name}</h1>
			</div>
		);
	}
}

ReactDOM.render(<MyComponent />, root);
