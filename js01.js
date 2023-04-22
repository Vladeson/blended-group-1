// 1. Використовуючи функцію if...else,
// напишіть код, який запитуватиме:
// "Яка офіційна назва JavaScript?"
// Якщо користувач вводить "ECMAScript",
// то показати через alert: "Вірно!"
// інакше відобразити:"Не знаєте? ECMAScript!"

let nameJS = prompt("Яка офіційна назва JavaScript?");

if (nameJS === "ECMAScript") {
    alert("Вірно!");
} else {
    alert("Не знаєте? ECMAScript!");
}
console.log(nameJS);