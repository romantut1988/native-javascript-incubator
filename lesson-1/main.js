// Примитивы:staring, number, boolean, null, undefined, NaN, Infinity, Simbol, BigInt.
const prop = 'name'
const test = {
    name: 'Bob'
}

// Объекты: объекты, массивы, функции.
console.log(test[prop])

const user = { // #345
    name:'Bob', // примитив
    friends:['Alex', 'Donald'], // #007
    technologies: []
}

const user_2 = user
user_2.name = 'Anne'
console.log(user_2)
console.log(user)

const copyUser = {...user}
copyUser.name = 'Bob'
console.log(copyUser)
console.log(user)
console.log(copyUser.friends === user.friends)
copyUser.friends.push('Helge')
console.log(copyUser)
console.log(user)
const deepCopyUser = {...user, friends: [...user.friends], technologies: []}
// delete deepCopyUser.friends
deepCopyUser.friends.push('Olga')
console.log(deepCopyUser)
console.log(user)
user.age = null
const deepDeepCopy = {...deepCopyUser, friends: deepCopyUser.friends.filter(f => f.name !== 'Olga')}
console.log(deepCopyUser === deepCopyUser) // false новая ссылка
delete user.friends
console.log(user)
console.log(copyUser)


const students = [
    {
        name: 'Bob',
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
]
const getName = (student) => {
    return student.name
}

const newArr = students.map((st)=> `<li>Hi, ${st.name}! You have ${st.scores} scores.</li>`)
console.log(newArr)