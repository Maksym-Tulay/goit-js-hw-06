const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
    evt.preventDefault();

    const email = evt.currentTarget.elements.email.value;
    const password = evt.currentTarget.elements.password.value;
    const message = 'Всі поля повинні бути заповнені!';
    const formDataObject = {
        email,
        password
    };

    if (email === '' || password === '') {
        alert(message);
    } else {
        return formDataObject && console.log(formDataObject);
    };

    form.reset();
};

