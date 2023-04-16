let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
        isStudent: true
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
        isStudent: true
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110,
        isStudent: true
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120,
        isStudent: true
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100,
        isStudent: true
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105,
        isStudent: true
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

// 1.Создайте поверхностную копию объекта user
let copyUser = {...user};

console.log(user === copyUser)
console.log(user.friends === copyUser.friends)

// 2. Полная (глубокая) копия объекта user
let deepCopyUser = {
    ...user,
    friends: [...user.friends]
};

// Проверка:
console.log(user === deepCopyUser)
console.log(user.friends === deepCopyUser.friends)

// 3. Поверхностная копия массива students
let copyStudents = [...students];

// Проверка:
console.log(copyStudents === students)
console.log(copyStudents[1] === students[1])

// 4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map(s => {
    return {...s}
});

// Проверка:
console.log(deepCopyStudents === students)
console.log(deepCopyStudents[1] === students[1])

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

// 5. Отрисуйте deepCopyStudents по алфавиту (sort)
let sortByName = [...deepCopyStudents].sort((a, b) => a.name > b.name ? 1 : -1)
console.log(sortByName);

// 5a. Отрисуйте deepCopyStudents по успеваемости(лучший идёт первым) (sort)
let sortByScores = [...deepCopyStudents].sort((a, b) => b.scores - a.scores)
console.log(sortByScores);

// 6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let bestStudents = deepCopyStudents.filter(s => s.scores >= 100)
console.log(bestStudents)

// 6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
let topStudents = deepCopyStudents.slice(0, 3)
console.log(topStudents)
console.log(deepCopyStudents)

// 6b. Объедините массивы deepCopyStudents и topStudents так,
// чтобы сохранился порядок сортировки (spread-оператор)
let newDeepCopyStudents = [...topStudents, ...deepCopyStudents]
console.log(newDeepCopyStudents)

// 7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = deepCopyStudents.filter(s => !s.isMarried)
console.log(notMarriedStudents)

// 8. Сформируйте массив имён студентов (map)
let studentsNames = deepCopyStudents.map(s => s.name)
console.log(studentsNames)

// 8a. Сформируйте строку из имён студентов разделённых
// - запятой (join)
// - пробелом (join)
let nameWithComma = studentsNames.join(', ')
let nameWithSpace = studentsNames.join('')
console.log(nameWithComma)
console.log(nameWithSpace)

// 9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = deepCopyStudents.map(s => ({...s, isStudent: true}))
console.log(trueStudents)

// 10. Nick женился. Выполните соответствующее преобразование массива students (map)
let studentsWithMarriedNick = deepCopyStudents.map(s => {
    if (s.name === "Nick") {
        return {...s, isMarried: true}
    } else return s
})
console.log(studentsWithMarriedNick)

// 11. Найдите студента по имени Ann (find)
let ann = deepCopyStudents.find(s => s.name === "Ann")
console.log(ann)

// 12. Найдите студента с самым высоким баллом (reduce)
let bestStudent = students.reduce((acc, cur) => acc.scores > cur.scores ? acc : cur)
console.log(bestStudent)

// 13. Найдите сумму баллов всех студентов (reduce)
let scoresSum = students.reduce((acc, cur) => acc + cur.scores, 0)
console.log(scoresSum)

// 14. Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет к каждому студенту свойство "friends",
// значением которого является мвссив имён всех остальных студентов из массива,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => {
    return students.map(s => ({...s, friends: studentsNames.filter(n => s.name !== n)}))
}
console.log(addFriends(students))
