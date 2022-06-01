let fs = require('fs');
let checkFileExists = require('./empfs').checkFileExists;

let retrieveById = (id) => {
    let c=0;
    if(checkFileExists()){
        let dataText = fs.readFileSync('emp.json').toString();
        let jsonArr = JSON.parse(dataText);
        if(jsonArr.length == 0){
            console.log('\nEmployee records is empty');
            return;
        }
        else{
            jsonArr.forEach((employee,index) => {
            if(employee.id == id){
                console.log('\n'+JSON.stringify(employee));
                c++;
            }
            });
        }
        if(c == 0)
            console.log(`\nId: ${id} not found in employee records`);
    }
}

module.exports = retrieveById;

