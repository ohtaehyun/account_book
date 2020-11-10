let email_validation = false;

function loadPage(){
    const email = document.querySelector('#email');
    const signUp_btn = document.querySelector('#signUp');
    
    email.addEventListener('blur',(e)=>{
        const data = {email : email.value};
        if(validateEmail()){
            sendPostFetch('signUp/checkEmail',JSON.stringify(data));
        }
    });

    signUp_btn.addEventListener('click',() =>{

        const data = formToJson('signUpForm');
        sendPostFetch('signUp',JSON.stringify(data));
    });
}


function validatePassword(){

    const pwd = document.querySelector('#password').value;
    const pwd2 = document.querySelector('#password_check').value;
    const warning_area = document.querySelector('#warning_area');
    warning_area.classList.add('hidden');

    if (pwd !== pwd2) {
        warning_area.textContent = '패스워드가 서로 다릅니다.';
        warning_area.classList.remove('hidden');
        warning_area.classList.add('show');
        return false;
    }

}

async function validateEmail(){
    const email = document.querySelector('#email').value;
    const warning_area = document.querySelector('#warning_area');
    warning_area.classList.add('hidden');

    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
        const data = { email :document.querySelector('#email').value};
        SendPostFetch('signUp/checkEmail',JSON.stringify(data),(r) => {console.log('r :>> ', r);});
    }
    warning_area.textContent = 'Wrong email format';
    warning_area.classList.remove('hidden');
    warning_area.classList.add('show');
    return false;
}
    
document.addEventListener('DOMContentLoaded',loadPage);