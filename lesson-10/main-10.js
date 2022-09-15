//this, call, bind apply, function constructors

// !'use strict' this -> object

// 1 global context
// 2 functions (functions, arrow functions, object methods)
// 3 .bind .call .apply
// 4 function constructor

// =========  global context =========
console.log(this === window);

const alex = {
    name: "Alex",

    showName() {
        console.log(this.name)
    }
}

const hanna = {
    name: "Hanna",
    showName: alex.showName
}

alex.showName() // this--> alex

hanna.showName() // this--> hanna

const showName = alex.showName

showName() // this = undefined --> window

function foo() {
    console.log(this)
}

foo() // this --> undefined --> window

// --------- BIND ------------

const alex = {
    name: "Alex",
    showName() {
        console.log(this.name)
    }
}

const hanna = {
    name: "Hanna",
    showName: alex.showName

}

alex.showName(alex)

const alex = {
    name: "Alex",
    showName: () => {
        console.log(this.name)
    }
}
alex.showName.call
    .bind({name: "first"})
    .bind({name: "second"})()

const alex = {
    name: "Alex",
    showName() {
        console.log(this.name)
    }
}
alex.showName
    .bind({name: "first"})
    .bind({name: "second"})()


// ------------  CONSTRUCTORS --------------

function User(name) {
    //this = {}

    this.name = name

    //return user
}

const alex = new User("Alex")
const hanna = User("Hanna") //this --> undefined -> window

"use strict"
const user = {
    name: "Alex",

    showName() {
        console.log(this)
    }
}
user.showName.call()

function User() {

    // return this
    return {name: "test"}
}

const alex = new User()


// ------------- Задачи ------------

const a = {
    name: "a",
    logName() {
        console.log(this.name)
    }
}

setTimeout(a.logName, 100)

const a = {
    name: "a", getName() {
        return this.name
    }
}
const b = {
    name: "b", getName() {
        return this.name
    }
}
const c = {
    name: "c", getName() {
        return this.name
    }
}

console.log(
    a.getName
        .bind(b)
        .bind(c)()
)

console.log(
    a.getName
        .bind(c)
        .bind(b)
)

const a = {
    name: "a"
}

const b = {
    name: "b",
    getName() {
        (() => {
            console.log(this.name)
        }).call(a)
    }
}
b.getName()

const a = {
    age: 25
}

const b = {
    age: 23,

    hi: () => {
        console.log(this.age)
    },

    hi2: () => {
        (() => {
            console.log(this.age)
        }).call(a)
    }
}
b.hi()
b.hi2.call(a)

this.age = 40

const a = {
    age: 10,
    first() {
        console.log(this.age)
    },

    second() {
        (() => {
            console.log(this.age)
        })()
    },
    third: () => {
        console.log(this.age)
    }
}
a.first()
a.second()
a.third()

const group = {
    name: "Samurai",
    users: ["Alex", "Hanna"],

    showUsersWithGroup() {
        this.users.forEach((user) => {
            console.log(`${this.name}: ${user}`)
        })
    }
}
group.showUsersWithGroup()

const a = {
    name: "a",
    getName() {
        console.log(this.name)
    }
}
const b = {
    name: "b"
}
const c = {
    name: "c"
}

a.getName()
const foo = a.getName.bind(b)
a.getName()
a.getName.call(b)
foo.call(c)

function makeCar() {
    return {
        model: "Ford",
        ref: this
    };
};

let car = makeCar();
console.log(car.ref.model);
