var xhttp = new XMLHttpRequest();

// Define a function to be called when readyState property changes
xhttp.onreadystatechange = () => {
	// ...
}

// Status of the XMLHttpRequest
xhttp.readyState; // 0 || 1 || 2 || 3 || 4

// Response data as a string
xhttp.responseText;

// Response data as an XML data
xhttp.responseXML;

// Status number of a request
xhttp.status; // HTTP status codes

// Status text (e.g. "OK" or "Not Found")
xhttp.statusText;
