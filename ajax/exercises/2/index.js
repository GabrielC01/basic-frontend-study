const requestButton = document.querySelector('#sendRequest');
const xHttp = new XMLHttpRequest();

requestButton.addEventListener('click', () => {
	// Create an XMLHttp object
	xHttp.open('GET', 'ajax_info.txt', true);
	// xHttp.open('GET', 'ajax_info.txt?t=' + Math.random(), true); // Avoid cached result

	// Send GET information with the request
	// xHttp.open('GET', 'ajax_info.txt?fname=Gabriel&lname=Chaves', true);
	xHttp.send();

	// Check if it worked
	xHttp.onreadystatechange = () => {
		if (xHttp.readyState === 4 && xHttp.status === 200) {
			alert('It worked!');
		}
	};
});
