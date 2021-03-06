/*
  Задача:

  1. При помощи fetch получить данные:
     http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2

  2. Полученый ответ преобразовать в json вызвав метод .json с объекта ответа
  3. Выбрать случайного человека и передать в следующий чейн промиса
  4. Сделать дополнительный запрос на получение списка друзей человека
     http://www.json-generator.com/api/json/get/bTBBXQabKG?indent=2
     И дальше передать обьект:
      {
        name: userName,
        ...
        friends: friendsData
      }

     Подсказка нужно вызвать дополнительный fecth из текущего чейна.
     Для того что бы передать результат выполнения доп. запроса
     в наш первый промис используйте констуркцию:

      .then(
        response1 => {
          return fetch(...)
            .then(
              response2 => {
                ...
                формируете обьект в котором будут данные человека с
                первого запроса, например его name response1.name
                и друзья которые пришли из доп. запроса
              }
            )
        }
      )

  5. Вывести результат на страничку

  + Бонус. Для конвертации обьекта response в json использовать одну
    функцию.

*/

// fetch(url)
//   .then(testFunc)
//   .then(test2Func)
//   .then( res => {
//      return fetch()
//       .then( friendsResponse)
//       .then()
//   })
//   .then( func)

const url = "http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2";

function someFunc(obj) {
  console.log(obj);
}

fetch(url)
  .then((res) => res.json())
  .then((arr) => {
    const randomIndex = Math.floor(Math.random() * 9);
    const randomPerson = arr[randomIndex];
    return randomPerson;
  })
  .then((person) => {
    return fetch(
      "http://www.json-generator.com/api/json/get/bTBBXQabKG?indent=2"
    )
      .then((res) => res.json())
      .then((arr) => {
        const newObj = {};
        newObj.name = person.name;
        newObj.friends = arr[0].friends;
        someFunc(newObj);
      });
  });
