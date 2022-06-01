let read = require('readline-sync');
let store = require('./store');
let retrieveAll = require('./retrieveAll');
let retrieveById = require('./retrieveById');
let deleteById = require('./deleteById');

while(true){
    console.log(`\nEnter 1 to Store`);
    console.log(`Enter 2 to Retrieve All`);
    console.log(`Enter 3 to Retrieve by Id`);
    console.log(`Enter 4 to Delete by Id`);
    console.log(`Enter 5 to Quit`);
    let choice = read.questionInt(`\nEnter your choice: `);

    switch(choice){
        case 1: store();
                break;
        case 2: retrieveAll();
                break;
        case 3: let searchId = read.questionInt(`\nEnter the Id of the employee to be retrieved: `);
                retrieveById(searchId);
                break;
        case 4: let deleteId = read.questionInt(`\nEnter the Id of the employee to be deleted:  `);
                deleteById(deleteId);
                break;
        case 5: process.exit(0);
        default: console.log('\nInvalid choice. Please choose from the given options.');
    }
}