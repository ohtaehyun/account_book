require('dotenv').config();
const express  = require('express');
const session = require('express-session');
const cors = require('cors')();
const fileStore =require('session-file-store')(session);
const http = require('http');
const connection = require('./connect');
var router = require('./routes/index');

let app = express();

app.set('port',process.env.port);

app.use(session({
    secret : process.env.secret_key,
    resave: false,
    saveUninitialized: true,
    store:new fileStore()
}));

app.use(cors);

app.use(express.static(__dirname+'/static'));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use('/',router);

http.createServer(app).listen(app.get('port'),function(){
    console.log('start server'); 
    connection.connect();
});
