const input = document.querySelector('#name-input');
console.log(input);
const span = document.querySelector('#name-output');
console.log(span);

input.addEventListener('input', addSpan);
function addSpan (event) {
    span.textContent = event.currentTarget.value
if(input.value === '') {
span.textContent = "Anonymous";
};
};