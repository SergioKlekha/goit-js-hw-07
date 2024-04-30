const form = document.querySelector('.login-form');

form.addEventListener('submit', fixForm);

function fixForm(event) {
    event.preventDefault();

    const emailInput = event.currentTarget.elements.email;
    const passwordInput = event.currentTarget.elements.password;

    if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
        alert('All form fields must be filled in');
        return;
    }

    const formData = {
        email: emailInput.value.trim(),
        password: passwordInput.value.trim(),
    };

    console.log(formData);

    event.currentTarget.reset();
}
