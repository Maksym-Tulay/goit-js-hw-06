const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
    evt.preventDefault();

    const formElements = evt.currentTarget.elements;
    const email = formElements.email;
    const password = formElements.password;

    const message = 'Всі поля повинні бути заповнені!';
    // const formData = { email, password };

    const formData = new FormData(evt.currentTarget).forEach((value, name) => {
        console.log(name, value);
    });;

    // formData.forEach((value, name) => {
    //     console.log(name, value);
    // });
    console.log(formData);

    if (email.value === '' || password.value === '') {
        alert(message);
    } else {
        return formData;
    };

    form.reset();

    // console.log(formData);


    
}