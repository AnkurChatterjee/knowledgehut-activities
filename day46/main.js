let http = require('http');
let url = require('url');
let store = require('./empService').writeFile;
let fetchAll = require('./empService').readFile;
let fetchById = require('./empService').retrieveById;
let deleteById = require('./empService').deleteById;

let port = 9121;
http.createServer((request,response) => {
    let urlText = request.url;
    let urlObject = url.parse(urlText,true);
    let parameters = urlObject.query;
    let pathName = urlObject.pathname;
    if(urlText!= '/favicon.ico'){
        console.log(urlText);
        console.log(parameters);
        console.log(pathName);
        response.writeHead(200,{'content-type': 'text/html'});
        switch(pathName){
            case '/store': store(parameters);
                            response.write(`<h2>Data Recorded</h2>`);
                            break;
            case '/fetchAll': let jsonArr = fetchAll();
                              response.write(`<table border=1><thead><tr>
                                <th>Id</th><th>Name</th><th>Salary</th>
                              </tr></thead>`)
                              response.write(`<tbody>`);
                              jsonArr.forEach((employee,index) => {
                                  
                                  response.write(`<tr><td>${employee.id}</td><td>${employee.name}</td><td>${employee.salary}</td></tr>`);
                              });
                              response.write(`</tbody></table>`);
                              break;
            case '/fetch': let empArr = fetchById(parameters.id);
                           if(empArr == -1)
                              response.write(`<h1>Employee Records Empty</h1>`);
                           else if(empArr == 0)
                              response.write(`<h1>Id ${parameters.id} is not present in employee records</h1>`);
                           else {
                               response.write(`<h1>Details of employees with Id: ${parameters.id}</h1>`);
                               empArr.forEach((employee,index) => {
                                    response.write(`<p>Id: ${employee.id} <br />Name: ${employee.name} <br />Salary: ${employee.salary}</p>`);
                               });
                           }
                           break;
            case '/delete': let flag = deleteById(parameters.id);
                            if(flag == -1)
                                response.write(`<h1>Employee records is empty. Nothing to delete.</h1>`);
                            else if(flag == 0)
                                response.write(`<h1>Id: ${parameters.id} is not present in employee records. Nothing is deleted.`);
                            else
                                response.write(`<h1>Record deleted successfully</h1>`);
                            break;
            default: response.write(`Invalid Request`);
        }
        response.end();
    }
}).listen(port, () => console.log(`Server started at port ${port}`));