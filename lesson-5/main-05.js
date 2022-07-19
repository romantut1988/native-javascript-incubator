const names = ["Artur", "Bob", "Vlad", "Alex", "Donald", "007", "alex", "юрий"]
console.log(names.sort());

const numbers = [100, 99, 665, 1000, 2]
// return > 0 => перестановка
// return <= 0 => перестановки не будет


const compFn = (a, b) => { // по возрастанию
    if (a > b) {
        return 10
    } else {
        return -10
    }
}
numbers.sort((a, b) => b - a)
console.log(numbers);

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

console.log(students.sort((a, b) => b.scores - a.scores))
console.log(students.sort((a, b) => a.scores - b.scores).reverse())
console.log(students.sort((a, b) => a.name.localeCompare(b.name)))
console.log(students.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))

const nums = [13, 45, 67, 12, 99, 87]
// по возрастанию

for (let j = 0; j < nums.length - 1; j++) {
    let isSorted = true
    for (let i = 0; i < nums.length - 1 - j; i++) {
        isSorted = false;
        if (nums[i] > nums[i + 1]) {
            [nums[i + 1], nums[i]] = [nums[i], nums[i + 1]]
        }
    }
    if (isSorted) break
}

console.log(nums);