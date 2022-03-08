import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const root = document.getElementById('root');

class CampSite extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Camper />
			</div>
		);
	}
}

class Camper extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <p>{this.props.name}</p>
	}
}

Camper.propTypes = {
	name: PropTypes.string.isRequired
};

Camper.defaultProps = {
	name: 'CamperBot'
};

ReactDOM.render(<CampSite />, root);
