import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

const Items = (props) => {
	return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

Items.defaultProps = {
	quantity: 0
};

class ShoppingCart extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <Items quantity={10} />
	}
}

ReactDOM.render(<ShoppingCart />, root);
