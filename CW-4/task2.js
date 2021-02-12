/*
    Задание:
    Сделать шиблонизатор элемента по:
    Ширине input type=range
    Цвету  input type=color
    Высоте input type=number
    Скругление углов input type=number
    Margin input type=number

    Свойсвта: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference

    + Сделать выборку цвета из рандомных 20 цветов которые выбираются из появившегося блока :
    https://s3.envato.com/files/230412754/screenshots/1.png
    За заготовку для рандома цвета использовать функцию из первых занятий.

*/

// Selectors
const colorPicker = document.getElementById("myColor");
const widthPicker = document.getElementById("myWidth");
const heightPicker = document.getElementById("myHeight");
const borderRadiusPicker = document.getElementById("myBorderRadius");
const marginPicker = document.getElementById("myMargin");

// Event Listeners
colorPicker.addEventListener("input", function (e) {
  const color = e.target.value;
  result.style.background = color;
});

widthPicker.addEventListener("input", function (e) {
  const width = e.target.value + "px";
  result.style.width = width;
});

heightPicker.addEventListener("input", function (e) {
  const height = e.target.value + "px";
  result.style.height = height;
});

borderRadiusPicker.addEventListener("input", function (e) {
  const borderRadius = e.target.value + "px";
  result.style.borderRadius = borderRadius;
});

marginPicker.addEventListener("input", function (e) {
  const margin = e.target.value + "px";
  result.style.margin = margin;
});
