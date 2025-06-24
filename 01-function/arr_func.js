// Arrow function to calculate the sum of an array
// const func = (a, b) =>
// {
//     console.log("The sum of the array is: " + (a + b));
// }
// func(5, 10);
// let obj = {
//     name: "Ayush",

//     // Arrow function
//     arrfunc: () => {
//         console.log("Arrow Function:", this.name);
//     },

//     // Regular function
//     func: function () {
//         console.log("Regular Function:", this.name);
//     }
// };
// console.log("Object:", obj);
// obj.arrfunc();
// obj.func(); 

// function a(...ele)  // Rest parameter to accept any number of arguments
// {
//     console.log(ele);
//     return ele;
// }
// a(1, 2, 3);

// A Promise is a built-in JavaScript object that represents the result of an asynchronous operation—something that may complete now, later, or never.
// TODO List
// 1. Fetch the data from external API
// 2. Print the data

fetch("https://cat-fact.herokuapp.com/facts")
  .then(response => response.json())  // Convert response to JSON
  .then(data => {
    console.log("Cat Facts:", data);  // Print the data
  })
  .catch(error => {
    console.error("Error fetching data:", error); // Handle errors
  });