const textInput = document.querySelector('#validation-input');

// console.log(textInput);

textInput.addEventListener("blur", inputValidationCheking);

function inputValidationCheking() {
    if (textInput.value.length !== Number(textInput.dataset.length)) {
        textInput.classList.add('invalid');
    }     else textInput.classList.replace('invalid','valid');
};

