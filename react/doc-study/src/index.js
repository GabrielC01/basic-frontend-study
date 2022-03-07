import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root');

/* Specifying attributes */

// Using string literal
const anchor = <a href="https://gabcchaves.github.io" target="_blank">{"Gabriel's portfolio"}</a>;
// Using JS expression
const url = 'https://gabcchaves.github.io';
const anotherAnchor = <a href={url} target="_blank">{"Gabriel's portfolio"}</a>;

const bundle = (
	<h1>{anchor}<br/><br/>{anotherAnchor}</h1>
);

ReactDOM.render(
	bundle,
	rootElement
);
