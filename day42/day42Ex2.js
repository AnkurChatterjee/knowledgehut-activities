let read = require('readline-sync');
let name = read.question(`Enter your name: `);
let age = read.questionInt(`Enter your age: `);
console.log(`Hello ${name}. Your age is ${age}`);