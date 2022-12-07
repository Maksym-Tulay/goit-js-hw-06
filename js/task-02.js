const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const makeIngredientListItems = ingredients => {
  return ingredients.map(ingredient => {
    const ingredientListItem = document.createElement('li');
    ingredientListItem.classList = 'item';
    ingredientListItem.textContent = ingredient;
    
    return ingredientListItem;
  });
};

const elements = makeIngredientListItems(ingredients);
ingredientsList.append(...elements);
