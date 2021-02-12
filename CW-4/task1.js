/*
    Задание:
    Сделать валидацию формы:
    1. Логин / Пароль не может быть пустым
    2. Пароли должны совпадть
    3. Пока не стоит что юзер согласен с лиц. соглашением - кнопка отправки не активна

    + бонус - то поле, которое не прошло валидацию подсвечивать красным.
            - которое прошло - подсвечивать зеленым.
*/

// Selectors
const registerForm = document.getElementById("MyValidateForm");
const licenceCheckBox = document.getElementById("agree");
const submitButton = document.getElementById("submit");

const login = registerForm.login;
const passwordOne = registerForm.pas1;
const passwordTwo = registerForm.pas2;

// Functions
function isFieldEmpty(field) {
  if (field.value === "") {
    field.classList.remove("OK");
    field.classList.add("error");
    return false;
  } else {
    field.classList.remove("error");
    field.classList.add("OK");
    return true;
  }
}

function comparePasswords() {
  if (
    passwordOne.value === passwordTwo.value &&
    passwordOne.value !== "" &&
    passwordTwo.value !== ""
  ) {
    passwordOne.classList.add("OK");
    passwordTwo.classList.add("OK");
    return true;
  } else {
    passwordTwo.classList.remove("OK");
    passwordTwo.classList.add("error");
    return false;
  }
}

function submit(e) {
  e.preventDefault();
  if (
    isFieldEmpty(login) &&
    isFieldEmpty(passwordOne) &&
    isFieldEmpty(passwordTwo) &&
    comparePasswords()
  ) {
    console.log("Username: ", login.value, " Password: ", passwordOne.value);
  } else {
    console.warn("Fill in all fields. Passwords should be the same.");
  }
}

// Event Listeners
// Change Colors
login.addEventListener("input", isFieldEmpty.bind(null, login));
passwordOne.addEventListener("input", isFieldEmpty.bind(null, passwordOne));
passwordTwo.addEventListener("input", isFieldEmpty.bind(null, passwordTwo));

//Check if passwords match
passwordOne.addEventListener("change", comparePasswords);
passwordTwo.addEventListener("change", comparePasswords);

// License agreement
licenceCheckBox.addEventListener("click", () => {
  if (licenceCheckBox.checked) {
    submitButton.disabled = false;
    registerForm.addEventListener("submit", submit);
  } else {
    submitButton.disabled = true;
    registerForm.removeEventListener("submit", submit);
  }
});
