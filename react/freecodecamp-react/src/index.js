import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

class NonCitrus extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h3>Non-Citrus:</h3>
				<ul>
					<li>Apples</li>
					<li>Blueberries</li>
					<li>Strawberries</li>
					<li>Bananas</li>
				</ul>
			</div>
		);
	}
}

class Citrus extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h3>Citrus:</h3>
				<ul>
					<li>Lemon</li>
					<li>Lime</li>
					<li>Orange</li>
					<li>Grapefruit</li>
				</ul>
			</div>
		);
	}
}

class Fruits extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h2>Fruits:</h2>
				<NonCitrus />
				<Citrus />
			</div>
		);
	}
}

class Vegetables extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h2>Vegetables</h2>
				<ul>
					<li>Brussel Sprouts</li>
					<li>Broccoli</li>
					<li>Squash</li>
				</ul>
			</div>
		);
	}
}

class TypesOfFood extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h1>Types of food:</h1>
				<Fruits />
				<Vegetables />
			</div>
		);
	}
}

ReactDOM.render(<TypesOfFood />, root);
