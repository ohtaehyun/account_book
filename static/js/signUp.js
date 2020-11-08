function loadPage(){
    const signUp_btn = document.querySelector('#signUp');
    
    console.log('load');
    signUp_btn.addEventListener('click',() =>{
        console.log('formdata :>> ',new FormData(document.querySelector('#signUpForm')) );

        const email = document.querySelector('#email').value;
        const pwd = document.querySelector('#password').value;
        const pwd2 = document.querySelector('#password_check').value;
        
        if (pwd !== pwd2) {
            const warning_area = document.querySelector('#warning_area');
            warning_area.textContent = '패스워드가 서로 다릅니다.';
            warning_area.classList.remove('hidden');
            warning_area.classList.remove('show');
            return false;
        }

        fetch('signUp',{
            method: 'POST',
            body:JSON.stringify(new FormData(document.querySelector('#signUpForm')))
        });
    });
}



document.addEventListener('DOMContentLoaded',loadPage);