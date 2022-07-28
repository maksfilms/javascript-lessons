const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
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
        scores: 100
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}


console.log("1 task:")
//1. Создайте поверхностную копию объекта user
let copyUser = {...user}

//Проверка:
console.log(user===copyUser)
console.log(user.friends===copyUser.friends)


console.log('2 task:')
//2. Полная (глубокая) копия объекта user
let deepCopyUser = {...user, friends: [...user.friends]};

//Проверка:
console.log(user===deepCopyUser)
console.log(user.friends===deepCopyUser.friends)


console.log('3 task:')
//3. Поверхностная копия массива students
let copyStudents = [...students];

//Проверка:
console.log(copyStudents[0] === students[0])
console.log(copyStudents[1].name === students[1].name)
console.log(copyStudents[2] === students[2])
console.log(copyStudents[3] === students[3])
console.log(copyStudents[3] === students[3])


console.log('4 task:')
//4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map(el => ({...el}))

//Проверка:
console.log(deepCopyStudents[0] === students[0])
console.log(deepCopyStudents[1] === students[1])
console.log(deepCopyStudents[2] === students[2])
console.log(deepCopyStudents[3] === students[3])


console.log('5 task:')
// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

//5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)
let sortedByName = deepCopyStudents.sort((a, b)=> a.name < b.name ? -1 : 1)
console.log(sortedByName);


console.log('5a task:')
//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
let sortedByScores = deepCopyStudents.sort((a, b) => a.scores < b.scores ? 1 : -1);
console.log(sortedByScores);


console.log('6 task:')
//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let bestStudents = deepCopyStudents.filter(s => s.scores >= 100);
console.log(bestStudents)


console.log('6a task:')
//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents = deepCopyStudents.splice(0 ,3 );
console.log(topStudents)
console.log(deepCopyStudents)


console.log('6b task:')
//6b. Объедините массивы deepCopyStudents и topStudents так,
//чтоб сохранился порядок сортировки (spread-оператор || concat)
let newDeepCopyStudents = topStudents.concat(deepCopyStudents);
console.log(newDeepCopyStudents)


console.log('7b task:')
//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = newDeepCopyStudents.filter(e => !e.isMarried);
console.log(notMarriedStudents)


console.log('8 task:')
//8. Сформируйте массив имён студентов (map)
let studentsNames = students.map(e => e.name);
console.log(studentsNames)


console.log('8a task:')
//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
let namesWithSpace = studentsNames.join(' ');
console.log(namesWithSpace)
let namesWithComma  = studentsNames.join(',');;
console.log(namesWithComma)



console.log('9 task:')
//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = deepCopyStudents.map(el => ({...el, isStudent: true}));
console.log(trueStudents)


console.log('10 task:')
//10. Nick женился. Выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = students.map(el => el.name === 'Nick' ? {...el, isMarried: true} : el);
console.log(studentsWithMarriedNick)


console.log('11 task:')
//11. Найдите студента по имени Ann (find)
let ann = students.find(s => s.name === 'Ann');
console.log(ann)


console.log('12 task:')
//12. Найдите студента с самым высоким баллом (reduce)
// - c помощью reduce
// - *не испльзуя методы массивов и Math.max()*
let bestStudent = students.reduce((acc, el) => acc < el.scores ? el.scores : el, 0 );

let best2 = {}
for (let i = 0; i < students.length; i++) {
    best2 = students[i]
    if (students[i].scores > best2.scores) {
        best2 = {...students[i]}
    }
}
console.log(bestStudent)
console.log(best2)


//13. Найдите сумму баллов всех студентов (reduce)
console.log('13 task:')

let scoresSum = students.reduce((acc, el) => acc + el.scores, 0)
console.log(scoresSum)
// И поднимаем руку!!!!



// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => {
    //..............................
}
console.log(addFriends(students));









