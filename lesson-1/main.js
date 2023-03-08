// примитивы
// number, string, boolean, null, undefined, NaN, Symbol, BigInt

// объекты
// object, array => данные
// function

// - более сложная структура
// - имеют свойства и методы
// - ссылочный тип данных

const user1 = {
    name: "Bob",
    age: 24,
    isStudent: false
}

// const user2 = user1
//
// user2.name = "Alex"
// console.log(user2.name)

// const user1Copy = {
//     name: user1.name,
//     age: user1.age,
//     isStudent: user1.isStudent
// }
// console.log(user1 === user1Copy)

const user1Copy = {...user1}

user1Copy.name = "Alex"
console.log(user1)
console.log(user1 === user1Copy)

const users = [
    {
        id: 1,
        name: "Bob",
        isStudent: true
    },
    {
        id: 2,
        name: "Alex",
        isStudent: true
    },
    {
        id: 3,
        name: "Ann",
        isStudent: true
    },
    {
        id: 4,
        name: "Donald",
        isStudent: true
    },
]

const users2 = [
    {
        id: 1,
        name: "Bob",
        isStudent: true
    },
    {
        id: 2,
        name: "Alex",
        isStudent: true
    },
    {
        id: 3,
        name: "Ann",
        isStudent: true
    },
    {
        id: 4,
        name: "Donald",
        isStudent: true
    },
]
users.shift()

// делаем копию = вносим изменения в копию = используем копию с изменениями
const usersCopy = [...users]
usersCopy.pop()

console.log(users)
console.log(usersCopy)
console.log(users === usersCopy)

// C(R)UD
const newUser = {
    id: 5,
    name: "John",
    isStudent: true,
    isMarried: true
}

const addUsers = [...users, newUser]

const concatUsers = [...users, ...users2]

// const updUsers = addUsers.map(user => {
//     if (user.name === 'John') {
//         return {...user, isStudent: false}
//     } else {
//         return user
//     }
// })
const upd1Users = addUsers.map(user => user.name === 'John' ? {...user, isStudent: false} : user)
console.log(upd1Users)

const upd2Users = upd1Users.map(user => ({...user, isMarried: true}))
console.log(upd2Users)

// delete
const deleteUsers = upd2Users.filter(user => user.id !== 5)
console.log(deleteUsers)
