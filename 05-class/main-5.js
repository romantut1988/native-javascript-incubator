const names = ['алекс', 'Алекс', 'Bob', 'Alex', 'Mike', 'Nick', 'alex', 1000,]

console.log(names.sort().reverse())

const numbers = [100, 2, 333, 90, 888, 666, 42]


const compareFn = (a, b) => {  // по возрастанию сортировать
    if (a > b) {
        return 3 // > 0
    } else {
        return -1000
    }
}

console.log(numbers.sort((a, b) => a - b).reverse())

const students = [
    {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 120
    },
    {
        name: 'bob',
        age: 22,
        isMarried: true,
        scores: 120
    },
    {
        name: 'Alex',
        age: 21,
        isMarried: true,
        scores: 85
    },
    {
        name: 'alex',
        age: 21,
        isMarried: true,
        scores: 85
    },
    {
        name: 'Michell',
        age: 20,
        isMarried: false,
        scores: 89
    },
    {
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 100
    }
];

console.log(students.sort((a, b) => a.scores - b.scores))

console.log([...students].sort((a, b) => a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1))
console.log([...students].sort((a, b) => a.name < b.name ? -1 : 1))


let arr = [2, 9, 34, 1, 5, 51, -2, 88]
function sorting(arr) {
    let isSorted;
    for (let i = 0; i < arr.length - 1; i++) {
        isSorted = true
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr [j + 1]) {
                isSorted = false;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
        if(isSorted) {
            return arr;
        }
    }

}

console.log(sorting(arr))