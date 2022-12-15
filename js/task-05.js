const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', addSpan);
function addSpan (event) {
    span.textContent = event.currentTarget.value
if(input.value === '') {
span.textContent = "Anonymous";
};
};