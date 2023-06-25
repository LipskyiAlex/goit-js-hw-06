

const slider = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const textFormat = () => {

    text.style.fontSize = `${slider.value}px`;
};

slider.addEventListener("input", textFormat);



//! Task

// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.