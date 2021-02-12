/*

    Задание 2.

    Напишите фунцию, которая изменяет цвет-фона и цвет текста, присваивая к новым цветам
    значение из this.color, this.background
    А так же добавляет элемент h1 с текстом "I know how binding works in JS"

    1.1 Ф-я принимает один аргумент,
    второй попадает в него через метод .call(obj)

    1.2 Ф-я не принимает никаких аргументов,
    а необходимые настройки полностью передаются через bind

    1.3 Ф-я принимает фразу для заголовка,
    обьект с настройками передаем через .apply();

*/
let colors = {
  background: "purple",
  color: "white",
};

const h1 = document.getElementById("task2");

// 1.1 CALL
function myCall(color) {
  document.body.style.background = this.background;
  document.body.style.color = color;
}
//myCall.call(colors, "red");

// 1.2 BIND
function myBind() {
  document.body.style.background = this.background;
  document.body.style.color = this.color;
}
const bindFunc = myBind.bind(colors);
//bindFunc();

// 1.3 APPLY
function myApply(text) {
  h1.innerText = text;
  h1.style.background = this.background;
  h1.style.color = this.color;
}
myApply.apply(colors, ["I know how binding works in JS"]);
