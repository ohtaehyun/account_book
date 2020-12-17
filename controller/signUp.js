var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/',(req,res)=>{
    console.log( __dirname+'../views/main.html');
    res.sendFile(path.join(__dirname,'../views/signInUp.html'));
});

module.exports = router;