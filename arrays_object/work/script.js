
const person = {
    firstName: 'Андрей',
    lastName: 'Сидоров',
    age: 35,
    // speak: function () {
    //     console.log('person can speak');
    // }
    speak() {
        console.log('person can speak');
    },
    walk() {
        console.log('person can walk');
    },
    hobbies: ['Рисование', 'Спорт', 'Шашки']
};

// person.city = 'Gomel';
// person.firstName = 'Егор';

// delete person.hobbies

// console.log(person.firstName);
// console.log(person['lastName']);

// console.log(person);

// person.speak();
// person.walk();

// console.log(typeof person)


// let obj1 = new Object({ name: 'david', lastName: 'Duchovny' }); // => конструктор объекта

// let obj2 = Object.create({});

// obj2.name = 'David';
// obj2.lastName = 'Duchovny';


// console.log(obj1);

// console.log(obj2);





// Создать объект книга
// у книги есть: название, авторы (массив строк), год, описание, опубликована ли она
// метод: бронирование книги с сообщением "эту книгу можно забронировать"


// const book = {
//     title: 'Гарри Поттер',
//     authors: ['Джоан Роулинг'],
//     year: 2001,
//     description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, eius',
//     published: true,
//     reserve() {
//         console.log('эту книгу можно забронировать');
//     }
// };

// book.reserve();

// console.log(book);




// copyWithin

// const colors = ["Green", "Red", "Blue", "Pink"];
// colors.copyWithin(2, 0); // => Green,Red,Green,Red
// console.log(colors);


const users = [
    { name: 'Анна', online: true },
    { name: 'Михаил', online: false },
    { name: 'Саша', online: false }
];


// every()

// const isAllUsersOnline = users.every((user) => {
//     return user.online;
// });


// console.log(isAllUsersOnline); // => true



// some()

// const isSomeOnline = users.some((user) => {
//     return user.online;
// });

// console.log(isSomeOnline);




// find ()

// const numbers = [1, 5, 3, 4, 2, 6];

// const result = numbers.find((elem) => {
//     return elem === 2;
// });


// console.log(result); // => 2




// findIndex ()

// const numbers = [1, 5, 3, 4, 2, 6];

// const result = numbers.findIndex((elem) => {
//     return elem === 2;
// });

// console.log(result); // => 4




// sort() - отсортировал исходный массив, мутирует исходный массив
// const numbers = [1, 5, 3, 4, 2, 6];

// function sortFunc (a, b) {
//     return b - a;
// }

// console.log(numbers.sort(sortFunc));





// forEach () - возвращает undefined

// const numbers = [1, 5, 3, 4, 2, 6];

// const result = numbers.forEach((num) => {
//     const square = num * num;
//     console.log('Квадрат числа равен: ' + square);
// });

// console.log(result);



// map () - возвращает новый массив после какой-то трансормации


// const numbers = [1, 5, 3, 4, 2, 6];

// const result = numbers.map((num) => {
//     return num * num;
// });

// console.log('result', result);
// console.log('numbers', numbers);



// filter()

// const languages = ["Java", "TypeScript", "C#", "JavaScript"];

// const jLanguages = languages.filter((item, index, arr) => {
//     console.log("Текущий элемент " + item)
//     console.log("Индекс " + index)
//     console.log("Массив " + arr)
//     return index >= 3
//   })

// console.log(jLanguages);




// reduce() 


// const numbers = [-1, 5, 3, 4, 2, 6];

// const sum = numbers.reduce((currentSum, currentNumber) => {
//     if (currentNumber > 0) {
//         return currentSum + currentNumber;
//     } else {
//         return currentSum;
//     }

// }, 0);


// console.log('Сумма: ', sum)


// const students = [
//     { studentName: 'Гриша', raiting: 5 },
//     { studentName: 'Миша', raiting: 2 },
//     { studentName: 'Петя', raiting: 6 },
//     { studentName: 'Вася', raiting: 11 },
//     { studentName: 'Георгий', raiting: 3 },
//     { studentName: 'Матвей', raiting: 9 },
// ];


// const result = students.reduce((acc, currentStudent, index, arr) => {
//     const sum = acc + currentStudent.raiting;
//     if (index === arr.length - 1) {
//         return sum / arr.length;
//     } else {
//         return sum;
//     }
// }, 0);

// console.log(result);


// Спросить у пользователя 5 чисел, ПОСЛЕ ввода всех чисел, проверить все ли из них преобразуемы в число (могут быть числами)

// const arr = [];

// for (let i = 0; i < 5; i++) {
//     arr.push(prompt('Enter a number'));
// }

// const result = arr.every((str) => {
//     return !isNaN(str) && str !== null && str !== '';
// });

// console.log(result);



// Создать функцию, которая принимаем имя человека и возвращает 'Hello' если длина имени меньше 5, и 'Hi' если больше


const greet = userName => userName.length > 5 ? `Hi ${userName}` : `Hello ${userName}`;

console.log(greet('Гришка'));