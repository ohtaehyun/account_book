function loadPage(){
    const signIn_btn = document.querySelector('#signIn');
    signIn_btn.addEventListener('click',() =>{
        signIn();
    });
}

async function signIn(){
    const signInForm = document.querySelector('#signInForm');
    const data = formToJson('signInForm');
    if(checkForm()){
        const response = await sendPostFetch('/signIn',JSON.stringify(data));
        if(response.status === 200){
            const json = response.json();
            window.location.href = json.nextLink;
        }
        else if(response.status === 401){
            alert('wrong email or wrong password');
        }
    }
}

function checkForm(){
    const email = document.querySelector('#email').value;
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
        return true;
    }
    alert('wrong email format');
    return false;
}

document.addEventListener('DOMContentLoaded',loadPage);