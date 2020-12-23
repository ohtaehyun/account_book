var express = require('express');
var app = express();
// var bodyParser = require('body-parser');
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
    // console.log('db.getConnection :>> ', db.getConnection());
});


// routing
app.use('/login',login);