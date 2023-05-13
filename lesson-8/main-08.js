//Promise
// {
//     status: pending ||  fulfield || rejected
//     result:
// }

// fetch('http://shopBooks/autors', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         fetch('http://shopBooks/autors/32', (err, data) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 fetch('http://shopBooks/autors/32/books', (err, data) => {
//                     if (err) {
//                         console.log(err)
//                     } else {
//                         fetch('http://shopBooks/autors/32/books/3', (err, data) => {
//                             if (err) {
//                                 console.log(err)
//                             } else {
//                             }
//                         });
//                     }
//                 });
//             }
//         });
//     }
// })

const server = {
    getDate() {
        const promise = new Promise((res, rej) => {
            setTimeout(() => {
                // res(console.log('some data'));
                res('some data');
            }, 2000);
        });
        return promise;
    },
};
const pr = server.getDate();
console.log('Promise', pr);

//then | catch | finally
pr.then((data) => {
    console.log('data from server', data);
})
