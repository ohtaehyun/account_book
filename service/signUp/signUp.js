const crypto = require('crypto');
const connection = require(global.__connectDir);


module.exports = {
    signUp : function(body){
        const email = body.email;
        const password = body.password;
        return new Promise( (resolve,rejected)=>{crypto.randomBytes(64,(err,buf) => {
            crypto.pbkdf2(password,buf.toString('base64'),102837,64,'sha512',(err,key)=>{
                if(err){
                    console.log('signUp encrypt error :>> ', err);
                    rejected('can not encrypt key');
                }
                const db = connection.getDb();
                db.collection('user')
                .insertOne({email:email,password:key.toString("base64"),key:buf.toString("base64")})
                .catch((err)=>{
                    console.log('insertion err :>> ', err);
                    rejected('signUp insertion failed');
                });
            });
        })});
    },
    
    dupCheck : function(email){
        const db = connection.getDb();
        const user = db.collection('user').find(email);
        if(user) return true;
        return false;
    }
}