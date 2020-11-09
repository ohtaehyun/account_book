const { MongoClient } = require('mongodb');

require('dotenv').config();

var mongoClient = require('mongodb').MongoClient;
var uri = process.env.db_uri
var db;

module.exports = {
    connect : function(){
        mongoClient.connect(uri,{useUnifiedTopology:true})
        .then((d) => {
            console.log('db connected');
            db = d.db('accnt_book');
        })
        .catch(e => console.log('db connect err :>> ', e))
    },
    getDb :  function(){
        return db;
    }
};