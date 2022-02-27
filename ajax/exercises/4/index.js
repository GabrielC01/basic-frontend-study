const button = document.querySelector('#makeRequest');
const result = document.querySelector('#result');

button.addEventListener('click', () => {
	const xHttp = new XMLHttpRequest();


	xHttp.onreadystatechange = () => {
		if (xHttp.readyState === 4 && xHttp.status === 200) {
			var xmlDoc = xHttp.responseXML;
			var personInfo = '' + 
				xmlDoc.getElementsByTagName('name')[0].textContent + '<br>' +
				xmlDoc.getElementsByTagName('e-mail')[0].textContent;
			result.innerHTML = personInfo;
		}
	};

	xHttp.open('GET', 'document.xml', true);
	xHttp.send();
});

