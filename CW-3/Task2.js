/*
    Задание:

    По нажатию на кнопку, в блок с id chooseYourBlock выводить иконку с нажатой кнопки:

    House:  https://image.flaticon.com/icons/svg/149/149064.svg
    Tree: https://image.flaticon.com/icons/svg/620/620705.svg
    Plane: https://image.flaticon.com/icons/svg/579/579268.svg

    Под иконкой расположить еще одну кнопку, по нажатию на которую из соответствующего массива
    подтягивается случайная картинка с изображением в блок result.
    Предыдущий результат очищается.
*/

// Selectors
const buttons = document.querySelectorAll("button");
const iconBlock = document.getElementById("chooseYourBlock");
const resultBlock = document.getElementById("result");

// Utility Objects & Arrays
const iconsObj = {
  house: "https://image.flaticon.com/icons/svg/149/149064.svg",
  tree: "https://image.flaticon.com/icons/svg/620/620705.svg",
  plane: "https://image.flaticon.com/icons/svg/579/579268.svg",
};

const houseArray = [
  "https://static.pexels.com/photos/106399/pexels-photo-106399.jpeg",
  "https://i.pinimg.com/736x/7f/be/50/7fbe50ec634c65709d7fe6ac267c4e6f--large-garage-plans-house-plans-large-family.jpg",
  "https://i.ytimg.com/vi/Xx6t0gmQ_Tw/maxresdefault.jpg",
];
const planeArray = [
  "http://www.x-plane.com/wp-content/uploads/2014/08/B777-200ER.png",
  "https://media.cntraveler.com/photos/57067c1e9adc6caf5afe3f4c/master/pass/plane-landing-cr-getty-sb10062851ai-001.jpg",
  "https://media.wired.com/photos/59323264a31264584499367f/master/w_1024,c_limit/diesel-plane-inline.jpg",
];
const treeArray = [
  "https://static.pexels.com/photos/56875/tree-dawn-nature-bucovina-56875.jpeg",
  "https://c1.staticflickr.com/8/7218/7184786016_1ddab461e8_b.jpg",
  "https://images.unsplash.com/photo-1458966480358-a0ac42de0a7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
];

const linkObj = {
  house: houseArray,
  plane: planeArray,
  tree: treeArray,
};

// Functions
function showIcon(e) {
  iconBlock.innerHTML = "";
  resultBlock.innerHTML = "";

  const btn = e.target;
  const imageType = btn.innerText.toLowerCase();
  const imageLink = iconsObj[imageType];
  const image = document.createElement("img");
  const randomBtn = document.createElement("button");

  image.src = imageLink;
  image.width = "300";
  randomBtn.innerText = "Random image";

  iconBlock.appendChild(image);
  iconBlock.appendChild(document.createElement("br"));
  iconBlock.appendChild(randomBtn);

  randomBtn.addEventListener("click", showRandomImage.bind(null, imageType));
}

function showRandomImage(imgType) {
  resultBlock.innerHTML = "";

  const randomIndex = Math.floor(Math.random() * 3);
  const image = document.createElement("img");
  const imageSrc = linkObj[imgType][randomIndex];

  image.width = "500";
  image.src = imageSrc;

  resultBlock.appendChild(image);
}

// Event Listeners
buttons.forEach((btn) => {
  btn.addEventListener("click", showIcon);
});
