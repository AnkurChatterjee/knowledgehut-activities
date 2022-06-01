let writer = require('./empfs').writeFile;
let read = require('readline-sync');
let fs = require('fs');

let store = () => {
    let empId = read.questionInt(`\nEnter Id: `);
    let empName = read.question(`Enter Name: `);
    let empSalary = read.questionFloat(`Enter Salary: `);

    let emp = {id: empId, name: empName, salary: empSalary};
    writer(emp);
}

module.exports = store;