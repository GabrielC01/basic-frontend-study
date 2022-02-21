const h1 = document.querySelector('h1');
h1.style.color = "navy";
h1.style.transition = "0.1s";

h1.addEventListener('click', print);
h1.addEventListener('mouseover', mouseOver);
h1.addEventListener('mouseleave', mouseLeave);

function print() {
  console.log('clicked');
}

function mouseOver() {
  h1.style.color = "gold";
}

function mouseLeave() {
  h1.style.color = "navy";
}

const caption = document.querySelector('h2');
caption.style.color = "navy";
caption.style.transition = "0.1s";

caption.onclick = print;
caption.onmouseover = mouseOver;
caption.onmouseleave = mouseLeave;
