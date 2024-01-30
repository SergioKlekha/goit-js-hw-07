const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

function updateName() {
    let name = input.value.trim();

    if (name === '') {
        name = 'Anonymous';
    }

    output.textContent = name;
}

updateName();

input.addEventListener('input', updateName);
