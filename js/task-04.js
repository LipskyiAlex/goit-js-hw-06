const value = document.querySelector("#value");let counterValue = 0;

const incrButton = document.querySelector('button[data-action="increment"]');

const decrButton = document.querySelector('button[data-action="decrement"]');

const incrementClick = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

const decrementClick = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};
incrButton.addEventListener("click", incrementClick);
decrButton.addEventListener("click", decrementClick);

//!Task

//Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// 1. Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.

// 2. Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.

// 3. Обновляй интерфейс новым значением переменной counterValue.
