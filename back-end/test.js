fetch('http://127.0.0.1:8080/login',{
    method: 'POST',
    body:JSON.stringify({
        "user" : {
        "username":"abc@gmail.com",
        "password": "123"
    }
    })
}).then(res=>res.json()).then(res=>{console.log(res)})