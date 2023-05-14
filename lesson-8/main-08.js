//Promise
// {
//     status: pending ||  fulfield || rejected
//     result:
// }

fetch('http://shopBooks/autors', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        fetch('http://shopBooks/autors/32', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                fetch('http://shopBooks/autors/32/books', (err, data) => {
                    if (err) {
                        console.log(err)
                    } else {
                        fetch('http://shopBooks/autors/32/books/3', (err, data) => {
                            if (err) {
                                console.log(err)
                            } else {
                            }
                        });
                    }
                });
            }
        });
    }
})

fetch('http://shopBooks/authors')
    .then((authors) => {
        return fetch('https://shopBooks/authors/32');
    })
    .then((author) => {
        return fetch('https://shopBooks/authors/32/books');
    })
    .then((books) => {
        return fetch('https://shopBooks/authors/32/books/3');
    })
    .then((data) => {
    })
    .catch((err) => {
        console.log('some err', err)
    })

const server = {
    getDate() {
        const promise = new Promise((res, rej) => {
            setTimeout(() => {
                // rej('no data');
                res('some data');
            }, 2000);
        });
        return promise;
    },
};
const pr = server.getDate();
console.log('Promise', pr);

// then | catch | finally
pr.then((result) => {
    console.log('data from server', result);
})

// catch
pr.catch((err) => {
    console.log('some error from server', err);
})

//finally
pr.finally(() => {
    console.log('finally')
})

pr.then((data) => {
    console.log('then', data);
    return 10
}).then((data2) => {
    console.log('then2', data2);
})
    .catch((err) => {
        console.log('catch', err);
    }).finally(() => {
    console.log('finally')
})

//Напишите функцию delay(ms), которая возвращает промис,
//переходящий в состояние "resolved" через ms миллесекунду.

const delay = (ms) => {
    return new Promise((res) => {
        setTimeout(res, ms);
    })
}

const pr = delay(2000).then(() => {
    console.log('Done');
})
console.log(pr)
