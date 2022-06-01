let fileReader = require('./empfs').readFile;

let fetchAll = () => {
    let jsonArr = fileReader();
    console.log('\n'+JSON.stringify(jsonArr));
}
module.exports = fetchAll;