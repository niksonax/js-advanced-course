/*

    Документация:
    
    https://developer.mozilla.org/ru/docs/HTML/HTML5/Constraint_validation
    
    form.checkValidity() > Проверка всех полей формы на валидость
    form.reportValidity() > Проверяет все поля на валидность и выводит сообщение с ошибкой

    formElement.validity > Объект с параметрами валидности поля 
    formElement.setCustomValidity(message) > Метод который задаст validity.valid = false, и при попытке отправки
        сообщения выведет message в браузерный попал

    Классы для стилизации состояния элемента
    input:valid{}
    input:invalid{}

    
    Задание:
    
    Используя браузерное API для валидации форм реализовать валидацию следующей формы:
    

    - Имя пользователя: type:text -> validation: required; minlength = 2;  
        Если пустое выввести сообщение: "Как тебя зовут дружище?!"
    - Email: type: email -> validation: required; minlength = 3; validEmail;
        Если эмейл не валидный вывести сообщение "Ну и зря, не получишь бандероль с яблоками!"
    - Пароль: type: password -> validation: required; minlength = 8; maxlength=16;
        Если пустой вывести сообщение: "Я никому не скажу наш секрет";
    - Количество сьеденых яблок: type: number -> validation: required; minlength = 1; validNumber;
        Если количество 0 вывести эррор с сообщением "Ну хоть покушай немного... Яблочки вкусные"
    - Напиши спасибо за яблоки: type: text -> validation: required; 
        Если текст !== "спасибо" вывести эррор с сообщением "Фу, неблагодарный(-ая)!" используя setCustomValidity();

    - Согласен на обучение: type: checkbox -> validation: required;
        Если не выбран вывести эррор с сообщение: "Необразованные живут дольше! Хорошо подумай!"

    Внизу две кнопки:

    1) Обычный submit который отправит форму, если она валидна.
    2) Кнопка Validate(Проверить) которая запускает методы:
        - yourForm.checkValidity: и выводит на страницу сообщение с результатом проверки
        - yourForm.reportValidity: вызывает проверку всех правил и вывод сообщения с ошибкой, если такая есть

*/

// Selectors
const loginForm = document.getElementById("login-form");
const username = loginForm.username;
const email = loginForm.email;
const password = loginForm.password;
const apples = loginForm.apples;
const thankYou = loginForm["thank-you"];
const agreement = loginForm.agreement;

const submitBtn = document.getElementById("submit-btn");
const validateBtn = document.getElementById("validate-btn");

// SUBMIT - Обычный submit который отправит форму, если она валидна
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Form is submitted");
});

// VALIDATE - Кнопка Validate(Проверить) которая запускает методы
validateBtn.addEventListener("click", function () {
  // - yourForm.checkValidity: и выводит на страницу сообщение с результатом проверки
  if (loginForm.checkValidity()) {
    console.log("Form filling is correct");
  } else {
    console.warn("Form filling is incorrect. Check fields");
  }
  //- yourForm.reportValidity: вызывает проверку всех правил и вывод сообщения с ошибкой, если такая есть
  loginForm.reportValidity();
});

username.addEventListener("invalid", function () {
  // Если пустое - выввести сообщение: "Как тебя зовут, дружище?!"
  if (username.validity.valueMissing) {
    username.setCustomValidity("Как тебя зовут, дружище?!");
  } else {
    username.setCustomValidity("");
  }
});

email.addEventListener("invalid", function () {
  // Если эмейл не валидный вывести сообщение "Ну и зря, не получишь бандероль с яблоками!"
  if (email.validity.typeMismatch || email.validity.valueMissing) {
    email.setCustomValidity("Ну и зря, не получишь бандероль с яблоками!");
  } else {
    email.setCustomValidity("");
  }
});

password.addEventListener("invalid", function () {
  // Если пароль пустой вывести сообщение: "Я никому не скажу наш секрет"
  if (password.validity.valueMissing) {
    password.setCustomValidity("Я никому не скажу наш секрет");
  } else {
    password.setCustomValidity("");
  }
});

apples.addEventListener("input", function () {
  // Если количество 0 вывести эррор с сообщением "Ну хоть покушай немного... Яблочки вкусные"
  if (apples.value === "0") {
    apples.setCustomValidity("Ну хоть покушай немного... Яблочки вкусные");
  } else {
    apples.setCustomValidity("");
  }
});

thankYou.addEventListener("change", function () {
  //Если текст !== "спасибо" вывести эррор с сообщением "Фу, неблагодарный(-ая)!" используя setCustomValidity();
  if (thankYou.value.toLowerCase() !== "спасибо") {
    thankYou.setCustomValidity("Фу, неблагодарный(-ая)!");
  } else {
    thankYou.setCustomValidity("");
  }
});

agreement.addEventListener("invalid", function () {
  // Если не выбран вывести эррор с сообщение: "Необразованные живут дольше! Хорошо подумай!"
  if (!agreement.checked) {
    agreement.setCustomValidity("Необразованные живут дольше! Хорошо подумай!");
  } else {
    agreement.setCustomValidity("");
  }
});
