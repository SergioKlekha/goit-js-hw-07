const body = document.body;
const span = document.querySelector('.color');
const button = document.querySelector('.change-color');

button.addEventListener('click', clickButton);

function clickButton() {
    const color = getRandomHexColor();

    body.style.backgroundColor = color;
    span.textContent = color;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`;
}
