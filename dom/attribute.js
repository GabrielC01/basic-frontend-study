const element = document.querySelector('header');
element.setAttribute('id', 'header');
console.log(element.getAttribute('id'));

element.setAttribute('class', 'header');
console.log(element.getAttribute('class'));
element.removeAttribute('id');

console.log(element.getAttribute('id'));
