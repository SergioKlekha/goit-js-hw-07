const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
    evt.preventDefault();

    const emailInput = evt.currentTarget.elements.email;
    const passwordInput = evt.currentTarget.elements.password;

    if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
        alert('All form fields must be filled in');
        return;
    }

    const formData = {
        email: emailInput.value.trim(),
        password: passwordInput.value.trim(),
    };

    console.log(formData);

    evt.currentTarget.reset();
}
