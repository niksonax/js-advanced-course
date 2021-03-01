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
  speed: 118,
  passangers: 224,
  go: function () {
    this.addSpeed(118);
    console.log(
      `Поезд марки ${this.name} везет ${this.passangers} пассажиров со скоростью ${this.speed}.`
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
train.go();
