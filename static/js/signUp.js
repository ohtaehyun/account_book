let email_validation = false;

function loadPage(){
    const signUp_btn = document.querySelector('#signUp');

    signUp_btn.addEventListener('click', async () => {
        
        if (!validatePassword()){
            return false;
        }
        if (validateEmail()){
            const data = formToJson('signUpForm');
            const response = await sendPostFetch('signUp',JSON.stringify(data));
            if (response.status === 201){
                resData = await response.json();
                window.location.href = resData.nextLink
            }
        }
    });
}


function validatePassword(){

    const pwd = document.querySelector('#password').value;
    const pwd2 = document.querySelector('#password_check').value;
    const warning_area = document.querySelector('#warning_area');
    warning_area.classList.add('hidden');

    if (pwd.length < 8 ){
        warning_area.textContent = 'use longer password (min:8)';
        warning_area.classList.remove('hidden');
        warning_area.classList.add('show');
        return false;
    }

    if (pwd !== pwd2) {
        warning_area.textContent = 'check password';
        warning_area.classList.remove('hidden');
        warning_area.classList.add('show');
        return false;
    }
    return true;
}

async function validateEmail(){
    const email = document.querySelector('#email').value;
    const warning_area = document.querySelector('#warning_area');
    warning_area.classList.add('hidden');

    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
        const data = { email :document.querySelector('#email').value};
        const response = await sendPostFetch('/signUp/checkEmail',JSON.stringify(data));
        response.json()
        .then(json => {
            console.log(json.useable);
            if(json.useable){
                warning_area.classList.add('hidden');
            }
            else{
                warning_area.textContent = 'email already use';
                warning_area.classList.remove('hidden');
                warning_area.classList.add('show');
            }
        });
        return true;
    }
    warning_area.textContent = 'Wrong email format';
    warning_area.classList.remove('hidden');
    warning_area.classList.add('show');
    return false;
}
    
document.addEventListener('DOMContentLoaded',loadPage);