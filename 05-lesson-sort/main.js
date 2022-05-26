// SORT METHOD / BUBBLE SORTING USING LOOPS

// reduce для того что бы сделать из массива в объект или изменить его структуру
// sort метод для сортировки массива

// Array.prototype.sort

const arr1 = [1, 2, 3, 4]
const arr2 = new Array(1, 2, 3, 4) //под капотом при создании массива, эта функция new Array вызывается для создания нового массива, одно и тоже что и arr1
// (new Array - глобальный объект функция-конструктор которая производит массив)
// используем слово new вызываем функцию конструктор

console.log(arr1) // у массива есть связь с глобальным ОБЪЕКТОМ Prototype см. консоль (функции)
//в свойстве массива prototype хранятся все методы массива. // Array.prototype.sort

const name = ["Michael", "Bob", "Alex", "Artur", "007", "alex", "Юрий", "игорь"]
console.log(name.sort()) // сортирует по-алфавиту, приоритет согласно unicode-table.com, дополнительных инструкций не требует

const numbers = new Array(99, 10, 333, 11, 8, -5)



const compareFunc = (a, b) => { // по возрастанию
    if (b >= a) {
        return -33 // любое отрицательное число если не хотим что-то менять
    } else {
        return 1 // любое положительное если хотим менять местами
    } // если в return положительное число - переместить
// return отрицательное число или 0 - порядок элементов нас устраивает
}

// если сортируем не строки, мы должны методу sort передать дополнительный параметр
/*console.log(numbers.sort(compareFunc))*/ //сортирует по возрастанию числа
// метод сорт возвращает ссылку тот же массив, не создает новый.

// или так array синтаксис
console.log(numbers.sort((a, b)=> b - a))


const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
];

console.log(students.sort((a, b)=> b.age - a.age)) // по убыванию возраста
console.log(students.sort((a, b)=> a.scores - b.scores).reverse()) // по возрастанию scores
// если нужно развернуть упорядоченный массив используем метод reverse()
console.log(students.sort((a, b)=> a.name < b.name ? -1 : 1)) //по алфавиту
console.log(students.sort((a, b)=> a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1)) //регистр независимая сортировка, что бы имя с маленькой буквы не было в конце списка
console.log(students.sort((a, b)=> a.isMarried ? -1 : 1)) // если возвращает ture, возвращает 1, если false, то преобразуется в 0 под капотом

// Reverse() использовать вместо повторной сортировки
// sort меняет исходный массив
// если сортируем строки sort работает без доп инструкций(функций)
// если сортируем все остальное то нужны инструкции, если возвращает 1 при сравнении a и b то местами меняем, если возвращает -1 то не меняем.
// изучить localeCompare();


// BUBBLE SORT

let number = [6, 4, 22, 3, 44, 66, 23, 1]

for (let j = 0; j < number.length -1 ; j++) {
    debugger
    /*let isSort = true;*/
    for (let i = 0; i < number.length - 1 - j; i++) { // - j внутренний цикл будет сокращаться
        if(number[i] > number[i + 1]) {
            /*isSort = false;*/
            [number[i + 1], number[i]] = [number[i], number[i + 1]]
        }
    }
    /*if(isSort) break;*/
}

console.log(number)

/*let temp = number[i + 1]
           number[i + 1] = number
           numbers[i] = temp
            */
// или так




