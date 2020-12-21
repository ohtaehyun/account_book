var express = require('express');
var router = express.Router();
var path = require('path');
var USER = require('../models/user');

router.get('/',(req,res)=>{
    console.log( __dirname+'../views/main.html');
    res.sendFile(path.join(__dirname,'../views/signInUp.html'));
});

router.post('/sign-up',(req,res)=>{
    console.log('req.body :>> ', req.body);
    const user = new USER(req.body.email, req.body.password);
    console.log('user :>> ', user);
});

module.exports = router;