
const express = require('express');
const fs = require('fs');
const router = express.Router();
const service = require(global.__serviceDir+'/signIn/signIn');
const session = require('express-session');

router.get('',function(req,res){
    fs.readFile(__baseDir + '/static/html/signIn.html',(err,data)=>{
        if(err){
            console.log('cannot read signIn html :>> ', err);
        }
        res.writeHead(200,{});
        res.end(data,'utf-8');
    });
});


router.post('',function(req,res){
    service.signIn(req.body.email,req.body.password)
    .then(result=>{
        if(result){
            res.statusCode = 200;
            req.session.user = req.body.email;
            // res.end({'next_link':'/home'});
            const resData = {
                'nextLink' : '/home'
            };
            res.end(JSON.stringify(resData));
        }
        res.statusCode = 401;
        res.end();
    })
    .catch(e=>{
        console.log('e :>> ', e);
    });
    
});

module.exports = router;