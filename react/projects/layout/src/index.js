import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');
root.style.display = 'flex';
root.style.justifyContent = 'center';

// Page's header
function Header() {
	return (
		<header>
			<div style={styleTitle}><h1>Document</h1></div>
			<div>
				<nav style={styleNavBar}>
					<ul>
						<li style={styleNavBarLinks}>Nav link</li>
						<li style={styleNavBarLinks}>Nav link</li>
						<li style={styleNavBarLinks}>Nav link</li>
						<li style={styleNavBarLinks}>Nav link</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

// Page's sidebar
function SideBar() {
	return (
		<div style={styleSideBar}>
			<aside>
				<h4 style={{textAlign: 'center'}}>Side bar</h4>
				<nav>
					<ul>
						<li>Nav link</li>
						<li>Nav link</li>
						<li>Nav link</li>
					</ul>
				</nav>
			</aside>
		</div>
	);
} 

// Main area
function MainArea() {
	return (
		<div style={styleMain}>
			<main>
				<section>
					<h3>Section</h3>
					<p>Paragraph.</p>
				</section>
			</main>
		</div>
	);
}

// Footer
function Footer() {
	return (
		<div style={styleFooter}>
			<footer>
				<strong>Footer area.</strong>
			</footer>
		</div>
	);
}

// Wrap up components
class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div style={styleRoot}>
				<Header />
				<div style={{display: 'flex'}}>
					<SideBar />
					<MainArea />
				</div>
				<Footer />
			</div>
		);
	}
}

// Styles
const styleRoot = {
	border: '1px solid lightyellow',
	boxShadow: '2px 2px 4px lightgray, -2px -1px 4px lightgray',
	width: '90%',
};

const styleTitle = {
	color: 'navy',
	textAlign: 'center'
};

const styleNavBar = {
	backgroundColor: 'lightgray'
};

const styleNavBarLinks = {
	display: 'inline',
	textDecoration: 'none',
	color: 'darkred',
	margin: '0 1vmin'
};

const styleSideBar = {
	width: '30%',
	border: '1px solid lightgray',
	margin: '2px'
};

const styleMain = {
	width: '60%',
	height: '70vh',
	border: '1px solid lightgray',
	width: '100%',
	margin: '2px'
};

const styleFooter = {
	height: '10vh',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: 'lightgray'
}

ReactDOM.render(<App />, root);
