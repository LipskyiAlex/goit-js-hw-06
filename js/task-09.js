function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor () {

  color.textContent = getRandomHexColor();
  body.style.backgroundColor = color.textContent;

}

const button = document.querySelector(".change-color");
const body = document.querySelector("body");
const color = document.querySelector(".color");

button.addEventListener("click",changeColor);





// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.