/*
        Задание:

          Написать скрипт, который будет добавлять введеный в инпут Receiver текст
          в список list.
          Если в списке больше 5 записей, убирать Event с кнопки AddToList.
          Кнопке AddToList добавить disabled = true

          После каждого ввода очищать значение инпута

          Используемые методы:

          addEventListener
          removeEventListener

          document.getElementById
          document.createElement

          element.innerText
          element.setAttribute
          element.appendChild

          Получить значение инпута: Receiver.value [Receiver - это id]

      */

// Selectors
const input = document.getElementById("Receiver");
const addBtn = document.getElementById("AddToList");
const list = document.getElementById("list");
const errorField = document.getElementById("error");

// Fucntions
function addToList() {
  const itemText = input.value;
  const item = document.createElement("li");

  item.innerText = itemText;
  input.value = "";
  list.appendChild(item);

  if (list.children.length >= 5) {
    addBtn.disabled = true;
    addBtn.removeEventListener("click", addToList);
  }
}

// Add Event Listeners
addBtn.addEventListener("click", addToList);
