/*
    Задание:

    Написать скрипт, который будет приводить в действие переключалки из разметки.
    И будет перемещать класс ball по точкам в зависимости от нажатой кнопки
*/

const containers = document.querySelectorAll(".roadMap__container");
containers.forEach(function (container) {
  const prevBtn = container.querySelector('.navButton[data-direction="<"');
  const nextBtn = container.querySelector('.navButton[data-direction=">"');

  // Add Event Listeners
  prevBtn.addEventListener("click", prevRoadMapPoint);
  nextBtn.addEventListener("click", nextRoadMapPoint);
});

// Functions
function nextRoadMapPoint(event) {
  const roadMap = event.target.parentNode.querySelector(".roadMap");
  const ballRoadMapPoint = roadMap.querySelector(".ball");
  const ballCurrentPosition = +ballRoadMapPoint.dataset.id;
  const ballNextPosition = ballCurrentPosition + 1;
  const newPointClass = `.roadMapPoint[data-id="${ballNextPosition}"]`;

  // Checking if slider already has max value
  if (ballCurrentPosition !== roadMap.children.length) {
    const newPoint = roadMap.querySelector(newPointClass);

    ballRoadMapPoint.classList.remove("ball");
    newPoint.classList.add("ball");
  } else {
    console.log("Max slider value alredy reached");
  }
}

function prevRoadMapPoint(event) {
  const roadMap = event.target.parentNode.querySelector(".roadMap");
  const ballRoadMapPoint = roadMap.querySelector(".ball");
  const ballCurrentPosition = +ballRoadMapPoint.dataset.id;
  const ballPrevPosition = ballCurrentPosition - 1;
  const newPointClass = `.roadMapPoint[data-id="${ballPrevPosition}"]`;

  // Checking if slider already has min value
  if (ballCurrentPosition !== 1) {
    const newPoint = roadMap.querySelector(newPointClass);

    ballRoadMapPoint.classList.remove("ball");
    newPoint.classList.add("ball");
  } else {
    console.log("Min slider value alredy reached");
  }
}
