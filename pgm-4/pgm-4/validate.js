
function validateName(name){
    const regex = /^[A-Za-z\s]+$/;
    if(name.trim()===""){
        return "Name cannot be Empty";
    }
    if(!regex.test(name)){
        return "Name can only contain letters and spaces";
    }
    return "Name is valid";
}
function validateEmail(email){
    const regex = /^[A-Za-z-0-9._%+-]+@[a-zA-Z0-9.-]+\[a-zA-Z]{2,}$/;
    if(email.trim()===""){
        return "Email cannot be Empty";
    }
    if(!regex.test(email)){
        return "Email can only contain letters and spaces";
    }
    return "Email is valid";
}
function validatePassword(password){
    const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if(password.trim()===""){
        return "Password cannot be Empty";
    }
    if(!regex.test(password)){
        return "Password must ,be at least 8 character long,contain an uppercase letter and a number";
    }
    return "Password is valid";
}
function validatePhone(phone){
    const regex = /^[0-9]{10}+$/;
    if(phone.trim()===""){
        return "Phonenumber cannot be Empty";
    }
    if(!regex.test(phone)){
        return "Phone number must be 10 digits long";
    }
    return "Phonenumber is valid";
}

function validateForm(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;

    const nameerror = validateName(name);
    const emailerror = validateEmail(email);
    const passworderror = validateerror(password);
    const phoneerror = validateerror(phone);

    if(nameerror === "Name is valid" && emailerror === "Email is valid" && passworderror === "Password is valid" && phone === "Phone is valid"){
      return true;
    }
    document.getElementById("nameerror").innerText ="Name is valid"?"":nameerror;
    document.getElementById("emailerror").innerText ="Name is valid"?"":emailerror;
    document.getElementById("passworderror").innerText ="Name is valid"?"":passworderror;
    document.getElementById("phoneerror").innerText ="Name is valid"?"":phoneerror;

    return false;
}