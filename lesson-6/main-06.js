const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

// 1.Создайте поверхностную копию объекта user
let copyUser = {...user};

// Проверка:
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
console.log(bestStudents);

// 6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
let topStudents = deepCopyStudents.slice(0, 3)
console.log(topStudents)
console.log(deepCopyStudents)

// 6b. Объедините массивы deepCopyStudents и topStudents так,
// чтобы сохранился порядок сортировки (spread-оператор)
let newDeepCopyStudents = topStudents.concat(...deepCopyStudents)
console.log(newDeepCopyStudents)

// 7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = deepCopyStudents.filter(s => s.isMarried)
console.log(notMarriedStudents)

// 8. Сформируйте массив имён студентов (map)
let studentsNames = deepCopyStudents.map( s => s.name)
console.log(studentsNames);