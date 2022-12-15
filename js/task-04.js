
const span = document.querySelector('#value');
const btndecrement = document.querySelector('[data-action="decrement"]')
const btnincrement = document.querySelector('[data-action="increment"]')

let counterValue = 0;

btndecrement.addEventListener('click', onClick);
function onClick () {
counterValue -= 1;
span.textContent = counterValue;
}

btnincrement.addEventListener('click', ofClick );
function ofClick () {
    counterValue += 1;
    span.textContent = counterValue;
}

