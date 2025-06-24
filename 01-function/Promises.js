let a = 1;
let b = a + 2;
console.log("The value of b is:", b);
console.log("The value of a is:", a);
// Promises are used to handle asynchronous operations in JavaScript.
async function getData() 
{
    let b1 = fetch('https://jsonplaceholder.typicode.com/todos/1');
    return b1;
}
console.log(getData());

