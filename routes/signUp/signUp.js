const express = require('express');
const fs = require('fs');
const router = express.Router();
const service = require(global.__serviceDir+'/signUp/signUp');

router.get('',function(req,res){
    fs.readFile(__baseDir +'/static/html/signUp.html',(err,data)=>{
        if(err){
            console.log('cannot read signIn html :>> ', err);
        }
        res.writeHead(200,{});
        res.end(data,'utf-8');
    });
});


router.post('',function(req,res){
    service.dupCheck(req.body.email);
    service.signUp(req.body)
    .then((r) => {
        res.redirect('/signIn');
    })
    .catch((err) => {
        console.log('signUp err :>> ', err);
    });
});

module.exports = router;