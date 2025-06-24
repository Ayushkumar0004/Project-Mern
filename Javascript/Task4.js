// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Success!");
//     }, 1000);
// });

// promise.then((message) => {
//     console.log(message);
// });

let promise2 = new Promise((resolve, reject) => {   
    setTimeout(() => {
        resolve(2);
    }, 1000);
});

promise2.then(result => {
    console.log(result);
});
