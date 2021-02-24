/*
        Создайте счетчик секунд, который начинает отчет с 1 и заканчивается на 30,
        также добавьте кнопки который останавливают отчет, и запускают его заново и добавьте кнопку обнуляющую отчет.
        Также попробуйте изменить код так чтобы отчет начиналься с 30 и заканчивалься на 1.

       + бонус: Сделать так что бы на каждый тик (1с/2c) менялся цвет фона. Можно на основе генератора случайного цвета с предудущих уроков.
       + бонус: Сделать визуализацию стрелки которая идет по кругу
            document.getElementById("myDIV").style.transform = "rotate(7deg)";

       + бонус: Сделать кнопки которые выбирают режим в котором идет отсчет - обычный от 0 до 30 или реверсивный от 30 до 0
*/

const timer = document.querySelector(".timer");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");
const restartBtn = document.getElementById("restart-btn");
const arrow = document.querySelector("h3");

let counter = 0;
let isTimerActive = false;
let intervalTimer;

function startTimer() {
  if (!isTimerActive) {
    isTimerActive = true;
    startBtn.disabled = true;
    stopBtn.disabled = false;

    intervalTimer = setInterval(function () {
      if (counter === 30) {
        stopTimer();
      }
      timer.innerText = counter >= 10 ? `00:${counter}` : `00:0${counter}`;
      randomBackgroundColor();
      counter++;
      arrow.style.transform = `rotate(${12 * (counter - 1)}deg)`;
    }, 1000);
  }
}

function stopTimer() {
  if (isTimerActive) {
    isTimerActive = false;
    stopBtn.disabled = true;
    startBtn.disabled = false;
  }
  clearInterval(intervalTimer);
}

function resetTimer() {
  if (isTimerActive) {
    clearInterval(intervalTimer);
  }
  counter = 0;
  arrow.style.transform = `rotate(${counter}deg)`;
  isTimerActive = false;
  stopBtn.disabled = false;
  startBtn.disabled = false;
  timer.innerText = "00:00";
}

function restartTimer() {
  resetTimer();
  startTimer();
}

function randomBackgroundColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 255));
  }
  document.body.style = `background: rgb(${color[0]}, ${color[1]}, ${color[2]})`;
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
restartBtn.addEventListener("click", restartTimer);
