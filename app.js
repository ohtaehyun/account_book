var express = require('express');
var app = express();
var login = require('./controller/login');
require('dotenv').config();
var db = require('./configure/db');

app.use(express.static('static'));

app.use(
    express.urlencoded({
        extended:true
    })
);

app.use(
    express.json(
        {type: ['application/json', 'text/plain']}
    )
);

app.set('view engine','ejs');

app.listen(process.env.SERVER_PORT,()=>{
    console.log('server running :>> ');
    db.connect();
});


// routing
app.use('/login',login);