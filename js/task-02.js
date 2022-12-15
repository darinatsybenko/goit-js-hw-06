const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = document.querySelector('#ingredients')


const addLiEl = ingredients.map(ingredient => {
  const liEl = document.createElement("li");
liEl.textContent = ingredient;
liEl.classList.add('item');
return liEl;
})
ingredientsEl.append(...addLiEl)

