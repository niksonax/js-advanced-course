/*

    Задание "Шифр цезаря":

    https://uk.wikipedia.org/wiki/%D0%A8%D0%B8%D1%84%D1%80_%D0%A6%D0%B5%D0%B7%D0%B0%D1%80%D1%8F

    Написать функцию, которая будет принимать в себя слово и количество
    симовлов на которые нужно сделать сдвиг внутри.

    Написать функцию дешефратор которая вернет слово в изначальный вид.

    Сделать статичные функции используя bind и метод частичного
    вызова функции (каррирования), которая будет создавать и дешефровать
    слова с статично забитым шагом от одного до 5.


    const isMobile = document.innerWidth < 768;

    Например:
      encryptCesar( 3, 'Word');
      encryptCesar1(...)
      ...
      encryptCesar5(...)

      decryptCesar1(3, 'Sdwq');
      decryptCesar1(...)
      ...
      decryptCesar5(...)

      "а".charCodeAt(); // 1072
      String.fromCharCode(189, 43, 190, 61) // ½+¾

*/

// Encrypting (----WORKS PROPERLY ONLY WITH ENGLISH WORDS!----)
function encryptCeasar(shift, word) {
  const lettersArr = word.split("");
  const newLettersArr = [];

  if (shift < 0) {
    return encryptCeasar(shift + 26, word);
  }

  lettersArr.forEach((letter) => {
    // If letter
    if (letter.match(/[a-z]/i)) {
      const letterCode = letter.charCodeAt();

      // Uppercase letters
      if (letterCode >= 65 && 90 >= letterCode) {
        const newLetter = String.fromCharCode(
          ((letter.charCodeAt() - 65 + shift) % 26) + 65
        );
        newLettersArr.push(newLetter);
      }

      // Lowercase letters
      if (letterCode >= 97 && 122 >= letterCode) {
        const newLetter = String.fromCharCode(
          ((letter.charCodeAt() - 97 + shift) % 26) + 97
        );
        newLettersArr.push(newLetter);
      }
    }
  });

  const newWord = newLettersArr.join("");
  return newWord;
}

// Static Encrypt Functions
const encryptCeasar1 = encryptCeasar.bind(null, 1);
const encryptCeasar2 = encryptCeasar.bind(null, 2);
const encryptCeasar3 = encryptCeasar.bind(null, 3);
const encryptCeasar4 = encryptCeasar.bind(null, 4);
const encryptCeasar5 = encryptCeasar.bind(null, 5);

// Decrypting
function decryptCeasar(unshift, word) {
  return encryptCeasar(-unshift, word);
}

// Static Decrypt Functions
const decryptCeasar1 = decryptCeasar.bind(null, 1);
const decryptCeasar2 = decryptCeasar.bind(null, 2);
const decryptCeasar3 = decryptCeasar.bind(null, 3);
const decryptCeasar4 = decryptCeasar.bind(null, 4);
const decryptCeasar5 = decryptCeasar.bind(null, 5);

// Testing
console.log('encryptCeasar(3, "zaxer"):', encryptCeasar(3, "zaxer")); // cdahu
console.log('encryptCeasar3("zaxer"):', encryptCeasar3("zaxer")); // cdahu

console.log('decryptCeasar(3, "cdahu"):', decryptCeasar(3, "cdahu")); // zaxer
console.log('decryptCeasar3("cdahu"):', decryptCeasar3("cdahu")); // zaxer
