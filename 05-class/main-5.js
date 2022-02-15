const arr = [1, 56, 790, 10, 465, 32]

// bubble sort
for (let j = 0; j < arr.length - 1; j++) {
    for (let i = 0; i < arr.length - 1 - j; i++) {
        if(arr[i] > arr[i + 1]) {
            // let temp = arr[i + 1]
            // arr[i + 1] = arr[i]
            // arr[i] = temp
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        }
    }
}

console.log(arr)

// sort
// '999', '!alex', 'Юрий', '!юрий'
const names = [ 'Bob', 'Alex', 'Nick', 'Donald', 'Joe', 'Юрий']

const num = [1, 56, 790, 10, 100, 465, 320]


// compare function

// const compFn = (a, b) => {
//     if(a > b) {
//         return 666
//     } else {
//         return -2
//     }
// }

const compFn = (a, b) => a - b

// console.log(num.sort((a, b) => b - a).reverse())
const sortNum = num.sort((a, b) => b - a).reverse()
console.log(num === sortNum)

const students = [
    {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: 'Alex',
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: 'alex',
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: 'Helge',
        age: 21,
        isMarried: false,
        scores: 89
    },
    {
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 121
    }
];

console.log(students
    .sort((a, b) => a.scores - b.scores)
    .reverse()
)

console.log(students.sort((a, b) => a.name <= b.name ? -1 : 1))
