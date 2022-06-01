let fs = require('fs');
let checkFileExists = require('./empfs').checkFileExists;

let deleteById = (id) => {
    if(checkFileExists()){
        let c = 0;
        let indexArr = [];
        let dataText = fs.readFileSync('emp.json').toString();
        let jsonArr = JSON.parse(dataText);
        if(jsonArr.length == 0){
            console.log(`\nEmployee records empty. Nothing to delete.`);
            return;
        } else {
            for(let i=0; i<jsonArr.length; i++){
                if(jsonArr[i].id == id){
                    jsonArr.splice(i,1);
                    c++;
                    i--;
                }
            }
            fs.writeFileSync('emp.json', JSON.stringify(jsonArr));
        }
        if(c == 0)
            console.log(`\nId: ${id} not found in employee records. Nothing is deleted.`);
    }
}

module.exports = deleteById;