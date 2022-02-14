const students = [
    {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 85 // +10
    },
    {
        name: 'Alex',
        age: 21,
        isMarried: true,
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
        scores: 100
    }
]

console.log(students.map( s => s.name))
console.log(myMap(students, s => s.name))
function myMap(array, callback) {
    const newArr = []
    for (let i = 0; i <array.length; i++) {
        newArr[i] = callback(array[i])
    }
    return newArr
}

console.log(students.filter( s => s.scores >= 100))
console.log(myFilter(students, s => s.scores >= 100))

function myFilter(array, callback) {
    const newArr = []
    for (let i = 0; i <array.length; i++) {
        if(callback(array[i])) {
            newArr.push(array[i])
        }
    }
    return newArr
}

console.log(students.find(s => s.name === 'Bob'))
console.log(myFind(students, s => s.name === 'Bob'))

function myFind(array, callback) {
    for (let i = 0; i <array.length; i++) {
        if(callback(array[i])) {
            return array[i];
        }
    }
}
