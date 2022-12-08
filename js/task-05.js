const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener("input", (event) => {
    return event.currentTarget.value
        ? (nameOutput.textContent = event.currentTarget.value)
        : (nameOutput.textContent = 'Anonymous');
});