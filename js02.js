// 1. У нас є об'єкт, в якому зберігатимуться зарплати
// Нашої команди
// Напишіть код для сумування всіх зарплат і
// Збережіть його результат у змінній sum.
// Якщо об'єкт salaries порожній, то результат має бути 0
// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 170,
// };

// let sum = 0

// for (const value of Object.values(salaries)) {
//     sum += value
// }

// console.log(sum)

// 2. Напишіть функцію, яка приймає два аргументи і повертає всі числа,
//  які діляться на дільник.Перший аргумент – це масив чисел, а другий – дільник.

// function fun(array, divisor) {
//     const result = []
//     for (const number of array) {
//         if (number % divisor === 0) {
//             result.push(number)

//         }
//     }
//     return result
// }
// console.log(fun([1, 2, 3, 4, 5, 6, 7, 8], 2));

// Паліндром

// Паліндром - слово, речення чи послідовність символів,
//     яка абсолютно однаково читається як у звичному напрямку,
//     так і у зворотному.Наприклад, "Anna" - це паліндром, а "table" і "John" - ні.

// function palindrom(string) {
//     string = string.toLowerCase()
//     const result = string.split("").reverse().join("")
//     console.log(result)
//     if (result === string) {
//         return true
//     } else {
//         return false
//     }

// }

// console.log(palindrom("Vladyslav"))

// FizzBuzz
// Потрібно перебрати усі числа  від 1 до n. Треба вивести у консоль
// числа, де n - це ціле число, з такими умовами:

// виведення fizz замість чисел, кратних 3;
// виведення buzz замість чисел, кратних 5;
// виведення fizzbuzz замість чисел, кратних як 3, і 5.

// function fizzBuzz(num) {
//     for (let i = 1; i <= num; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("fizzBuzz")
//         } else if (i % 3 === 0) {
//             console.log("fizz")
//         } else if (i % 5 === 0) {
//             console.log("buzz")
//         } else {
//             console.log(i)
//         }

//     }
// }
// fizzBuzz(45)

//TODO:===========================
// Створіть масив styles з елементами «Джаз» та «Блюз».
//Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
//Видалить перший елемент масиву і виведіть його в консоль.
//Вставте «Реп» і «Реггі» на початок масиву.
// const styles = ["jazz", "Bluz"];
// styles.push("RocknRoll");
// // styles[1] = "Classic";
// styles.splice(1, 1, "Classic");
// console.log(styles.slice(0, 1));
// styles.unshift("Rep", "Reggy");
// console.log(styles);

//TODO:==========================
//Напишіть функцію min(a, b), яка повертає
//менше з чисел a, b
//Потрібно додати перевірку, що функція отримує числа
// function min(a, b) {
//   if (Number.isInteger(a) && Number.isInteger(b)) {
//     return Math.min(a, b);
//   }
//   return "`Один з аргументів не є числом`";
// }
// console.log(min(20, "ghhgjh"));

//TODO:==============================
// Напишіть функцію pow(x,n), яка повертає x до ступеня n.
// Інакше висловлюючись, множить x він n разів і повертає результат.
// function pow(x, n) {
//   return console.log(Math.pow(x, n));
// }
// pow(2, 3);

// 6. Пошук голосних

// Потрібно написати функцію, яка приймає рядок як аргумент і повертає кількість
// голосних, які містяться в рядку.
// Голосними є "a", "e", "i", "o", "u".
// function letters(string = "") {
//   let counter = 0;

//   const vowels = ["a", "e", "i", "o", "u"];
//   for (const char of string.toLowerCase()) {
//     if (vowels.includes(char)) {
//       counter += 1;
//     }
//   }
//   return counter;
// }
// console.log(letters("oiayurtgjkjooouuynlj"));

//Напишіть ф-цію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів та
//рядок під назвою каменю.
//Функція  повертає загальну вартість каменів
//з таким ім'ям, ціною та кількістю з об'єкта
// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 6 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 150, quantity: 100 },
// ];
// function calcTotalPrice(stones, stonesName) {
//   for (const stone of stones) {
//     const { name, price, quantity } = stone;
//     if (stonesName === name) {
//       return price * quantity;
//     }
//   }
// }
// function add(newName, newPrice = 10, newQuant = 20) {
//   const newStone = { name: newName, price: newPrice, quantity: newQuant };
//   stones.push(newStone);
// }
// console.log(calcTotalPrice(stones, "Изумруд"));
// add("Diamond");
// console.log(stones);
