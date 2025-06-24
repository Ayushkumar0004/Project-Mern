// file manipulation using fs module
// const fs = require('node:fs');

// const a = 1;

// fs.readFile('01-function/fs Module/input.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   const updateContent = "Hello " + data;
//   console.log(updateContent);
//   fs.writeFile('01-function/fs Module/output.txt', updateContent, () => 
//     {
//     console.log('File written successfully');
//     });
// });

// using  the split and join methods to manipulate a string
let text = "A,man,has,a,dog";
let result = text.split(',').join(' ');
console.log(result);