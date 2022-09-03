//this, call, bind apply, function constructors

// !'use strict' this -> object

// 1 global context
// 2 functions (functions, arrow functions, object methods)
// 3 .bind .call .apply
// 4 function constructor

// =========  global context =========
// console.log(this === window);

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
    return this
}

foo() // this --> undefined --> window
