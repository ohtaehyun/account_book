var express = require('express');
var session = require('express-session');
var http = require('http');
var fs = require('fs');
var router = express.Router();
var connection = require('../connect');

router.get('',function(req,res){
    if(!req.session.user){
        res.redirect('signIn');
    }
});

router.get('/signIn',function(req,res){
    fs.readFile(__dirname+'/../static/html/signIn.html',(err,data)=>{
        if(err){
            console.log('cannot read signIn html :>> ', err);
        }
        res.writeHead(200,{});
        res.end(data,'utf-8');

    });
});

router.get('/signUp',function(req,res){
    fs.readFile(__dirname+'/../static/html/signUp.html',(err,data)=>{
        if(err){
            console.log('cannot read signIn html :>> ', err);
        }
        res.writeHead(200,{});
        res.end(data,'utf-8');
    });
});


router.post('/signUp',function(req,res){
    var db = connection.getDb();
    console.log('db :>> ', db);
    console.log('req.body :>> ', req.body);
    user = {
        email:req.body.email,
        password:req.body.password
    }
    db.collection('user').insertOne(user);
    res.redirect('/signIn');
});
module.exports = router;