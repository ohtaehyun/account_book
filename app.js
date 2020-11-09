require('dotenv').config();
var express  = require('express');
var session = require('express-session');
var cors = require('cors')();
var fileStore =require('session-file-store')(session);
var http = require('http');
var app = express();
var connection = require('./connect');

app.set('port',process.env.port);

app.use(session({
    secret : process.env.secret_key,
    resave: false,
    saveUninitialized: true,
    store:new fileStore()
}));

app.use(cors);

app.use(express.static(__dirname+'/static'));

var router = require('./routes/index');
app.use(express.json());
app.use('/',router);

http.createServer(app).listen(app.get('port'),function(){
    console.log('start server'); 
    connection.connect();
});
