// Задача 2: Получить от пользователя два числа и вывести
// в диалоговое окно сумму значений, которые ввел пользователь, 
// вывод должен выглядеть так (пример):Результат сложения чисел 5 и 2 равен 7.

// const a = Number.parseInt(prompt("введите число а"));
// // const a = +prompt("введите число а"); тоже самое, что и 5 строка ("+" превращает строку в число)
// const b = Number.parseInt(prompt("введите число b"));
// const sum = a + b;
// alert("Результат сложения чисел " + a + " + "+b +" = " +sum); // 1 Вариант написания
// alert(`Результат сложения чисел ${a} + ${b} = ${sum}`); // 2 Вариант написания

// function sumof(num1, num2) {
//     // const s = num1 + num2;
//     return num1 + num2;
//     // return s;
// }
// const a = Number.parseInt(prompt("введите число а"));
// const b = Number.parseInt(prompt("введите число b"));
// // sumof();
// alert(`Результат сложения чисел ${a} + ${b} = ${sumof(a, b)}`);

// Задача 4: вывести на экран в диалоговом окне текст с сообщением 
// “Вам хорошо живется?” и кнопками «ОК», «Отмена», 
// для чего необходимо использовать confirm.- При нажатии на кнопку “ОК” 
// вывести в диалоговом окне текст с сообщением “Тогда мы идем к вам!”.- 
// При нажатии на кнопку “Отмена” вывести в диалоговом окне текст
//  с сообщением “Ну вы держитесь там!”.

// const answer = confirm("Вам хорошо живется")


// Задача 5: перепишите код, используя конструкцию switch-case, 
// запрашивая продукт через диалоговое окно.

// {/* <script>
// let product = "Бананы";

// if (product == "Мандарины") {
//   alert('Мандарины стоят 100 руб/кг.');
// } else if (product == "Бананы") {
//   alert('Бананы и груши стоят 70 руб/кг.');
// } else if (product == "Груши") {
//   alert('Бананы и груши стоят 70 руб/кг.');
// } else {
//   alert('Нет такого продукта.');
// }
// </script>  */}

// let product = "Бананы";

// switch (product) {
//     case "Мандарины": alert('Мандарины стоят 100 руб/кг.');
//         break;
//     case "Бананы": alert('Бананы и груши стоят 70 руб/кг.');
//         break;
//     case "Груши": alert('Бананы и груши стоят 70 руб/кг.');
//         break;
//     default: alert('Нет такого продукта.');
// }

// const product = prompt("Какой продук вам нужен ?");

// switch (product) {
//     case "Мандарины":
//         alert('Мандарины стоят 100 руб/кг.');
//         break;
//     case "Бананы":
//     case "Груши":
//     case "Хрен":
//         alert('Бананы, хрен и груши стоят 70 руб/кг.');
//         break;
//     default:
//         alert('Нет такого продукта.');
// }

// Задача 3: Написать функцию, которая принимает имя пользователя 
// при ее вызове и выводит сообщение с приветствием пользователя по имени в консоль.
// Проверить работоспособность функции.

function hello(userName) {
   // console.log(`Hello ${userName}`);
   alert(`Hello ${userName}`);    
}

const user = prompt("Enter your name: ");
hello(user);

