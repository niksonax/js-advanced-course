/*
    Задание:

    Написать функцию конструктор, которая будет иметь приватные и публичные свойства.
    Публичные методы должны вызывать приватные.

    Рассмотрим на примере планеты:

      - На вход принимаются параметр Имя планеты.

      Создается новый обьект, который имеет публичные методы и свойства:
      - name (передается через конструктор)
      - population ( randomPopulation());
      - rotatePlanet(){
        let randomNumber = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
        if ( (randomNumber % 2) == 0) {
          growPopulation();
        } else {
          Cataclysm();
        }
      }

      Приватное свойство:
      populationMultiplyRate - случайное число от 1 до 10;

      Приватные методы
      randomPopulation -> Возвращает случайное целое число от 1.000 до 10.000
      growPopulation() {
        функция которая берет приватное свойство populationMultiplyRate
        которое равняется случайному числу от 1 до 10 и умножает его на 100.
        Дальше, число которое вышло добавляет к популяции и выводит в консоль сообщение,
        что за один цикл прибавилось столько населения на планете .
      }
      Cataclysm(){
        Рандомим число от 1 до 10 и умножаем его на 250;
        То число которое получили, отнимаем от популяции.
        В консоль выводим сообщение - от катаклизма погибло Х человек на планете.
      }
*/

function Planet(name) {
  this.name = name;
  this.population = randomPopulation();
  this.rotatePlanet = function () {
    const randomNumber = Math.floor(Math.random() * (1000 - 1 + 1)) + 1; // from 0 to 1.000
    if (randomNumber % 2 == 0) {
      growPopulation();
    } else {
      Cataclysm();
    }
  };

  let populationMultiplyRate = Math.floor(Math.random() * 10) + 1; // from 1 to 10

  function randomPopulation() {
    return Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
  } // from 1.000 to 10.000
  const growPopulation = () => {
    populationMultiplyRate *= 100;
    this.population += populationMultiplyRate;
    console.log(
      `${this.name} population increased by ${populationMultiplyRate}. Current population ${this.population}`
    );
  };
  const Cataclysm = () => {
    let randomNumber = Math.floor(Math.random() * 10) + 1; // from 1 to 10
    randomNumber *= 250;
    this.population -= randomNumber;
    console.log(
      `${this.name} population decreased by ${randomNumber} during the cataclysm. Current population ${this.population}`
    );
  };
}

const Aurora = new Planet("Aurora");

Aurora.rotatePlanet();
Aurora.rotatePlanet();
Aurora.rotatePlanet();
console.dir(Aurora);
