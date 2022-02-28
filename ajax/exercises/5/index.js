const button = document.querySelector('#makeRequest');
const table = document.querySelector('#languageTable');

button.addEventListener('click', () => {
	var xHttp = new XMLHttpRequest();
	xHttp.open('GET', 'document.xml', true);
	xHttp.send();


	xHttp.onreadystatechange = () => {
		if (xHttp.readyState === 4 && xHttp.status === 200) {
			var xmlDoc = xHttp.responseXML;
			var docNode = xmlDoc.getElementsByTagName('languages')[0];
			var childNodes = docNode.childNodes[0].nodeValue;
			alert(childNodes);
		}
	};
});
