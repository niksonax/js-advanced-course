/*
    Задание 1:

    Написать обьект Train у которого будут свойства:
    -имя,
    -скорость езды
    -количество пассажиров
    Методы:
    Ехать -> Поезд {name} везет { количество пассажиров} со скоростью {speed}
    Стоять -> Поезд {name} остановился. Скорость {speed}
    Подобрать пассажиров -> Увеличивает кол-во пассажиров на Х
*/

const train = {
  name: "Hundai",
  speed: 121,
  passangers: 84,
  go: function () {
    console.log(
      `Поезд ${this.name} везет ${this.passangers} со скоростью ${this.speed}.`
    );
  },
  stop: function () {
    this.speed = 0;
    console.log(`Поезд ${this.name} остановился. Скорость ${this.speed}.`);
  },
  takePassengers: function (newPassangers) {
    this.passangers += newPassangers;
  },
  addSpeed: function (newSpeed) {
    this.speed += newSpeed;
  },
};

train.go();
train.stop();
train.takePassengers(35);
train.addSpeed(124);
train.go();
