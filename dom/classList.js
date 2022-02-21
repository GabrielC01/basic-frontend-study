const element = document.querySelector('body');
element.classList.add('active');
console.log(element.classList);
element.addEventListener('mousedown', () => {
  element.classList.remove('active');
  element.classList.add('green');
});
element.addEventListener('mouseup', () => {
  element.classList.add('active');
  element.classList.remove('green');
});
