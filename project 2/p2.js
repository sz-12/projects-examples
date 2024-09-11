
// Select input elements for validation
const fullname = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const form = document.getElementById('registration-form');

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

    // Validate email
    if (email.value.trim() === "") {
        email.style.border = "1px solid red";
        document.getElementById('email-error').innerHTML = "Email cannot be empty";
        valid = false;
    }

    // Validate phone
    if (phone.value.trim() === "") {
        phone.style.border = "1px solid red";
        document.getElementById('phone-error').innerHTML = "Phone cannot be empty";
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

// Handle form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    if (!validate()) {
        return; // Stop form submission if validation fails
    }

    // Get form values
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
        if (key === 'skills') {
            // Collect all selected skills
            const selectedSkills = Array.from(document.getElementById('skills').selectedOptions)
                                        .map(option => option.value);
            data[key] = selectedSkills;
        } else {
            data[key] = value;
        }
    });

    console.log(data); // Log form data including the selected skills

    // Send the email using EmailJS
    emailjs.send('service_m6jdzmr', 'template_hjbyvhc', data)
        .then(function(response) {          
            alert('Email sent successfully');
        }, function(error) {
            alert('Failed to send email');
        });
});

























































