<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit;
    }
    $phone = htmlspecialchars($_POST['phone']);
    $gender = htmlspecialchars($_POST['gender']);
    $dob = htmlspecialchars($_POST['dob']);
    $course = htmlspecialchars($_POST['course']);
    $highestQualification = htmlspecialchars($_POST['highestQualification']);
    // Retrieve skills
    $skills = isset($_POST['skills']) ? implode(", ", $_POST['skills']) : "None";
    
    // Email settings
    $to = "sara_zaabi_93@hotmail.com"; // Change to your email address
    $subject = "New Form Submission";
    
    // Email body
    $message = "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Phone: $phone\n";
    $message .= "Gender: $gender\n";
    $message .= "Date of Birth: $dob\n";
    $message .= "Course: $course\n";
    $message .= "Highest Qualification: $highestQualification\n";
    $message .= "Skills: $skills\n";

    // Headers
    $sanitized_email = filter_var($email, FILTER_SANITIZE_EMAIL);
    $headers = "From: $sanitized_email" . "\r\n" .
            "Reply-To: $sanitized_email" . "\r\n" .
            "X-Mailer: PHP/" . phpversion();

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Form submitted successfully!";
    } else {
        echo "Failed to send the form.";
    }
}