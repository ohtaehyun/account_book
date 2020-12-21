module.exports = {
    signUpCheckPassword = (password,confirmPassword) => {
        if(password === confirmPassword) return true;
        return false;
    },
    signUpCheckEmail = async (email) => {
        
        
    }
}