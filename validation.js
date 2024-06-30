function validate(){
    let input_fname = document.getElementById("full-name");
    let input_email = document.getElementById("email");
    let input_password = document.getElementById("password");
    let input_cpassword = document.getElementById("cpassword");

    if(input_fname.value == '' || input_email.value == '' || input_password.value == '' || input_cpassword.value == ''){
        alert("All field must be filled");
        return false;
    }else if(input_fname.value.length < 5){
        alert("Input first name must be more than 4 letters");
        return false;
    }else if(!input_email.value.endsWith(".com")){
        alert("Email must ends with .com");
        return false;
    }else if(input_password.value.length < 5){
        alert("Input password must be more than 4 letters");
        return false;
    }else if(input_cpassword.value != input_password.value){
        alert("Password and Confirm Password is not the same!");
        return false;
    }

    window.location.href = "login.html";
    return false;
}