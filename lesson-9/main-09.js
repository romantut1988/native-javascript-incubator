//example 1
setTimeout(function timeout() {
    console.log(1)
}, 4000);

setTimeout(function timeout() {
    console.log(2)
}, 1000);

setTimeout(function timeout() {
    console.log(3)
}, 1);

new Promise((resolve, reject) => {
    console.log(4)
    resolve()
}).then(() => {
    console.log(5)
})
console.log(6);


//example 2
setTimeout(function () {
    console.log("s1")
}, 1);
setTimeout(function () {
    console.log("s2")
}, 1000);

new Promise(function (resolve) {
    console.log("p1");
    resolve();
    console.log("p2")
}).then(function () {
    console.log("p3");
});

console.log("w1");

async function test1() {
    console.log("a1");
    await test2();
    console.log("a2");
    console.log("lala")
}

async function test2() {
    console.log("a3");
}

test1();
console.log("w2");


//example 3
console.log(1);

setTimeout(() => {
    console.log(2);
    Promise.resolve()
        .then(() => {
            console.log(3)
        });
}, 2000);

new Promise((resolve) => {
    console.log(4)
    resolve(5)
}).then((data) => {
    console.log(data);
})

Promise.resolve()
    .then(() => {
        console.log(6)
    })

    .then(() => {
        console.log(7)

        setTimeout(() => {
            console.log(8)
        }, 10)
    })

setTimeout(() => {
    console.log(9)
}, 2000)

console.log(10);


//example 4
console.log("Start")

setTimeout(function timeout() {
    console.log("timeout")
}, 2);

let p = new Promise(function (resolve, reject) {
    console.log("Create promise");
    resolve();
});

p.then(function () {
    console.log("Handler promise");
});
console.log("End");


//example 5
console.log(1);

setTimeout(() => console.log(2), 1000);

Promise.resolve().then(() => console.log(3));
Promise.resolve()
    .then(() => setTimeout(() => console.log(4), 4000))
    .then(() => console.log(5))
Promise.resolve().then(() => console.log(6));
Promise.resolve().then(() => console.log(7));

setTimeout(() => console.log(8), 2000);
console.log(9);

