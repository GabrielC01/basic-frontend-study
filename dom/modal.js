const body = document.querySelector('body');
const button = document.querySelector('#openModal');
const modal = document.querySelector('.modal-wrapper');

button.addEventListener('click', () => {  
  modal.classList.remove('invisible');
});

document.addEventListener('keydown', (event) => {
  if (event.which == 27) {
    modal.classList.add('invisible');
  }
});
