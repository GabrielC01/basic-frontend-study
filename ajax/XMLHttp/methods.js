// Create a new XMLHttpRequest object
var xhttp = new XMLHttpRequest();

// Abort the current request
xhttp.abort();

// Return HTTP header information
xhttp.getAllResponseHeader();

// Return specific header information
xhttp.getResponseHeader();

// Specify the request
xhttp.open(/* method, url, async, user, psw*/);

// Send request to the server
xhttp.send(); // For GET method
xhttp.send(string); // For POST method

// Set a label/value to the header to be sent
xhttp.setRequestHeader();
