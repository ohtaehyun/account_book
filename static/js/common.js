/**
 *
 *
 * @param {*} url server url
 * @param {*} data data
 * @param {*} callBack 
 * @param {*} errCallBack
 */
function SendPostFetch(url,data,callBack,errCallBack){
    fetch(url,{
        method: 'post',
        headers:{
            'Content-Type': 'application/json'
        },
        body:data
    })
    .then(r => {
        if (r.redirected) window.location.href = r.url;
        if (callBack) callBack(r);
    })
    .catch(e=>{
        if (errCallBack) errCallBack(e);
    });
}

/**
 *
 *
 * @param {*} formId form id 
 * @return {*} json object
 */
function FormToJson(formId){
    const form = document.querySelector('#'+formId);
    const formData = new FormData(form);
    console.log('...formData :>> ', ...formData);
    var json = {};
    formData.forEach((v,k) => json[k]=v);
    return json
}