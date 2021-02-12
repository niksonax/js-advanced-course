/*
    Задание:

    1. Сгенерировать список стран в Select countries
    2. При выборе страны генерировать еще один Select со списком
    городов этой страны и вывести этот селект в блок result
    3. При выборе города нужно случайно рандомить температуру от
    -10 градусов до +40. Если температура

    -10 до 0 то 'Солнечно' 'Легкий снегопад' 'Сильный снегопад'
    0 до 30 то  'Солнечно' 'Дождь' 'Ветер' 'Сильный дождь'
    30 до 40 то 'Солнечно' 'Засуха' 'Ветер'

    4. Вывести сообщение на страничку
    {Country}. В {City} {Weather} {Temperature} градусов.
    Ukraine. В Kyiv Солнечно -10 градусов

    + бонус добавить красивые картинки с погодой
*/

// Utility Objects & Arrays
const countries = ["Ukraine", "Poland", "USA"];

const cities = {
  ukraineCity: ["Kyiv", "Lviv", "Odesa", "Charkiv"],
  polandCity: ["Warszawa", "Poznan", "Krakow", "Katowice"],
  usaCity: ["New York", "Los Angeles", "Las Vegas", "Chicago"],
};

const weatherRange = {
  cold: ["солнечно", "легкий снегопад", "сильный снегопад"],
  middle: ["солнечно", "дождь", "ветер", "сильный дождь"],
  hot: ["солнечно", "засуха", "ветер"],
};

// Selectors
const selector = document.getElementById("countries");
const citiesDiv = document.getElementById("cities");
const imageDiv = document.querySelector(".weather-image");
const resultDiv = document.getElementById("result");
const messageDiv = document.getElementById("message");

// Functions
// Generating counrties selector
function generateCountries() {
  countries.forEach((country) => {
    const option = new Option(country, country.toLowerCase());
    selector.appendChild(option);
  });
}

// Generating cities selector
function generateCities() {
  const selectorCities = document.createElement("select");
  const country = selector.value;
  const countryCities = cities[`${country}City`];

  countryCities.forEach((city) => {
    const option = new Option(city, city);
    selectorCities.appendChild(option);
  });

  // add Event Listener
  selectorCities.addEventListener("input", generateTemperature);

  citiesDiv.innerHTML = "";
  citiesDiv.appendChild(selectorCities);
}

function generateTemperature(e) {
  const temperature = Math.floor(Math.random() * 51) - 10;
  const weatherIndex = Math.ceil(Math.random() * 3);
  const country =
    selector.value.charAt(0).toUpperCase() + selector.value.slice(1);
  const city = e.srcElement.value;
  const message = document.createElement("p");

  console.log(temperature);
  console.log(weatherIndex);
  if (temperature >= -10 && temperature < 0) {
    const messageText = `${country}. В ${city} сейчас ${
      weatherRange.cold[weatherIndex - 1]
    }, ${temperature} градусов.`;
    message.innerText = messageText;
    renderPicture(weatherRange.cold[weatherIndex - 1]);
  } else if (temperature >= 0 && temperature < 30) {
    const messageText = `${country}. В ${city} сейчас ${weatherRange.middle[weatherIndex]}, ${temperature} градусов.`;
    message.innerText = messageText;
    renderPicture(weatherRange.middle[weatherIndex]);
  } else if (temperature >= 30 && temperature < 40) {
    const messageText = `${country}. В ${city} сейчас ${
      weatherRange.hot[weatherIndex - 1]
    }, ${temperature} градусов.`;
    message.innerText = messageText;
    renderPicture(weatherRange.hot[weatherIndex - 1]);
  }

  messageDiv.innerHTML = "";
  messageDiv.appendChild(message);
  resultDiv.appendChild(messageDiv);
}

function renderPicture(weatherType) {
  imageDiv.innerHTML = "";
  const image = document.createElement("img");
  console.log(weatherType);
  switch (weatherType) {
    case "солнечно":
      image.src =
        "https://ptzgovorit.ru/sites/default/files/original_nodes/11816.jpg";
      break;
    case "дождь":
      image.src =
        "https://yep.uz/wp-content/uploads/2019/04/Dozhdi-v-Uzbekistane.jpg";
      break;
    case "сильный дождь":
      image.src =
        "https://s3.amazonaws.com/static.beavercountyradio.com/wp-content/uploads/2019/05/27071943/rain.jpg";
      break;
    case "ветер":
      image.src =
        "https://www.pecssun.hu/media/2019/03/10-148493-windy-weather-continues/1.jpg";
      break;
    case "легкий снегопад":
      image.src =
        "https://www.wwno.org/sites/wwno/files/styles/x_large/public/201712/night-933211_1920.jpg";
      break;
    case "сильный снегопад":
      image.src =
        "https://img.huffingtonpost.com/asset/5dc822fe210000415434c79c.jpeg?ops=scalefit_630_noupscale";
      break;
    case "засуха":
      image.src =
        "https://regnum.ru/uploads/pictures/news/2018/12/25/regnum_picture_1545715460218174_normal.jpg";
      break;
    default:
      break;
  }
  imageDiv.appendChild(image);
}

// Event Listener
window.addEventListener("load", generateCountries);
selector.addEventListener("input", generateCities);
