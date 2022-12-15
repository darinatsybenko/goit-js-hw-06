const input = document.querySelector('#font-size-control');
console.log(input);
const span = document.querySelector('#text');
console.log(span);

input.addEventListener('input', (evt) => {
    const textFontSize = evt.currentTarget.value;
    span.style.fontSize = `${textFontSize}px`;
    
}

)