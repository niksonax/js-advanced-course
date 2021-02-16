/*
    Задание:
    1. Используя интерфейс который есть на страничке, написать визуальный
    конструктор обектов используя значение key-value, которые вводятся в
    соответствующие поля в форме.

    2. Каждый созданый обьект выводить в тег code после добавления каждого
    нового поля. Т.е мы должны визуально видить в каком состоянии наши обьекты
    сейчас

    3. По нажатию кнопки Combine Objects! два обьекта должны обьедениться
    используя метод Object.assing или spread operator и вывестись на стринчку.

    * Изменять HTML можно.
*/
// Selectors
const result = document.querySelector("#result code");
const objForm1 = document.querySelector(".ObjForm1");
const objForm2 = document.querySelector(".ObjForm2");
const createdObj1 = document.querySelector(".createdObj1 code");
const createdObj2 = document.querySelector(".createdObj2 code");
const combineObjsBtn = document.querySelector(".resultBlock button");

// Objects
let object1 = {
  test: "field",
  year: 1799,
};
let object2 = {
  name: "John",
  salary: 3500,
};

// Functions
function updateObj(e) {
  e.preventDefault();
  const inputs = e.target.elements;
  const key = inputs["key"].value;
  const value = inputs["value"].value;

  if (e.target.className === "ObjForm1") {
    object1[key] = value;
    renderObj(object1, e.target.className);
  } else if (e.target.className === "ObjForm2") {
    object2[key] = value;
    renderObj(object2, e.target.className);
  }

  inputs["key"].value = "";
  inputs["value"].value = "";
}

function renderObj(obj, target) {
  const strObj = JSON.stringify(obj).split(",").join(", ");
  if (target === "ObjForm1") {
    createdObj1.innerText = strObj;
  } else if (target === "ObjForm2") {
    createdObj2.innerText = strObj;
  } else if (target === "CombinedObj") {
    result.innerText = strObj;
  }
}

function combineObjs(obj1, obj2) {
  const newObj = Object.assign({}, obj1, obj2);
  renderObj(newObj, "CombinedObj");
}

// Event Listeners
objForm1.addEventListener("submit", updateObj);
objForm2.addEventListener("submit", updateObj);
combineObjsBtn.addEventListener(
  "click",
  combineObjs.bind(null, object1, object2)
);

window.addEventListener("load", function () {
  renderObj(object1, "ObjForm1");
  renderObj(object2, "ObjForm2");
});
