/*

        Поработаем немного с ивентами:
        onmouseenter
        onclick
        oncontextmenu
        onkeydown

        Задание:
        На каждую из конопок назначить действие которое будет выполнять следующее действие:
        1.На ховер(onmouseenter) повесить обработчик который будет при каждом наведении
          на кнопку будет выводить в блок результатом елемент li с текстом "hovered!"
          у которого будет один из следующих класов:
          red blue green orange purple

        2.На кнопку клика(onclick) повесить обработчик который будет удалять классы с
          блока с результатом по очереди в таком порядке:

          six > two > three > four > one > five

          после того как блок окажется пустым, добавить их в порядке возрастания

          one > two > three ... > six

        3. На кнопку клика (Light) повесить обработчик, который будет выводить в
        блок с результатом (lightResult) поочередно один из цветов светофора:
        Цикл: Off -> Red -> Yellow -> Green -> Off

        4. На кнопку с обработчиком нажатия (onkeydown) повесить обработчик который будет:

          - Выводить в блок с результатом(keyboardResult) число нажатий на любую из клавиш клавиатуры.
          - Давать блоку (keyboardResult) классы, которые соотсветствуют числу кликов:

          Н-р:
          1 -> one
          3 -> three
          5 -> five
          11 -> one one
          115 -> one one five


      */
// SELECTORS
const mouseHover = document.getElementById("mouseHover");
const mouseClick = document.getElementById("mouseClick");
const mouseLight = document.getElementById("mouseLight");
const keyboardButton = document.getElementById("keyboardButton");

const hoverResult = document.getElementById("hoverResult");
const clickResult = document.getElementById("clickResult");
const lightResult = document.getElementById("lightResult");
const keyboardResult = document.getElementById("keyboardResult");

// Utility Function
const clearClasses = (arr) => {
  arr.forEach((el) => {
    if (keyboardResult.classList.contains(el)) {
      keyboardResult.classList.remove(el);
    }
  });
};

// 1st Task
const colors = ["orange", "red", "purple", "blue"];

mouseHover.onmouseenter = function () {
  console.log("hover");
  const newListItem = document.createElement("li");
  const randomColor = (colors) => {
    return colors[Math.floor(Math.random() * 4)];
  };
  newListItem.innerText = "Hovered!";
  newListItem.classList.add(randomColor(colors));
  hoverResult.appendChild(newListItem);
};

// 2nd Task
let clickIndex = 0;
let direction = true;
const deleteOrder = ["six", "two", "three", "four", "one", "five"];
const addOrder = ["one", "two", "three", "four", "five", "six"];

mouseClick.onclick = function () {
  console.log("click");
  if (direction) {
    if (clickIndex === deleteOrder.length) {
      direction = !direction;
      clickIndex = 0;
    } else {
      clickResult.classList.remove(deleteOrder[clickIndex]);
      clickIndex++;
    }
  } else {
    if (clickIndex === addOrder.length) {
      direction = !direction;
      clickIndex = 0;
    } else {
      clickResult.classList.add(addOrder[clickIndex]);
      clickIndex++;
    }
  }
};

// 3rd Task
const trafficColors = ["OFF", "red", "yellow", "green"];
let lightCounter = 0;

mouseLight.onclick = function () {
  console.log("light");
  if (lightCounter === trafficColors.length) {
    lightResult.innerText = "OFF";
    lightResult.style.backgroundColor = "white";
    lightCounter = 0;
  } else {
    lightResult.innerText = trafficColors[lightCounter].toUpperCase();
    lightResult.style.backgroundColor = trafficColors[lightCounter];
    lightCounter++;
  }
};

// 4th Task
let counter = 0;
const zeroToNine = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

keyboardButton.onkeydown = function () {
  console.log("keydown");
  counter++;
  keyboardResult.innerText = counter;

  const numbers = counter.toString().split("");
  const arrOfStrings = numbers.map(function (number) {
    switch (number) {
      case "0":
        return "zero";
      case "1":
        return "one";
      case "2":
        return "two";
      case "3":
        return "three";
      case "4":
        return "four";
      case "5":
        return "five";
      case "6":
        return "six";
      case "7":
        return "seven";
      case "8":
        return "eight";
      case "9":
        return "nine";
      default:
        return "";
    }
  });
  clearClasses(zeroToNine);

  arrOfStrings.forEach((el) => {
    keyboardResult.classList.add(el);
  });
};
