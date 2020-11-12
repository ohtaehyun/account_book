const connection = require(global.__connectDir);
const crypto = require('crypto');
const { key } = require('nconf');

async function checkPassword(password,user){
    crypto.pbkdf2(password,user.key,102837,64,'sha512',(err,key)=>{
        if (key === user.password){
            return true
        }
        return false
    });

}


module.exports = {
    signIn : async function(email,password){
        const db = connection.getDb();
        const user = await db.collection('user').findOne({'email' : email});
        if(user){
            if(checkPassword(password,user)){
                return true
            }
        }
        return false;
    }
}