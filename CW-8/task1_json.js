/*
  Задание:
  Написать скрипт который:
    1. Собирает данные с формы (3 разных полей), конвертирует их в json и выводит в консоль.
  ->  2. Сделать отдельный инпут который выполняет JSON.parse(); на ту строку что вы туда ввели и выводит результат в консоль.

  Array.from(HTMLNodeColection); -> Arary

  <form>
    <input name="name" />
    <input name="age"/>
    <input name="password"/>
    <button></button>
  </form>

  <form>
    <input />
    <button></button>
  </form>
  -> '{"name" : !"23123", "age": 15, "password": "*****" }'
*/

const firstForm = document.getElementById("first-form");
const firstFormBtn = document.getElementById("submit-first-form");
const secondForm = document.getElementById("second-form");
const secondFormBtn = document.getElementById("submit-second-form");

firstForm.addEventListener("submit", collectData);
secondForm.addEventListener("submit", parseData);

function collectData(e) {
  e.preventDefault();

  let newUser = {};
  const inputs = e.target.querySelectorAll("input");
  inputs.forEach((input) => {
    newUser[input.name] = input.value;
    input.value = "";
  });

  const newUserStr = JSON.stringify(newUser);
  console.log(newUserStr);
}

function parseData(e) {
  e.preventDefault();

  const input = e.target.querySelector("input");
  const strObj = input.value;
  const newObj = JSON.parse(strObj);
  console.log(newObj);
}
