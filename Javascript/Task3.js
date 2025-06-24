function makeCounter() {
    let count = 0;
    return function() {
        return ++count;
    }
}

let counter1 = makeCounter();
let counter2 = makeCounter();

console.log(counter1()); 
console.log(counter2());

function sum(a) {
    return function(b) {
        return a + b;
    }
}

console.log(sum(2)(3));