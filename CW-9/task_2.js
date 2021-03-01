/*

    Задание 2:
    Написать форму логина (логин пароль), которая после отправки данных записывает их в localStorage.
    Если в localStorage есть записть - На страниче вывести "Привет {username}", если нет - вывести окно
    логина.

    + бонус, сделать кнопку "выйти" которая удаляет запись из localStorage и снова показывает форму логина
    + бонус сделать проверку логина и пароля на конкретную запись. Т.е. залогинит пользователя если
    он введет только admin@example.com и пароль 12345678


*/
window.addEventListener("load", function checkLocalStorage() {
  const localData = JSON.parse(localStorage.getItem("userData"));
  if (localData) {
    sayHi(localData.username);
  } else {
    renderForm();
  }
});

const container = document.querySelector(".container");

function renderForm() {
  const form = document.createElement("form");
  const loginInput = document.createElement("input");
  const passInput = document.createElement("input");
  const loginBtn = document.createElement("button");

  loginInput.type = "email";
  passInput.type = "password";
  loginBtn.innerText = "Login";

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const userDataObj = {
      username: loginInput.value,
      password: passInput.value,
    };

    localStorage.setItem("userData", JSON.stringify(userDataObj));
  });

  form.append(loginInput, passInput, loginBtn);
  container.append(form);
}

function sayHi(username) {
  const greetings = document.createElement("h1");
  greetings.innerText = `Hi, ${username}`;

  const logoutBtn = document.createElement("button");
  logoutBtn.innerText = "Log Out";
  logoutBtn.addEventListener("click", function deleteLocalData() {
    localStorage.removeItem("userData");
  });

  container.append(greetings, logoutBtn);
}
