import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

const ShoppingCart = (props) => {
	return (
		<div>
			<h1>Shopping Cart Component</h1>
		</div>
	);
}

ShoppingCart.defaultProps = {
	items: 0
};

ReactDOM.render(<ShoppingCart />, root);
