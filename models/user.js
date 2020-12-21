const USER = class {
    constructor(email,password){
        this.email = email;
        this.password = password;
        this.key = undefined;
        this.authenticated = false;
    }

    changePassword(password){
        this.password = password;
    }

    save(){

    }
}

module.exports = USER;