const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = document.querySelector('#ingredients')
console.log(ingredientsEl);

const addLiEl = ingredients.map(ingredient => {
  const liEl = document.createElement("li");
console.log(liEl);
liEl.textContent = ingredient;

liEl.classList.add('item');
return liEl;
})
ingredientsEl.append(...addLiEl)

