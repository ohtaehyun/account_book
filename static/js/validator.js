function emailFormatValidator(email) {

    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}

function passwordValidator(password,passwordConfirm) {
    if(password !== passwordConfirm){
        return false;
    }   
    if(!/(?=.*\d)(?=.*[a-z]).{8,}/.test(password)){
        alert('wrong password')
        return false;
    }
    return true;
}