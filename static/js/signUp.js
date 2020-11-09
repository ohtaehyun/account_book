function loadPage(){
    const signUp_btn = document.querySelector('#signUp');
    
    console.log('load');
    signUp_btn.addEventListener('click',() =>{

        const email = document.querySelector('#email').value;
        const pwd = document.querySelector('#password').value;
        const pwd2 = document.querySelector('#password_check').value;
        const warning_area = document.querySelector('#warning_area');
        warning_area.classList.add('hidden');

        if (pwd !== pwd2) {
            warning_area.textContent = '패스워드가 서로 다릅니다.';
            warning_area.classList.remove('hidden');
            warning_area.classList.remove('show');
            return false;
        }
        const data = FormToJson('signUpForm');
        SendPostFetch('signUp',JSON.stringify(data));

    });
}



document.addEventListener('DOMContentLoaded',loadPage);