// Select input elements for validation 
const fullname = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const form = document.getElementById('registration-form');
const submit = document.getElementById('submit');
const skillslist = document.querySelectorAll('input[name="skills"]');
const successMessage = document.getElementById('success-message'); // Success message element
successMessage.style.display = "none"; // Hide success message initially
// Function for clearing error messages and styles
function clearErrors() {
    fullname.style.border = "";
    document.getElementById('name-error').innerHTML = "";

    email.style.border = "";
    document.getElementById('email-error').innerHTML = "";

    phone.style.border = "";
    document.getElementById('phone-error').innerHTML = "";

    document.getElementById('gender-error').innerHTML = "";
}

// Function for validating form fields
function validate() {
    clearErrors(); // Clear previous errors
    let valid = true; // Flag to track if the form is valid

    // Validate name
    if (fullname.value.trim() === "") {
        fullname.style.border = "1px solid red";
        document.getElementById('name-error').innerHTML = "Name cannot be empty";
        valid = false;
    }

    // Validate email (check for empty and proper email format)
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.value.trim() === "") {
        email.style.border = "1px solid red";
        document.getElementById('email-error').innerHTML = "Email cannot be empty";
        valid = false;
    } else if (!emailPattern.test(email.value)) {
        email.style.border = "1px solid red";
        document.getElementById('email-error').innerHTML = "Please enter a valid email address";
        valid = false;
    }

    // Validate phone (check for empty and proper phone number format)
    const phonePattern = /^\d{7,15}$/;
    if (phone.value.trim() === "") {
        phone.style.border = "1px solid red";
        document.getElementById('phone-error').innerHTML = "Phone cannot be empty";
        valid = false;
    } else if (!phonePattern.test(phone.value)) {
        phone.style.border = "1px solid red";
        document.getElementById('phone-error').innerHTML = "Please enter a valid phone number";
        valid = false;
    }

    // Validate gender
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        document.getElementById('gender-error').innerHTML = "Please select your gender";
        valid = false;
    }

    return valid;
}

// Function to validate skills selection
function validateSkills() {
    const errorMessage = document.getElementById('skills-error');
    const checkboxes = document.querySelectorAll('input[name="skills"]:checked');

    errorMessage.style.display = 'none'; // Hide the error message initially

    if (checkboxes.length === 0) {
        errorMessage.style.display = 'block';
        return false; // Prevent form submission
    }

    errorMessage.style.display = 'none'; // Hide the error message
    return true; // Allow form submission
}

// Function to log that someone filled the form
function formFilled() {
    console.log(`Form filled by: ${fullname.value}, Email: ${email.value}, Phone: ${phone.value}`);
    alert('Someone has filled the form!');
}

// Function to show success message
function showSuccessMessage() {
    successMessage.innerHTML = "Your form has been successfully registered.";
    successMessage.style.color = "green";
    successMessage.style.display = "block";
}
// Handle form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    if (validate() && validateSkills()) {
        showSuccessMessage(); // Show success message 
    }
});

















































