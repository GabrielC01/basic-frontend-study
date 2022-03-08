import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const root = document.getElementById('root');

class StatefulComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "Gabriel"
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

ReactDOM.render(<StatefulComponent />, root);
