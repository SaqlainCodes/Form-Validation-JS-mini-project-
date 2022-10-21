
let username = document.getElementById("username");
let password = document.getElementById("password");  

function validateForm(){
    if(username.value == ""){
        console.log("User name empty");
    }
    return false;
}