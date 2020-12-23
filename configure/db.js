require('dotenv').config();
var mongoose = require('mongoose');
var uri = process.env.DB_URI;
var db;

module.exports = {
    connect : ()=>{
        mongoose.connect(process.env.DB_URI)
        .then(()=>{console.log('db connected');})
        .catch((err)=>{console.log('db connect err :>> ',err);});
    }
}