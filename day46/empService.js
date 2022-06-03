let fs = require('fs');
let read = require('readline-sync');

let checkFileExists = () => {
    if(!fs.existsSync('emp.json')){
        let arr = [];
        let arrStr = JSON.stringify(arr);
        fs.writeFileSync('emp.json', arrStr);
    }
    return true;
}
let readFile = () => {
    if(checkFileExists()){
        let dataText = fs.readFileSync('emp.json').toString();
        let jsonArr = JSON.parse(dataText);
        return jsonArr;
    }
}
let writeFile = (emp) => {
    let jsonArr = readFile();
    jsonArr.push(emp);
    fs.writeFileSync('emp.json', JSON.stringify(jsonArr));
}

let retrieveById = (id) => {
    let c=0;
    let empArr = [];
    if(checkFileExists()){
        let dataText = fs.readFileSync('emp.json').toString();
        let jsonArr = JSON.parse(dataText);
        if(jsonArr.length == 0){
            return -1;
        }
        else{
            jsonArr.forEach((employee,index) => {
            if(employee.id == id){
                empArr.push(employee);
                c++;
            }
            });
        }
        if(c == 0)
            return 0;
        else
            return empArr;
    }
}

let deleteById = (id) => {
    if(checkFileExists()){
        let c = 0;
        let indexArr = [];
        let dataText = fs.readFileSync('emp.json').toString();
        let jsonArr = JSON.parse(dataText);
        if(jsonArr.length == 0){
            return -1;
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
            return 0;
        else
            return 1;
    }
}

module.exports = {writeFile, readFile, retrieveById, deleteById};
