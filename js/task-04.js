let counterValue = document.querySelector('#value');
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

incrementButton.addEventListener("click", () => {
    let result = Number(counterValue.innerHTML) + 1;
    counterValue.innerHTML = result;
});

decrementButton.addEventListener("click", () => {
    let result = Number(counterValue.innerHTML) - 1;
    counterValue.innerHTML = result;
});

