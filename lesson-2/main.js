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
        scores: 100
    }
];
const getName = st => st.name
const getNames = (array) => {
    const result = []
    const getName = st => st.name
    for (let i = 0; i < array.length; i++) {
        const newValue = getName(array[i])
        result[i] = newValue
    }
    return result
}

const getScores = (array) => {
    const result = []
    const getStScores = st => st.scores
    for (let i = 0; i < array.length; i++) {
        const newValue = getStScores(array[i])
        result[i] = newValue
    }
    return result
}

const getScores2 = (array) => {
    const result = []
    const getStScores = st => st.scores
    for (let i = 0; i < array.length; i++) {
        const newValue = getStScores(array[i])
        result[i] = newValue
    }
    return result
}

const sMap = (array, func) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
        const newValue = func(array[i])
        result[i] = newValue
    }
    return result
}
console.log(students.map(getName))
console.log(sMap(students, getName))

const sFilter = (array, func) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
        if (func(array[i]) === true) {
            result.push(array[i])
        }
    }
    return result
}
console.log(sFilter(students, st => st.scores >= 100))
console.log(students.filter(st => st.scores >= 100))

const sPop = (array) => {
    const lastEl = array[array.length - 1]
    array.length = array.length - 1
    return lastEl
}
