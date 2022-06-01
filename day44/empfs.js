let fs = require('fs');

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

module.exports = {readFile,writeFile,checkFileExists};