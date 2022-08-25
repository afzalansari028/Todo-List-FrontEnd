
console.log("log in page")

document.getElementById('form-login').addEventListener('submit', login);

function login(e){
    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    console.log(email,password);

    fetch("http://localhost:8080/login",{
        method:'POST',
        headers:{
            "content-type":"application/json"
         },
        body:JSON.stringify({
                email:email,
                password:password
            }),
    }).then(function (response){
        return response.json()
    }).then(function (data){
        console.log(data)
        if(data == 'Valid user'){
            // console.log("You can log in");
            // swal("Welcome!", "Login success", "success");
            // location.href="http://localhost:8080/todo"
            window.location = "./todolist.html"
        }else if(data == "empty fields"){
            swal("Please enter all the fields properly");
        }else{
            // console.log("Invalid user");
            swal("Please enter the valid cridentials");
        }
    }).catch(function (error){
        console.log(error)
    })

}
