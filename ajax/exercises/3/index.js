// DOM
const button = document.querySelector('#makeRequest');
const display = document.querySelector('#displayText');

button.style.backgroundColor = 'royalblue';
button.style.color = 'white';
button.style.border = 'none';
button.style.fontSize = '18pt';
button.style.cursor = 'pointer';

display.style.fontSize = '18pt';
display.style.color = 'navy';

// XHTTP
const xHttp = new XMLHttpRequest();

button.addEventListener('click', () => {
	xHttp.open('GET', 'ajax_info.txt', true);
	xHttp.send();
});

xHttp.onreadystatechange = () => {
	if (xHttp.readyState === 4 && xHttp.status === 200) {
		display.innerText = xHttp.responseText;
		display.setAttribute('disabled', false);
	}
};
