
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

function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzBuzz")
        } else if (i % 3 === 0) {
            console.log("fizz")
        } else if (i % 5 === 0) {
            console.log("buzz")
        } else {
            console.log(i)
        }
        
    }
}
fizzBuzz(45)