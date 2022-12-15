const categoriesEl = document.querySelector('#categories');

const numberEl = document.querySelectorAll('.item');

const numberOfCategiries = categoriesEl.children.length;
console.log('Number of categories:', numberOfCategiries);

const elements = numberEl.forEach((item) => {
    console.log('Category:', item.firstElementChild.textContent);
    console.log('Elements:', item.lastElementChild.children.length);
})










