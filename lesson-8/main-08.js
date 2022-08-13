// Promise

// const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//         rej('data')
//     }, 2000)
// })
//
// promise
//     .then((data) => {
//         console.log('then')
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log('catch')
//         console.log(err)
//         throw new Error('BUM!')
//     })
//     .finally(() => {
//         console.log('finally')
//         throw new Error('BUM!')
//     })

// const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res(1)
//     }, 2000)
// })
//
// promise
//     .then(
//         (data) => {
//             console.log('then')
//             console.log(data)
//         },
//         (err) => {
//             console.log('than catch')
//             console.log(err)
//         }
//     )
//     .catch((err) => {
//         console.log('catch')
//         console.log(err)
//     })

// promise
//     .then((data) => {
//         console.log(data)
//
//         return new Promise((res, rej) => {
//             setTimeout(() => {
//                 res(2)
//             }, 1000)
//         })
//     })
//     .then((data) => {
//         console.log(data)
//         return 3
//     })
//     .then(data => {
//         console.log(data)
//     })

// const promise = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         // resolve({name: "Alex"})
//         reject("Some error")
//     }, 2000)
// })

// Метод "then"
// promise.then(
//     (data) => { console.log(data) },
//     (err) => { console.log(err) }
// )

// Метод catch
// promise.catch((err) => {
//         console.log(err)
// })

// Метод finally
// promise.finally(() => {
//     console.log("Inside finaly")
// })

// const promise = new Promise((resolve, reject) => {
//
//     setTimeout(() => {
//         reject("Some error!")
//     }, 2000)
//
// })
// console.log(promise)

// const promise = new Promise((resolve, reject) => {
//     resolve("Resolve")
// })
// console.log(promise)

// const promise = new Promise((resolve, reject) => {
//    setTimeout( () => {
//         reject("Somthing went wrong!")
//    }, 2000)
// })
// console.log(promise)

// const promise = new Promise((resolve, reject) => {
//     resolve(10) // p -> { state: 'fulfilled', result: 10 }
//     reject("Some error") // p -> { state: 'rejected', result : 'Some error' }
// })
// console.log(promise)

// function Promise(cb) {
//     const resolve = () => {
//
//     }
//     const reject = () => {
//
//     }
//     cb(resolve, reject)
// }
//
// const executor = (resolve, reject) => {}
// const promise = new Promise(executor)


// const axios = {
//     get(url, cb) {
//         if (url) {
//             cb(null, "Some Data")
//         } else {
//             cb({message: "Invalid url"}, null)
//         }
//     }
// }
//
// axios.get("https://vk.com/users", (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('users', data)
//         axios.get('https://vk.com/users/1', (err, data) => {
//             if (err) {
//                 console.log(err)
//             } else {
//                 console.log('books', data)
//                 axios.get('https://vk.com/users/1/books/2', (err, data) => {
//                     if (err) {
//                         console.log(err)
//                     } else {
//                         console.log('book', data)
//                     }
//                 })
//             }
//         })
//     }
// })

const axiosWithPromises = {
    get(url) {
        if (url) {
            cb(null, "Some Data")
        } else {
            cb({message: "Invalid url"}, null)
        }
    }
}
