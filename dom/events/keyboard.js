const input = document.querySelectorAll('input')[0];
const input1 = document.querySelectorAll('input')[1];
const input2 = document.querySelectorAll('input')[2];

input.onkeydown = function() {
  console.log('rodei');
}

input1.onkeyup = function() {
  console.log('key up');
}

input2.onkeypress = function() {
  console.log('key pressed');
}
