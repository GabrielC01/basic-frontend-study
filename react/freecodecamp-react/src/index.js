import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

const MyComponent = function () {
	return (<div> <h2>This is a component.</h2> </div>);
};

ReactDOM.render(<MyComponent />, root);
