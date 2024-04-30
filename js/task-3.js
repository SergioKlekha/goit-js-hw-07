const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

function updateName() {
    let name = input.value.trim();

    if (name === '') {
        name = 'Anonymous';
    }

    output.textContent = name;
}

updateName();

input.addEventListener('input', updateName);
