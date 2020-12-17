var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var signUp = require('./controller/signUp');

app.use(express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine','ejs');

app.listen(8000,()=>{
    console.log('server running :>> ');
});


// routing
app.use('/signup',signUp);
// app.get('signup',signUp);