const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const ingredientsList = document.querySelector('ul#ingredients');

const fragment = document.createDocumentFragment();

ingredients.forEach(ingredient => {
  const li = document.createElement('li');

  li.textContent = ingredient;

  li.classList.add('item');

  fragment.appendChild(li);
});

ingredientsList.appendChild(fragment);
