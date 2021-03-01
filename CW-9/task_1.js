/*

    Задание 1:
    Написать скрипт, который по клику на кнопку рандомит цвет и записывает его в localStorage
    После перезагрузки страницы, цвет должен сохранится.

*/

const randomColorBtn = document.getElementById("random-color");

randomColorBtn.addEventListener("click", saveColor);

function randomBackgroundColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 255));
  }
  document.body.style = `background: rgb(${color[0]}, ${color[1]}, ${color[2]})`;
  return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
}

function saveColor() {
  const color = randomBackgroundColor();
  localStorage.setItem("color", color);
}
