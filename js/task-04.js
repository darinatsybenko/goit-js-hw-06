
const span = document.querySelector('#value');
console.log(span);
const btndecrement = document.querySelector('[data-action="decrement"]')
console.log(btndecrement)
const btnincrement = document.querySelector('[data-action="increment"]')
console.log(btnincrement)

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

