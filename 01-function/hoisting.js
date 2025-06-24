//  hoisting allows certain elements to be used before they are declared, but the exact behavior depends on whether you use var, let, const, or function declarations
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// let a;
// let b = 10;
// const c = 20;
// var d = 30;
add();
const func = function add()
{
    console.log("function run");
} 