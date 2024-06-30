function validate(){
    let input_email = document.getElementById("email");
    let input_password = document.getElementById("password");

    if(input_email.value == '' || input_password.value == ''){
        alert("All field must be filled");
        return false;
    }else if(!input_email.value.endsWith(".com")){
        alert("Email must ends with .com");
        return false;
    }else if(input_password.value.length < 5){
        alert("Input password must be more than 4 letters");
        return false;
    }

    window.location.href = "home.html";
    return false;
}