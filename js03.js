//TODO:=================01====================
//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name)greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній

// function letMeSeeYourName(callback) {
//     const result = prompt("Напишіть ім'я")
//     if (!result) {
//         return console.log("Помилка, введи ім'я")
//     }
//    return  console.log(callback(result))
// }
// function greet(name) {
//     return (`Привіт ${name}`)
// }

// letMeSeeYourName(greet)



// TODO:==============================================
// Напишіть дві функції
// makeProduct(name, price, callback) - приймає
// ім'я та ціну товару, а також callback.
// Функція створює об'єкт товару, додаючи йому унікальний
// ідентифікатор як id і викликає callback
// Передаючи йому створений об'єкт.
// showProduct(product) - коллбек приймаючий об'єкт
// продукту і логірующий їх у консоль

// function makeProduct(name, price, callback) {
//     const product = { name, price, id: Math.random() }
//     return callback(product)
// }

// function showProduct(product) {
//     return product
// }

// console.log(makeProduct("Ball", 10, showProduct))

//TODO:==============================================
//Виконай рефакторинг makeDish так, щоб не потрібно було
// Щоразу передавати ім'я шефа.
//Напишіть функцію makeShef(shefName), яка повертає функцію
//makeDish(dish), що пам'ятає ім'я шефа під час її виклику

// const makeDish = function (shefName, dish) {
// console.log(`${shefName} is cooking ${dish}`);
// };

// makeDish("Mango", "apple pie");
// makeDish("Poly", "muffins");


// function makeShef(shefName) {
//     console.log(shefName)
//     return function makeDish(dish) {
//     console.log(`${shefName} is cooking ${dish}`)
// }
// }

// const mango = makeShef("Mango")
// mango("bread")
// const poly = makeShef("Poly")
// poly("fish")
// console.log(typeof(mango))