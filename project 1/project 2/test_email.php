<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "sara_zaabi_93@hotmail.com";
    $subject = "Test Email";
    $message = "This is a test email.";
    $headers = "From: webmaster@example.com";

    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully.";
    } else {
        echo "Failed to send email.";
    }
}
?>