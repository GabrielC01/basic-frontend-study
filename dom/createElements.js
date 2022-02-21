// createElement
const div = document.createElement('div');
div.innerText = 'Olá devs';

// append prepend
const body = document.querySelector('body');
body.append(div);

body.prepend(div);

const newElement = document.createElement('h2');
newElement.innerText = 'New Element'
const script = body.querySelector('script');
body.insertBefore(newElement, script);

// insert after an element
const heading3 = document.createElement('h3');
heading3.innerText = 'Heading 3';
body.insertBefore(heading3, div.nextElementSibling);
