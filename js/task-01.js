const categoriesEl = document.querySelector('#categories');
console.log(categoriesEl);
const numberEl = document.querySelectorAll('.item');
console.log(numberEl);
const numberOfCategiries = categoriesEl.children.length;
console.log('Number of categories:', numberOfCategiries);

const elements = numberEl.forEach((item) => {
    console.log('Category:', item.firstElementChild.textContent);
    console.log('Elements:', item.lastElementChild.children.length);
})










