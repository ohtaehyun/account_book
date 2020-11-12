var express = require('express');
var router = express.Router();

router.get('',function(req,res){
    if(!req.session.user){
        res.redirect('signIn');
    }
    res.redirect('home');
});

module.exports = router;