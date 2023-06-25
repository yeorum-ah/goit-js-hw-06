function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector('button.change-color');
const body = document.querySelector('body');
const span = document.querySelector('span.color');
span.textContent = '#fff';

function onChangeColor() {
  body.style.backgroundColor = span.textContent = getRandomHexColor();
}

button.addEventListener('click', onChangeColor);
