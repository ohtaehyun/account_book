require('dotenv').config();
var express  = require('express');
var session = require('express-session');
var cors = require('cors')();
var fileStore =require('session-file-store')(session);
var http = require('http');
var app = express();


var mongoClient = require('mongodb').MongoClient;

var uri = process.env.db_uri

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

app.use('/',router);

http.createServer(app).listen(app.get('port'),function(){
    console.log('start server'); 
});

mongoClient.connect(uri,function(err,db){
    if(err){
        console.log('db connection err :>> ', err);
        return
    }
});