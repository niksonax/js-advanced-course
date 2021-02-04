/*

    Задание написать простой слайдер.

    Есть массив с картинками из которых должен состоять наш слайдер.
    По умолчанию выводим первый элeмeнт нашего слайдера в блок с id='slider'
    ( window.onload = func(){...} // window.addEventListener('load', function(){...}) )
    По клику на PrevSlide/NextSlide показываем предыдущий или следующий слайд соответствено.

    Для этого необходимо написать 4 функции которые будут:

    1. Срабатывать на событие load обьекта window и загружать наш слайд по умолчанию.
    2. RenderImage -> Очищать текущий контент блока #slider. Создавать нашу картинку и через метод аппенд чайлд вставлять её в слайдер.
    3. NextSlide -> По клику на NextSilde передавать currentPosition текущего слайда + 1 в функцию рендера
    4. PrevSlide -> Тоже самое что предыдущий вариант, но на кнопку PrevSlide и передавать currentPosition - 1
      + бонус сделать так что бы при достижении последнего и первого слада вас после кидало на первый и последний слайд соответственно.
      + бонсу анимация появления слайдов через навешивание дополнительных стилей

*/
// Selectors
const slider = document.getElementById("slider");
const prevSlideBtn = document.getElementById("PrevSlide");
const nextSlideBtn = document.getElementById("NextSlide");

// Global Variable
let currentPosition = 0;

// Window Loaded
window.addEventListener("load", function () {
  const defaultImage = document.createElement("img");

  defaultImage.src = ourSliderImages[0];
  defaultImage.classList.add("animate__animated", "animate__fadeIn");
  slider.appendChild(defaultImage);
});

// Utility Array
const ourSliderImages = [
  "images/cat1.jpg",
  "images/cat2.jpg",
  "images/cat3.jpg",
  "images/cat4.jpg",
  "images/cat5.jpg",
  "images/cat6.jpg",
  "images/cat7.jpg",
  "images/cat8.jpg",
];

// Add Event Listeners
prevSlideBtn.addEventListener("click", prevSlide);
nextSlideBtn.addEventListener("click", nextSlide);

// Functions
function renderImage(index) {
  slider.innerHTML = "";

  const image = document.createElement("img");
  image.src = ourSliderImages[index];
  image.classList.add("animate__animated", "animate__headShake");
  slider.appendChild(image);
}

function nextSlide() {
  if (currentPosition === ourSliderImages.length - 1) {
    currentPosition = 0;
    renderImage(currentPosition);
  } else {
    currentPosition++;
    renderImage(currentPosition);
  }
}

function prevSlide() {
  if (currentPosition === 0) {
    currentPosition = ourSliderImages.length - 1;
    renderImage(currentPosition);
  } else {
    currentPosition--;
    renderImage(currentPosition);
  }
}
