let counterValue = document.querySelector('#value');
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');
let result = 0;

incrementButton.addEventListener("click", () => {
    result = Number(counterValue.innerHTML) + 1;
    counterValue.innerHTML = result;
});

decrementButton.addEventListener("click", () => {
    result = Number(counterValue.innerHTML) - 1;
    counterValue.innerHTML = result;
});

