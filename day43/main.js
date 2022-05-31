let fs = require('fs');
let user = require('./userDetails');

let data = fs.readFileSync('./user.txt').toString();
console.log(data);
let arr = data.split('|');
let user1 = new user(...arr);
user1.display();
