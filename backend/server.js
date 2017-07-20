var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var messages = [{text: 'some text', owner: 'Tim'}, {text: 'some more text', owner: 'Jane'}];

app.use(bodyParser.json());

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-with,Content-Type, Accept");
    next();
})

var api = express.Router();

api.get('/messages', (req,res) => {
    res.json(messages);
   
})

api.post('/message', (req,res) => {
    messages.push(req.body);
    res.sendStatus(200); 

})

app.use('/api',api);

app.listen(63145);

  