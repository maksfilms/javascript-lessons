

// массив объектов

const todoListID_1 = '45sdf-sdfs' // v1()
const todoListID_2 = '32sdf-sdfs' // v1()

const  todoList = [
    {
        id: todoListID_1,
        title: 'Whats to learn',
        filter: "all",
        /*tasks: [
            {id: 1, name: 'HTML', isDone: true},
            {id: 2, name: 'CSS', isDone: true},
            {id: 3, name: 'React', isDone: true},
        ]*/
    },
    {
        id: todoListID_2,
        title: 'Whats to learn',
        filter: "active",
        /*tasks: [
            {id: 1, name: 'HTML', isDone: true},
            {id: 2, name: 'CSS', isDone: true},
            {id: 3, name: 'React', isDone: true},
        ]*/
    }

]

// объект с массивами

const tasks = {
    [todoListID_1]: [      // ключ=значение, ключ будет - строка которая в переменной todoListID_1
        {id: 1, name: 'HTML', isDone: true},
        {id: 2, name: 'CSS', isDone: true},
        {id: 3, name: 'React', isDone: true},
    ],
    [todoListID_2]: [
        {id: 1, name: 'HTML', isDone: true},
        {id: 2, name: 'CSS', isDone: true},
        {id: 3, name: 'React', isDone: true},
    ],
    [100+500]: [1, 2, 3], // например ключ будет строка "100500'
    ['user name']: [1, 2, 3], // например ключ будет строка "user name", скобочная нотация позволяет использовать пробел
    //обращаться к свойству нужно через скобочную нотации
}

// array method reduce

const numbers = [1,2,3,4,5] // найти максимум массива или сумму или минимум массива (все эти задачи объединяет то что нам нужно получить одно значение)

const sum = numbers.reduce((acc,el) => acc + el, 0)
//15, acc - результат returna на предыдущей итерации, 0 - стартовое значение acc, метод возвращает acc

const max = numbers.reduce((acc, el) => acc > el ? el: el)
// acc = num[0] элемент массива стартовое значение, если acc после запятой не указан

let students = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },{
        id: 4,
        name: "John",
        age: 23,
        isMarried: false,
        scores: 100
    }
];


const bestSts = students.reduce((acc,el) => {
    if(el.scores > 100) {
        acc.push(el)
    }
    return acc
}, [] )

console.log(bestSts)



const str = students.reduce((acc, el) => {
    acc[el.id] = {...el}
    delete acc[el.id].id
    return acc
}, {})

console.log(str)

/*str будет = {
 "1": {
    name: 'Bob',
        age: 22,
    isMarried: true,
    scores: 85
 }*/
