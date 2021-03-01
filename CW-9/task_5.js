// взять todolist из предыдущих домашек и реализовать сохранение всех записей на "сервер" используя https://www.npmjs.com/package/json-server
// при перезагрузке страницы все сохраненные записи должны подтягиваться и отрисовавыться, при добалении записи она улетает на "серевер" и сохраняется

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
// On Window Load render all tasks from server (db.json)
window.addEventListener("load", function getTasks() {
  fetch("http://localhost:3000/posts")
    .then((res) => res.json())
    .then((res) => renderTasks(res));
});

// Selectors
const input = document.getElementById("newToDo");
const addTodoBtn = document.getElementById("addToDo");
const todoList = document.getElementById("toDoList");

// Event Listeners
addTodoBtn.addEventListener("click", () => addNewTask(input.value));

// Functions
function addNewTask(task) {
  // Checking for empty input
  if (task === "") {
    console.warn("Input field is empty!");
    return;
  }
  // Generating ID unique for task
  const date = new Date();
  const taskId = date.getTime();

  // Create object of Task
  const todoObj = {
    name: task,
    id: taskId,
  };
  const todoJson = JSON.stringify(todoObj);

  // POST to server
  fetch("http://localhost:3000/posts", {
    method: "POST",
    body: todoJson,
    headers: {
      "Content-Type": "application/json",
    },
  }).then(() => console.log("Todo was sent to the server!"));

  // Clearing
  input.value = "";

  renderTask(task, taskId);
}

function renderTask(task, taskId) {
  const newTodoText = document.createElement("span");
  const newTodoListItem = document.createElement("li");
  const newTodoCheckBox = document.createElement("input");
  const removeTodoBtn = document.createElement("button");

  // Adding Classes and setting Attributes
  newTodoListItem.classList.add("listItem");
  newTodoListItem.dataset.id = taskId;
  newTodoCheckBox.type = "checkbox";
  newTodoCheckBox.classList.add("DoneCheckbox");
  newTodoText.classList.add("TodoText");
  newTodoText.innerText = task;
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
    fetch("http://localhost:3000/posts/" + taskId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => console.log("Element with ID-" + taskId + " was deleted"));
  });

  // Consctructing new To-Do Item and appending it to list
  newTodoListItem.append(newTodoCheckBox, newTodoText, removeTodoBtn);
  todoList.appendChild(newTodoListItem);
}

function renderTasks(arr) {
  arr.forEach((task) => {
    renderTask(task.name, task.id);
  });
}
