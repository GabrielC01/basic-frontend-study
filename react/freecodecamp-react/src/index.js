import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visibility: false
		};
		this.setState(state => ({
			visibility: false
		}));
	}

	toggleVisibility() {
		if (this.state.visibility) {
			this.state.visibility = false;
		} else {
			this.state.visibility = true;
		}
	}

	render() {
		if (this.state.visibility) {
			return (
				<div>
					<button onClick={this.toggleVisibility}>Click Me</button>					
					<h1>Now you see me!</h1>
				</div>
			);
		} else {
			return (
				<div>
					<button onClick={this.toggleVisibility}>Click Me</button>
				</div>
			);
		}
	}
}

ReactDOM.render(<MyComponent />, root);
