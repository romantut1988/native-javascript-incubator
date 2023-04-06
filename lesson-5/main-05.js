const name1 = ["Bob", "Alex", "Donald"]
console.log(name1.sort())
//1. сортирует строки "из коробки", т.е. без доп. параметров

const name2 = ["Donald", "Alex", "aLex", "alex", "игорь", "Юрий"]
console.log(name2.sort())
//2. сортирует строки типа по "алфавиту" (unicode)

console.log(name1)
//3. работает мутабельно (сортирует массив на месте)

console.log(name1.sort() === name1) //true
//4. возвращает ссылку на исходный массив

const numbers = [1000, 4, 22, 6780, -1]
console.log(numbers.sort())
// 5. Для остальных случаев необъодимо передать функцию сравнения (callback)

// const compareFunction = (a, b) => { // по возрастанию
//     // > 0 - надо переставить
//     // <= 0 - порядок не меняем
//     if (a > b) {
//         return 999
//     } else {
//         return -10
//     }
// }
const compareFunction = (a, b) => a - b
console.log(numbers.sort(compareFunction))
//6. Функция сравнения должна возвращать число большее или меньшее 0

console.log(numbers.reverse())
//7. Вместе с sort часто используется revers

let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 88
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
    {
        name: "alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
];

const sortByName = (a, b) => {
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1
    } else
        return -1
}

console.log(students.sort(sortByName))
console.log(students.sort((a, b) => a.name.localeCompare(b.name)))
// 7. Сортировка массива объектов по строковым значениям

console.log(students.sort((a, b) => a.age - b.age))
//8. Сортировка массива объекта по числовым значениям

// bubble sort

const nums = [23, 45, 12, 11, 99, 34] // n - 1

for (let j = 0; j < nums.length - 1; j++) {
    let isSorted = true
    for (let i = 0; i < nums.length - 1 - j; i++) {
        if (nums[i] > nums[i + 1]) {
            isSorted = false;
            // let temp = nums[i]
            // nums[i] = nums[i + 1]
            // nums[i + 1] = temp
            [nums[i + 1], nums[i]] = [nums[i], nums[i + 1]]
        }
    }
    if (isSorted) break
}
console.log(nums)
