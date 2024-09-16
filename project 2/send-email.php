<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "sara_zaabi_93@hotmail.com"; // Replace with your email address
    $subject = "New Course/Diploma Registration";

    // Collect form data
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $countryCode = htmlspecialchars($_POST['countryCode']);
    $email = htmlspecialchars($_POST['email']);
    $gender = htmlspecialchars($_POST['gender']);
    $dob = htmlspecialchars($_POST['dob']);
    $course = htmlspecialchars($_POST['course']);
    $highestQualification = htmlspecialchars($_POST['highestQualification']);
    $operationSystem = htmlspecialchars($_POST['operation-system']);
    $internetSpeed = htmlspecialchars($_POST['internet-speed']);
    $laptopAvailability = htmlspecialchars($_POST['laptop-availability']);
    $skills = implode(', ', $_POST['skills']); // Handle multiple skills

    // Construct email body
    $message = "
    <html>
    <head>
        <title>New Registration</title>
    </head>
    <body>
        <h2>Registration Details</h2>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Phone:</strong> $countryCode $phone</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Gender:</strong> $gender</p>
        <p><strong>Date of Birth:</strong> $dob</p>
        <p><strong>Course:</strong> $course</p>
        <p><strong>Highest Qualification:</strong> $highestQualification</p>
        <p><strong>Operation System:</strong> $operationSystem</p>
        <p><strong>Internet Speed:</strong> $internetSpeed</p>
        <p><strong>Laptop Availability:</strong> $laptopAvailability</p>
        <p><strong>Skills:</strong> $skills</p>
    </body>
    </html>
    ";

    // Set content-type header for sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // Additional headers
    $headers .= 'From: <webmaster@example.com>' . "\r\n"; // Replace with a valid sender email address

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Registration successful. Thank you!";
    } else {
        echo "Sorry, there was an error sending your registration.";
    }
}
?>

<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
