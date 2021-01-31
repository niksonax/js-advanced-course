/*
  Задание 1.

  Написать функцию которая будет задавать СЛУЧАЙНЫЙ цвет для фона.
  Каждая перезагрузка страницы будет с новым цветом.
  Для написания используйте функцию на получение случайного целого числа,
  между минимальным и максимальным значением (Приложена снизу задания)

  + Бонус, повесить обработчик на кнопку через метод onClick
  + Бонус, использовать 16-ричную систему исчесления и цвет HEX -> #FFCC00
  + Бонус выводить полученый цвет по центру страницы.
  
  Необходимо создать блок через createElement задать ему стили через element.style
  и вывести через appendChild или insertBefore

  Необходимые материалы:
    Math.Random (Доки): https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    __
    Работа с цветом:
    Вариант 1.
      Исользовать element.style.background = 'rgb(r,g,b)';
      где r,g,b случайное число от 0 до 255;

    Вариант 2.
      Исользовать element.style.background = '#RRGGBB';
      где, RR, GG, BB, значние цвета в 16-ричной системе исчесления
      Формирование цвета в вебе: https://ru.wikipedia.org/wiki/%D0%A6%D0%B2%D0%B5%D1%82%D0%B0_HTML
      Перевод в 16-ричную систему исчесления делается при помощи
      метода Number.toString( 16 ) https://www.w3schools.com/jsref/jsref_tostring_number.asp,
*/

document.addEventListener(
  "DOMContentLoaded",
  function applyRandomColorOnReaload() {
    const wrapper = document.querySelector(".wrap");
    const hexColor = colorToHex(randomColor());
    wrapper.style.background = hexColor;
  }
);

function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 255));
  }
  return color;
}

function colorToHex(rgbColor) {
  const hexColor = `#${
    componentToHex(rgbColor[0]) +
    componentToHex(rgbColor[1]) +
    componentToHex(rgbColor[2])
  }`;
  return hexColor;
}

function componentToHex(c) {
  const hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

const wrapper = document.querySelector(".wrap");
const button = document.createElement("button");
button.innerText = "Random Color";

button.addEventListener("click", function applyRandomColor(event) {
  const parent = event.target.parentNode;
  const hexColor = colorToHex(randomColor());
  parent.style.background = hexColor;
});

wrapper.appendChild(button);

// Or with 'onclick' method
/* function applyRandomColor1(event) {
  const parent = event.target.parentNode;
  const hexColor = colorToHex(randomColor());
  parent.style.background = hexColor;
}

button.onclick = applyRandomColor1; */
