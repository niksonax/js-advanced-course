/*

    Задание 1.

    Написать скрипт который будет будет переключать вкладки по нажатию
    на кнопки в хедере.

    Главное условие - изменять файл HTML нельзя.

    Алгоритм:
      1. Выбрать каждую кнопку в шапке
         + бонус выбрать одним селектором

      2. Повесить кнопку онклик
          button1.onclick = function(event) {

          }
          + бонус: один обработчик на все три кнопки (делегирование событий)

      3. Написать функцию которая выбирает соответствующую вкладку
         и добавляет к ней класс active

      4. Написать функцию hideAllTabs которая прячет все вкладки.
         Удаляя класс active со всех вкладок

    Методы для работы:

      getElementById
      querySelector
      classList
      classList.add
      forEach
      onclick

      element.onclick = function(event) {
        // do stuff ...
      }

  */

// Selectors
const buttons = document.getElementById("buttonContainer");

// Create and add button to close all tabs
const closeButton = document.createElement("button");
closeButton.innerText = "Close All";
buttons.appendChild(closeButton);

// Event Listener
buttons.addEventListener("click", function openTab(event) {
  hideAllTabs();
  const tabButton = event.target;
  if (
    tabButton.nodeName === "BUTTON" &&
    tabButton.classList.contains("showButton")
  ) {
    const tabNumber = tabButton.dataset.tab;
    const tabClass = `.tab[data-tab='${tabNumber}']`;
    const tab = document.querySelector(tabClass);

    tab.classList.add("active");
  }
});

closeButton.addEventListener("click", hideAllTabs);

// Function
function hideAllTabs() {
  let tabs = document.getElementById("tabContainer");
  tabs = Array.from(tabs.children);
  for (el in tabs) {
    tabs[el].classList.remove("active");
  }
}
