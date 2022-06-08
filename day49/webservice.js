let express = require('express');
let parser = require('body-parser');
let store = require('./userDB').store;
let fetch = require('./userDB').fetch;
let update = require('./userDB').update;
let remove = require('./userDB').remove;

let app = express();

let port = 9121;
app.use(parser.json());
app.listen(port, () => console.log(`Service started at port ${port}`));

app.post('/store',(request,response) => {
    let body = request.body;
    let msg = store(body);
    response.json({content: msg});
})

app.get('/fetch/:id/:password', (request,response) => {
    let id = parseInt(request.params.id);
    let pwd = request.params.password;
    let result = fetch(id,pwd);
    response.json(result);
})

app.put('/update', (request,response) => {
    let body = request.body;
    let result = update(body);
    response.json(result);
})

app.delete('/remove/:id', (request,response) => {
    let id = parseInt(request.params.id);
    let msg = remove(id);
    response.json(msg);
})