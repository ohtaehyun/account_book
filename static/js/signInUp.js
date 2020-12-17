function init(){
    const moveSignIn = document.querySelector('#moveSignIn');
    const moveBox = document.querySelector('.moveBox');
    const signIn = document.querySelector('.signIn');
    const signUp = document.querySelector('.signUp');

    moveSignIn.addEventListener('click',(e)=>{
        moveBox.setAttribute('style','transform:translateX(100%)');
        moveBox.classList.remove('borderLeft');
        moveBox.classList.add('borderRight');
        signIn.classList.add('hide');
        signUp.classList.remove('hide');
    });

    
    moveSignUp.addEventListener('click',(e)=>{
        moveBox.setAttribute('style','transform:translateX(0%)');
        moveBox.classList.add('borderLeft');
        moveBox.classList.remove('borderRight');
        signUp.classList.add('hide');
        signIn.classList.remove('hide');
    });
}


init();