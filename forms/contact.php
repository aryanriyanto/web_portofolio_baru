<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars(strip_tags($_POST["name"]));
  $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
  $subject = htmlspecialchars(strip_tags($_POST["subject"]));
  $message = htmlspecialchars(strip_tags($_POST["message"]));

  // Email destination
  $to = "aryanrianto5@gmail.com";
  $headers = "From: $email\r\n";
  $headers .= "Reply-To: $email\r\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

  $fullMessage = "Name: $name\nEmail: $email\nSubject: $subject\n\nMessage:\n$message";

  if (mail($to, $subject, $fullMessage, $headers)) {
    echo "OK";
  } else {
    echo "Failed to send email. Please try again.";
  }
} else {
  echo "Invalid request.";
}
?>
