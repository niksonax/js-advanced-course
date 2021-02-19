/* 
Реализовать наследование по примеру приведенном на картинку inheritance

class Man должен иметь поля
   name            
   age
   country
+ методы с картинки

Каждый метод должен выводить в консоле все поля + имя метода
WALK:
   console.log(`Hi! My name is ${name}, and Im {age} years old. Im from ${country}, and I like to WALK a lot`)
*/

class Man {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  walk() {
    console.log(
      `Hi! My name is ${this.name}, and I'm ${this.age} years old. I'm from ${this.country}, and I like to WALK a lot`
    );
  }
  eat() {
    console.log(
      `Hi! My name is ${this.name}, and I'm ${this.age} years old. I'm from ${this.country}, and I like to EAT a lot`
    );
  }
  drink() {
    console.log(
      `Hi! My name is ${this.name}, and I'm ${this.age} years old. I'm from ${this.country}, and I like to DRINK a lot`
    );
  }
}

class Soldier extends Man {
  constructor(name, age, country) {
    super(name, age, country);
  }

  shoot() {
    console.log(
      `Hi! My name is ${this.name}, and I'm ${this.age} years old. I'm from ${this.country}, and I like to SHOOT a lot`
    );
  }
}

class Doctor extends Man {
  constructor(name, age, country) {
    super(name, age, country);
  }

  cure() {
    console.log(
      `Hi! My name is ${this.name}, and I'm ${this.age} years old. I'm from ${this.country}, and I like to CURE a lot`
    );
  }
}

const JohnMan = new Man("John", 32, "Canada");
const CharlesSoldier = new Soldier("Charles", 25, "France");
const JuzoDoctor = new Doctor("Juzo", 47, "Japan");

JohnMan.walk();
CharlesSoldier.drink();
CharlesSoldier.shoot();
JuzoDoctor.eat();
JuzoDoctor.cure();
