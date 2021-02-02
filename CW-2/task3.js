/*
Задача: Сделать корректно работающее всплывающее окно.
Условие: Изменять HTML разметку - нельзя.
При нажании на одну из кнопок, должно открытся окно с соответствующим data- аттрибутом.
При нажатии на кнопку close окно дожно закрываться.
*/

// Selectors
const showPopupButtons = document.getElementById("target");
const popupContainer = document.querySelector(".popup");
const closeButton = document.getElementById("popup__close");

// Event Listeners
showPopupButtons.addEventListener("click", function openPopup(event) {
  if (event.target.nodeName === "BUTTON") {
    const button = event.target;
    const popupItemClass = `.popup__item[data-popup='${button.dataset.popup}']`;
    const popupItem = document.querySelector(popupItemClass);

    popupContainer.style.display = "flex";
    popupItem.style.display = "block";

    // Close Button Listener
    closeButton.addEventListener("click", function closeAllPopups() {
      popupContainer.style.display = "none";
      popupItem.style.display = "none";
    });
  }
});
