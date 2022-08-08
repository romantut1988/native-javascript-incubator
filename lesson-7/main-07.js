// Замыкания.
// Рекурсия.

// Lexical environment // {name} --->

const lexicalEnvironment = {
    environmentsRecords: {},
    outer: null,
}

let name = "Alex" // { name: 'Alex' } -> null
name = "Hanna" // { name: 'Hanna' } -> null

let age; // { name: 'Hanna', age: undefined } -> null
age = 23 // { name: 'Hanna', age: 23 } -> null
age = 35 // { name: 'Hanna', age: 35 } -> null

const foo = () => {

    const a = "Hanna"

    const bar = () => {
        const a = "Hanna"
    }
}

let name = "Alex" // { name: 'Alex' } -> null

function saHy() {
    console.log(`Hi ${name}`)

    // const foo = () => {}
}

saHy()

let name = "Alex" // { name: 'Alex' }
function saHi() {
    console.log(`Hi ${name}`)
}

name = "Hanna" // { name: 'Hanna' }
saHi()

function counterCreator() {
    let counter = 0
    return function () {
        counter += 1
        console.log(counter)
    }
}

const counter = counterCreator()
counter()
counter()
counter()

const a = (name) => {
    let age = 18

    b()
}

const b = () => {
    c()
}

const c = () => {

}

a("Alex")

pow(2, 3)
pow(2, 4)

const pow = (x, n) => {
    let res = 1
    for (let i = 0; i < n; i++) {
        res = res * x
    }
    return res
}
pow(2, 3)
pow(2, 4)

const pow = (x, n) => {
    if (n === 1) {
        return x
    } else {
        return x * pow(x, n - 1)
    }
}
console.log(
    pow(2, 3)
)
console.log(
    pow(2, 4)
)

let count = 0
const pow = () => {
    count += 1
    console.log(count)
    pow()
}
pow()
// 8MB