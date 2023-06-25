const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const arrayTemp = [];

for (let ingredient of ingredients) {

    const item = document.createElement("li");
    item.textContent = ingredient;
    item.class = "list";
    arrayTemp.push(item);
};

const ingredientsList = document.querySelector("#ingredients");

const ingredientsSeparately = [...arrayTemp];
ingredientsList.append(...ingredientsSeparately);



//! Task

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.