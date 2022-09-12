// -----------User module------------------
console.log("register page")
document.getElementById('form-register').addEventListener('submit', register);

//save new todo
function register(e) {
    e.preventDefault()
    // console.log("registering...")

    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let retypePassword = document.getElementById('RetypePassword').value;
    console.log(username, email, password, retypePassword)

    // fetch("http://localhost:8080/register", {
    fetch("https://moderntodo-app.herokuapp.com/register", {
        method: 'POST',
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            username: username,
            password: password,
            retypePassword: retypePassword
        }),
    }).then(function (response) {
        return response.json();
      }).then(function (data) {
        if(data =="user registered!"){
            swal("Registered Successfully!")
        }
        if(data =="Please enter both password same"){
            swal("Please enter both password same")
        }
        if(data =="empty fields"){
            swal("Please enter all the fields properly")
        }
        if(data =="This user already exist"){
            swal("You already created your id, Please try to login")
        }
       console.log(data)        
    }).catch(function (error) {
        console.log(error);
      });
}

