function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesArray = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    boxesArray.push(
      `<div style="height: ${size}px; width: ${size}px; background-color:${getRandomHexColor()}"></div>`
    );

    size += 10;
  }

  let boxesString = boxesArray.join("");

  boxes.insertAdjacentHTML("afterbegin", boxesString);
}

function removeBoxes() {
  boxes.innerHTML = "";
}

const input = document.querySelector("#controls > input");
const controls = document.querySelector("#controls");

const btnCreate = document.querySelector("#controls button[data-create]");

const btnDestroy = document.querySelector("#controls button[data-destroy]");

const boxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", () => {
  createBoxes(input.value);
});

btnDestroy.addEventListener("click", removeBoxes);

// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

//1. Размеры самого первого <div> - 30px на 30px.
//2. Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
//3. Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
