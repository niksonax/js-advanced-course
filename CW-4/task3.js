/*
    Задание:
        Создать список дел, в который можно:
        - Добавить новый элемент
        - Удалить элемент
        - Задать что пункт выполнен

    Шаблон элемента:
        <li class="listItem">
            <input type="checkbox" class="DoneCheckbox" />
            <span class="TodoText">{add text}</span>
            <button>Remove</button>
        </li>
*/

// Selectors
const input = document.getElementById("newToDo");
const addTodoBtn = document.getElementById("addToDo");
const todoList = document.getElementById("toDoList");

// Event Listeners
addTodoBtn.addEventListener("click", addNewTodo);

// Functions
function addNewTodo() {
  if (input.value === "") {
    console.warn("Input field is empty!");
  } else {
    const newTodoText = document.createElement("span");
    const newTodoListItem = document.createElement("li");
    const newTodoCheckBox = document.createElement("input");
    const removeTodoBtn = document.createElement("button");

    // Adding Classes and setting Attributes
    newTodoListItem.classList.add("listItem");
    newTodoCheckBox.type = "checkbox";
    newTodoCheckBox.classList.add("DoneCheckbox");
    newTodoText.classList.add("TodoText");
    newTodoText.innerText = input.value;
    removeTodoBtn.innerText = "Remove";

    // Adding Event Listeners
    newTodoCheckBox.addEventListener("click", function (e) {
      const completedTodo = e.target.parentNode;
      if (newTodoCheckBox.checked) {
        completedTodo.classList.add("done");
      } else {
        completedTodo.classList.remove("done");
      }
    });

    removeTodoBtn.addEventListener("click", function (e) {
      const removedTodo = e.target.parentNode;
      todoList.removeChild(removedTodo);
    });

    // Consctructing new To-Do Item and appending it to list
    newTodoListItem.append(newTodoCheckBox, newTodoText, removeTodoBtn);
    todoList.appendChild(newTodoListItem);

    // Clearing
    input.value = "";
  }
}
