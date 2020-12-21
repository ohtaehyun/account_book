function ajax(url,method,jsonData,isSync){
    console.log('jsonData :>> ', jsonData);
    fetch(url,{
        method:method,
        headers:{
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(jsonData)
    })
    .then()
}