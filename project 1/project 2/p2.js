//select all input elements for verification
const fullname = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
const phone = document.getElementById('phone');
const form = document.getElementById('form');
const gender = document.querySelector('input[name="gender"]:checked');


//function for validating
function validate() {
    //validate name
    if (fullname.value == "") {
        fullname.style.border = "1px solid red";
        document.getElementById('name-error').innerHTML = "Name cannot be empty";
        return false;
    }
    //validate email
    if (email.value == "") {
        email.style.border = "1px solid red";
        document.getElementById('email-error').innerHTML = "Email cannot be empty";
        return false;
    }
    //validate phone
    if (phone.value == "") {
        phone.style.border = "1px solid red";
        document.getElementById('phone-error').innerHTML = "Phone cannot be empty";
        return false;
    }
    //validate gender
    if (gender == null) {
        document.getElementById('gender-error').innerHTML = "Please select your gender";
        return false;
    }
    return true;
}