function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const changeColorButton = document.querySelector('.change-color');
const bodyTextColor = document.querySelector('.color');
const bodyBackgroundColor = document.querySelector('body');

changeColorButton.addEventListener('click', changeBodyBackgroundColor);

function changeBodyBackgroundColor(event) {
  let colorChanger = getRandomHexColor();

  bodyBackgroundColor.classList = 'body-background';
  bodyBackgroundColor.style.backgroundColor = colorChanger;

  bodyTextColor.textContent = colorChanger;
}

