let read = require('readline-sync');
let store = require('./empService').writeFile;
let retrieveAll = require('./empService').readFile;
let retrieveById = require('./empService').retrieveById;
let deleteById = require('./empService').deleteById;

while(true){
    console.log(`\nEnter 1 to Store`);
    console.log(`Enter 2 to Retrieve All`);
    console.log(`Enter 3 to Retrieve by Id`);
    console.log(`Enter 4 to Delete by Id`);
    console.log(`Enter 5 to Quit`);
    let choice = read.questionInt(`\nEnter your choice: `);

    switch(choice){
        case 1: let empId = read.questionInt(`\nEnter Id: `);
                let empName = read.question(`Enter Name: `);
                let empSalary = read.questionFloat(`Enter Salary: `);
                let emp = {id: empId, name: empName, salary: empSalary};
                store(emp);
                console.log('\nData recorded');
                break;
        case 2: let jsonArr = retrieveAll();
                jsonArr.forEach((employee,index) => {
                        console.log(`\n-----Employee ${index+1}-----`);
                        console.log(`Id: ${employee.id} \nName: ${employee.name} \nSalary: ${employee.salary}`);
                });
                break;
        case 3: let searchId = read.questionInt(`\nEnter the Id of the employee to be retrieved: `);
                let empArr = retrieveById(searchId);
                if(empArr == -1)
                        console.log('\nEmployee records is empty');
                else if(empArr == 0)
                        console.log(`\nId: ${searchId} not found in employee records`);
                else {
                        console.log(`\nDetails of employee with Id: ${searchId} -`);
                        empArr.forEach((employee, index) => {
                                console.log(`\nId: ${employee.id} \nName: ${employee.name} \nSalary: ${employee.salary} `);
                        });
                }
                break;
        case 4: let deleteId = read.questionInt(`\nEnter the Id of the employee to be deleted:  `);
                let flag = deleteById(deleteId);
                if(flag == -1)
                        console.log(`\nEmployee records empty. Nothing to delete.`);
                else if(flag == 0)
                        console.log(`\nId: ${deleteId} not found in employee records. Nothing is deleted.`);
                else
                        console.log(`\nEmployee record deleted successfully`);
                break;
        case 5: process.exit(0);
        default: console.log('\nInvalid choice. Please choose from the given options.');
    }
}