let read = require('readline-sync');
let person = require('./personDetails');

let personArr = [];
let flag = false;
while(true){
    let name = read.question('\nEnter your name: ');
    let age = read.questionInt('Enter your age: ');
    let gender = read.question('Enter your gender: ');
    let per = new person(name,age,gender);
    personArr.push(per);
    while(true){
        let ch = read.question('\nDo you want to continue? (yes/no): ');
        if(ch.trim().toLowerCase() == 'yes'){
            flag = true;
            break;
        }
        else if(ch.trim().toLowerCase() == 'no'){
            flag = false;
            break;
        }
        else
            console.log(`\nInvalid choice! Please choose between yes/no`);
    }
    if(flag==false)
        break;
}
personArr.forEach((elem,index) => {
    console.log(`\n------User ${index+1}------`);
    elem.display();
});