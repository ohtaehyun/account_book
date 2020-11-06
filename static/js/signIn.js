

function loadPage(){
    const signIn_btn = document.querySelector('#signIn');
    signIn_btn.addEventListener('click',() =>{
        
        fetch('signin',{
            method: 'POST',
            body:JSON.stringify(new FormData(document.querySelector('#signInForm')))
        });
    });
}


document.addEventListener('DOMContentsLoaded',loadPage);