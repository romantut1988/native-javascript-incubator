// Promise

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get("http://")
            .then(users => {
                setUsers(users)
            })
            .catch(err => {

            })
            .finally(() => {

            })
    })
}

const promise = new Promise((res, rej) => {
    setTimeout(() => {
        rej('data')
    }, 2000)
})

promise
    .then((data) => {
        console.log('then')
        console.log(data)
    })
    .catch((err) => {
        console.log('catch')
        console.log(err)
        throw new Error('BUM!')
    })
    .finally(() => {
        console.log('finally')
        throw new Error('BUM!')
    })

const promise = new Promise((res, rej) => {
    setTimeout(() => {
        res(1)
    }, 2000)
})

promise
    .then(
        (data) => {
            console.log('then')
            console.log(data)
        },
        (err) => {
            console.log('than catch')
            console.log(err)
        }
    )
    .catch((err) => {
        console.log('catch')
        console.log(err)
    })

    // promise
    .then((data) => {
        console.log(data)

        return new Promise((res, rej) => {
            setTimeout(() => {
                res(2)
            }, 1000)
        })
    })
    .then((data) => {
        console.log(data)
        return 3
    })
    .then(data => {
        console.log(data)
    })

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({name: "Alex"})
        reject("Some error")
    }, 2000)
})

// Метод "then"
promise.then(
    (data) => {
        console.log(data)
    },
    (err) => {
        console.log(err)
    }
)

// Метод catch
promise.catch((err) => {
    console.log(err)
})

// Метод finally
promise.finally(() => {
    console.log("Inside finaly")
})

const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        reject("Some error!")
    }, 2000)

})
console.log(promise)

const promise = new Promise((resolve, reject) => {
    resolve("Resolve")
})
console.log(promise)

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Somthing went wrong!")
    }, 2000)
})
console.log(promise)

const promise = new Promise((resolve, reject) => {
    resolve(10) // p -> { state: 'fulfilled', result: 10 }
    reject("Some error") // p -> { state: 'rejected', result : 'Some error' }
})
console.log(promise)

function Promise(cb) {
    const resolve = () => {

    }
    const reject = () => {

    }
    cb(resolve, reject)
}

const executor = (resolve, reject) => {
}
const promise = new Promise(executor)


axios.get("https://vk.com/users", (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log('users', data)
        axios.get('https://vk.com/users/1', (err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log('books', data)
                axios.get('https://vk.com/users/1/books/2', (err, data) => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log('book', data)
                    }
                })
            }
        })
    }
})

function get(url, cb) {
    if (url) {
        cb(null, "Some Data")
    } else {
        cb({message: "Invalid url"}, null)
    }
}

function promisifyGet(url) {
    return new Promise((res, rej) => {

        get(url, (err, data) => {
            if (err) {
                rej(err)
            } else {
                res(data)
            }
        })
    })
}
get('', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})
promisifyGet('')
    .then(data => {})
    .catch(err => {})

const axios = {
    get(url, cb) {
        if (url) {
            cb(null, "Some Data")
        } else {
            cb({message: "Invalid url"}, null)
        }
    }
}

const axiosWithPromises = {
    get(url) {
        return new Promise((res, rej) => {
            if (url) {
                setTimeout(() => {
                    res("Data")
                }, 2000)
            } else {
                rej("Invalid url: " + url)
            }
        })
    }
}

axiosWithPromises.get("https://vk.com/users")
    .then(users => {
        console.log(users)

        return axiosWithPromises.get("https://vk.com/users/1")
    })
    .then(user => {
        console.log(user)

        return axiosWithPromises.get("https://vk.com/users/1/books")
    })
    .then(books => {
        console.log(books)

        return axiosWithPromises.get("https://vk.com/users/1/books/2")
    })
    .then(secondBook => {
        console.log(secondBook)

        return axiosWithPromises.get("https://vk.com/users/1/books/2/titles")
    })
    .then(titles => {
        console.log(titles)
    })
    .catch(e => {
        console.log(e)
    })
    .finally(() => {
        console.log("All works done!")
    })


async
await
const getUsers = () => {
    axiosWithPromises.get("https://vk.com/users")
        .then(users => {
            console.log(users)

            return axiosWithPromises.get("https://vk.com/users/1")
        })
        .then(user => {
            console.log(user)

            return axiosWithPromises.get("https://vk.com/users/1/books")
        })
        .then(books => {
            console.log(books)
        })
}

const getUsersAsyn = async () => {

    const users = await axiosWithPromises.get("https://vk.com/users")

    const user = await axiosWithPromises.get("https://vk.com/users/1")

    const books = await axiosWithPromises.get("https://vk.com/users/1/books")

}
getUsersAsyn()
    .then(data => {
        console.log(data)
    })

// Promise.all()
// Promise.race()
// Promise.allSettled()
// Promise.resolve()
// Promise.reject()

const p = new Promise((resolve, reject) => {
    resolve() || reject()
})

const p1 = new Promise((res) => {
    setTimeout(() => {
        res(3)
    }, 3000)
})

const p2 = new Promise((res) => {
    setTimeout(() => {
        res(2)
    }, 2000)
})

const p3 = new Promise((res) => {
    setTimeout(() => {
        res(1)
    }, 1000)
})

    // Promise
    .all([p1, p2, p3])
    .then(console.log)
Promise
    .race([p1, p2, p3])
    .then(console.log)
Promise
    .allSettled([p1, p2, p3])
    .then(console.log)