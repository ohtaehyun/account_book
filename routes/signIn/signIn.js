
var express = require('express');
var fs = require('fs');
var router = express.Router();

router.get('',function(req,res){
    fs.readFile(__baseDir + '/static/html/signIn.html',(err,data)=>{
        if(err){
            console.log('cannot read signIn html :>> ', err);
        }
        res.writeHead(200,{});
        res.end(data,'utf-8');
    });
});

module.exports = router;