const textInput = document.querySelector("#validation-input");

const checkLength = () => {
  if (textInput.value.length < textInput.dataset.length) {
    textInput.classList.add("invalid");
  } else {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  }
};

textInput.addEventListener("blur", checkLength);

//!Task

// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

// 1. Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.

// 2. Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.
