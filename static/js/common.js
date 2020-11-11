/**
 *
 *
 * @param {*} url server url
 * @param {*} data data
 * @param {*} callBack 
 * @param {*} errCallBack
 */
async function sendPostFetch(url,data){
    return fetch(url,{
        method: 'post',
        headers:{
            'Content-Type': 'application/json'
        },
        body:data
    });
}

/**
 *
 *
 * @param {*} formId form id 
 * @return {*} json object
 */
function formToJson(formId){
    const form = document.querySelector('#'+formId);
    const formData = new FormData(form);
    var json = {};
    formData.forEach((v,k) => json[k]=v);
    return json
}