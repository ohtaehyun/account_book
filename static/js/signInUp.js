function init(){
    const signUpSubmit = document.querySelector('#signUpSubmit');
    const moveSignIn = document.querySelector('#moveSignIn');
    const moveBox = document.querySelector('.moveBox');
    const signIn = document.querySelector('.signIn');
    const signUp = document.querySelector('.signUp');

    moveSignIn.addEventListener('click',(e)=>{
        moveBox.setAttribute('style','transform:translateX(0%)');
        moveBox.classList.remove('borderLeft');
        moveBox.classList.add('borderRight');
        signIn.classList.add('hide');
        signUp.classList.remove('hide');
    });

    moveSignUp.addEventListener('click',(e)=>{
        moveBox.setAttribute('style','transform:translateX(-100%)');
        moveBox.classList.add('borderLeft');
        moveBox.classList.remove('borderRight');
        signUp.classList.add('hide');
        signIn.classList.remove('hide');
    });

    signUpSubmit.addEventListener('click',function(){
        const email = document.querySelector('#signUpEmail').value;
        const password = document.querySelector('#signUpPassword').value;
        const passwordConfirm = document.querySelector('#signUpPasswordConfirm').value;

        if(!emailFormatValidator(email) || !passwordValidator(password,passwordConfirm)){
            return false;
        }

        const data = {
            email : document.querySelector('#signUpEmail').value,
            password : document.querySelector('#signUpPassword').value,
            passwordConfirm : document.querySelector('#signUpPasswordConfirm').value
        }
        ajax('/login/sign-up', 'POST', data);
    });
}


init();