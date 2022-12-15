const input = document.querySelector('#font-size-control');

const span = document.querySelector('#text');


input.addEventListener('input', (evt) => {
    const textFontSize = evt.currentTarget.value;
    span.style.fontSize = `${textFontSize}px`;
    
}

)