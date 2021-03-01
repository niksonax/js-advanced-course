/* 
    Задание:
      Создать список дел, в который можно:
      - Добавить новый элемент
      - Удалить элемент

    Шаблон элемента:
      <li class="listItem">
          <span class="TodoText">{add text}</span>
          <button>Remove</button>
      </li>
*/

const input = document.getElementById("newToDo");
const addTodoBtn = document.getElementById("addToDo");
const todoList = document.getElementById("toDoList");

addTodoBtn.addEventListener("click", addNewTodo);

function addNewTodo() {
  if (input.value === "") {
    console.warn("Input field is empty!");
  } else {
    const newTodoText = document.createElement("span");
    const newTodoListItem = document.createElement("li");
    const newTodoCheckBox = document.createElement("input");
    const removeTodoBtn = document.createElement("button");

    newTodoListItem.classList.add("listItem");
    newTodoCheckBox.type = "checkbox";
    newTodoCheckBox.classList.add("DoneCheckbox");
    newTodoText.classList.add("TodoText");
    newTodoText.innerText = input.value;
    removeTodoBtn.innerText = "Remove";

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

    newTodoListItem.append(newTodoCheckBox, newTodoText, removeTodoBtn);
    todoList.appendChild(newTodoListItem);

    input.value = "";
  }
}
