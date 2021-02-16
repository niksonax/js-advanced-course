/*
    Задание:
    1. При помощи методов изложеных ниже, переформатировать ITEA_COURSES в массив который содержит длину строк каждого из элементов.
    2. Отфильтровать массив ITEA_COURSES по алфавиту.
        + Бонусный бал. Вывести на страничку списком
    3. Реализация функции поиска по массиву ITEA_COURSES.
        + Бонусный бал. Вывести на страничку инпут и кнопку по которой будет срабатывать поиск.
*/

const input = document.getElementById("courseFinder");
const resultList = document.getElementById("result");

const ITEA_COURSES = [
  "Курс HTML & CSS",
  "JavaScript базовый курс",
  "JavaScript продвинутый курс",
  "JavaScript Professional",
  "Angular 2.4 (базовый)",
  "Angular 2.4 (продвинутый)",
  "React.js",
  "React Native",
  "Node.js",
  "Vue.js",
];

// Functions
function getStrLength(array) {
  return array.map((item) => item.length);
}

function renderCourses(array) {
  resultList.innerHTML = "";

  array.forEach((item) => {
    const newListItem = document.createElement("li");
    newListItem.innerText = item;
    resultList.appendChild(newListItem);
  });
}

function findCourse(e) {
  const inputText = e.target.value.toLowerCase();
  const filteredCourses = ITEA_COURSES.filter((item) =>
    item.toLowerCase().includes(inputText)
  );
  renderCourses(filteredCourses);
}

input.addEventListener("input", findCourse);

// TESTS
const strLengthsArr = getStrLength(ITEA_COURSES);
console.log(strLengthsArr);

ITEA_COURSES.sort();
console.log(ITEA_COURSES);

renderCourses(ITEA_COURSES);

/*
      Задание 2:
      Написать фильтр массива по:
      Актеру, продолжительности
  
      Бонус:
      Сделать графическую оболочку для программы:
      - Селект со списком актеров
      - Селект или инпут с продолжительностью
      - Результат в виде списка фильмов
  */

const stars = [
  "Elijah Wood",
  "Ian McKellen",
  "Orlando Bloom",
  "Ewan McGregor",
  " Liam Neeson",
  "Natalie Portman",
  "Ewan McGregor",
  "Billy Bob Thornton",
  "Martin Freeman",
];
const movies = [
  {
    name: "Lord of the Rigs",
    duration: 240,
    starring: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
  },
  {
    name: "Star Wars: Episode I - The Phantom Menace",
    duration: 136,
    starring: ["Ewan McGregor", " Liam Neeson", "Natalie Portman"],
  },
  {
    name: "Fargo",
    duration: 100,
    starring: ["Ewan McGregor", "Billy Bob Thornton", "Martin Freeman"],
  },
  {
    name: "V for Vendetta",
    duration: 150,
    starring: ["Hugo Weaving", "Natalie Portman", "Rupert Graves"],
  },
];

const actorSelector = document.getElementById("actorSelector");
const movieLengthSelector = document.getElementById("movieLengthSelector");
const moviesList = document.getElementById("moviesResult");

// Functions
function renderMovies(movies) {
  moviesList.innerHTML = "";

  movies.forEach((item) => {
    const newListItem = document.createElement("li");
    const movieStr = `
    <span>Movie: ${item.name}</span><br>
    <span>Duration: ${item.duration}</span><br>
    <span>Stars: ${item.starring.map((actor) => actor).join(", ")}</span>
    `;
    newListItem.innerHTML = movieStr;
    moviesList.appendChild(newListItem);
  });
}

function filterByActor(e) {
  const actor = e.target.value;
  const filteredMovies = movies.filter((movie) =>
    movie.starring.includes(actor)
  );
  renderMovies(filteredMovies);
}

function filterByDuration(e) {
  const duration = e.target.value;
  const filteredMovies = movies.filter((movie) => movie.duration == duration);
  renderMovies(filteredMovies);
}

// Fill in selectors
stars.forEach((actor) => {
  const option = new Option(actor, actor);
  actorSelector.appendChild(option);
});
movies.forEach((movie) => {
  const option = new Option(movie.duration, movie.duration);
  movieLengthSelector.appendChild(option);
});

// Event Listeners
actorSelector.addEventListener("input", filterByActor);
movieLengthSelector.addEventListener("input", filterByDuration);

renderMovies(movies);
