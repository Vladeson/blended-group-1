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

//Напиши клас Client який створює об'єкт
//з ​​властивостями login email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email

// class Client {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get dataClient() {
//     return { login: this.#login, email: this.#email };
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const newClient = new Client("userlogin", "user@mail.ua");
// console.log(newClient.dataClient);
// newClient.login = "newUserlogin";
// newClient.email = "upoly@mail.ua";
// console.log(newClient.dataClient);

//TODO:=============================================
//Напиши клас Notes який управляє колекцією нотаток у
//властивості items.
//Нотатка - це об'єкт із властивостями text і priority.
//Додай класу статичний метод Priopity,
//який буде повертати об'єкт із пріоритетами.
//Додай методи addNote(note), removeNote(text)
//updatePriority(text, newPriority)

// class Notes {
//   static Priopity() {
//     return { HIGH: "high", LOW: "low" };
//   }
//   constructor() {
//     this.items = [];
//   }

//   addNote(note) {
//     this.items.push(note);
//   }

//   removeNote(text) {
//     const toRemove = this.items.findIndex((item) => item.text === text);

//     if (toRemove !== -1) {
//       this.items.splice(toRemove, 1);
//     }
//   }

//   updatePriority(text, newPriority) {
//     const toUpdate = this.items.findIndex((item) => item.text === text);
//     if (toUpdate !== -1) {
//       this.items[toUpdate].priority = newPriority;
//     }
//   }
// }

// const note = new Notes();
// note.addNote({ text: "to do", priority: Notes.Priopity().HIGH });
// note.addNote({ text: "to resolve", priority: Notes.Priopity().LOW });
// note.removeNote("to do");
// console.table(note.items);
// note.updatePriority("to resolve", Notes.Priopity().HIGH);
// console.table(note.items);
