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

function getStudentName(item, i) {
    return `Index: ${i}: ${item.name}.`
}

const mapIt = (array, callback) => {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray[i] = callback(array[i], i)
    }
    return newArray
}



console.log(mapIt(students, getStudentName))

console.log(students.map(s => s)) // поверхнастная копия => ([...students])
console.log(students.map(s => ({...s}))) // глубокая копия

// console.log(students.map(s => s.name === 'Bob' ? {..s, scores: s.scores +10} : s ))
console.log(students.map(s => {
    if(s.name === 'Bob') {
        return {...s, scores: s.scores + 10}
    }
    return s
}))


const filterIt = (array, callback) => {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        if(callback(array[i])) {
            newArray.push(array[i])
        }
    }
    return newArray
}

console.log(students.filter(s => s.scores >= 100))
console.log(filterIt(students, s => s.scores >= 100))

const findIt = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        if(callback(array[i])) {
            return array[i]
        }
    }
}

console.log(students.find(s => s.name === 'Bob'))
console.log(findIt(students, s => s.name === 'Bob'))