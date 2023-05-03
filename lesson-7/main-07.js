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


//Продолжение темы.
// Замыкание, лексическое окружение, рекурсия
//globalLE {} --> null
const car = "bmw"

function startEngine() {
    console.log(`Star ${car}`)
}

startEngine();

const car1 = "bmw" //globalLE {car: "bmw"} --> null
const startEngine1 = function () {
    //startEngine1 {car1" "audi"}
    //[[environment]] --> globalLE
    const car1 = "audi";
    console.log(`Star ${car1}`)
}
startEngine1();

const car2 = "bmw" //globalLE {startEngine2: Function, "bmw"} --> null
function startEngine2() {
    //[[environment]] --> globalLE
    const car2 = "audi";
    return () => {
        console.log(`Star ${car2}`)
    };
}

const foo = startEngine2();
foo();

const counter = () => {
    let i = 0;
    return () => {
        console.log(++i);
    };
};
const count = counter();
count();
count();
count();

const counter = () => {
    //[[environment]] --> globalLE
    //counter1LE {}
    //counter2LE {}
    let i = 0;
    return () => {
        //[[environment]] --> counter1LE
        //[[environment]] --> counter2LE
        console.log(++i);
    };
};
const count1 = counter();
// globalLE {counter: Function, count1:  Function} --> null
const count2 = counter();
// globalLE {counter: Function, count1:  Function} --> null
count1();//1
count1();//2
count1();//3

count2();//1
count2();//2
count2();//3

//globalLE {pow: Function} --> null
const pow = (x, n) => {
    //powLE {x: 2, n: 3}
    if(n===1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}
console.log(pow(2, 3)); //8
