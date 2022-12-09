const spanText = document.querySelector('#text');
const textRangeSlider = document.querySelector('#font-size-control');

textRangeSlider.addEventListener('input', spanTextRange);

function spanTextRange() {
    const textSize = textRangeSlider.value;
    spanText.style.fontSize = textSize + 'px';
};

