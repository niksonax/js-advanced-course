/*
  Задание:

  Написать класс SuperDude который как аргумент принимает два параметра:
    - Имя
    - Массив суперспособностей которые являются обьектом.

    Модель суперспособности:
      {
        // Имя способности
        name:'Invisibility',
        // Сообщение которое будет выведено когда способность была вызвана
        spell: function(){ return `${this.name} hide from you`}
      }

    В конструкторе, нужно:
    - сделать так, что бы имя нельзя было перезаписывать и присвоить ему то
      значение которое мы передали как аргумент.

    - перебрать массив способностей и на каждую из них создать метод для этого
      обьекта, используя поле name как название метода, а spell как то,
      что нужно вернуть в console.log при вызове этого метода.
    - все способности должны быть неизменяемые

    - бонус, создать конструктор суперспособностей -> new Spell( name, spellFunc );
*/

class SuperDude {
  constructor(name, superpowers) {
    Object.defineProperty(this, "name", { value: name });

    for (const superpower of superpowers) {
      Object.defineProperty(this, superpower.name, { value: superpower.spell });
    }
  }
}

class Spell {
  constructor(name, spellFunc) {
    this.name = name;
    this.spell = spellFunc;

    superPowers.push(this);
  }
}

let superPowers = [
  {
    name: "Invisibility",
    spell: function () {
      return `${this.name} hide from you`;
    },
  },
  {
    name: "superSpeed",
    spell: function () {
      return `${this.name} running from you`;
    },
  },
  {
    name: "superSight",
    spell: function () {
      return `${this.name} see you`;
    },
  },
  {
    name: "superFroze",
    spell: function () {
      return `${this.name} will froze you`;
    },
  },
  {
    name: "superSkin",
    spell: function () {
      return `${this.name} skin is unbreakable`;
    },
  },
];

let superStrength = new Spell("superStrength", function () {
  return `${this.name} is super mighty`;
});

let Luther = new SuperDude("Luther", superPowers);
// Тестирование: Методы должны работать и выводить сообщение.
console.dir(Luther);
console.log(Luther.superSight());
console.log(Luther.superSpeed());
console.log(Luther.superFroze());
console.log(Luther.Invisibility());
console.log(Luther.superSkin());
console.log(Luther.superStrength());
