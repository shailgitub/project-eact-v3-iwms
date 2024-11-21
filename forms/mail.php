<?php

$name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);

$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$contact = filter_var($_POST['contact'], FILTER_SANITIZE_NUMBER_INT);
$subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
$message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

$mailheader = "From:" . $name . "<" . $email . ">\r\n";

$recipient = "prashu.raju@gmail.com, mail2activeshail@gmail.com, chan.shek2005@gmail.com";

// mail($recipient, $subject, $message, $mailheader);

// appending \r\n at the end of mailheaders for end

$message = "Hi There, You have new enquery from e-actuell.com  " . " CLIENT NAME " .  $name . " ||  " .  "CONTACT :" . $contact . "||  CLIENT'S MESSAGE:  " . $message;

$error = '';
if (array_key_exists('contact', $_POST)) {
    if (!preg_match('/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/', $_POST['contact'])) {
        $error = 'Invalid Number!';
    }
}
if (mail($recipient, $subject, $message, $mailheader) or die("Error!")) {
    $posted = true;
    $result = true;
    // $message = "Your contact information is received successfully.";
    $type = "success";

    if ($posted) {
        if ($result) {
            echo "<script type='text/javascript'>alert('Thank you for contacting Us. We will get back to you soon')</script>";
            //header('Location: ../index.html');
            header("Refresh:1; url=https://javatechrunner.online/index.html", true, 303);
        } else {
            echo "<script type='text/javascript'>alert('failed!')</script>";
            //header('Location: ../index.html');
            header("Refresh:1; url=https://javatechrunner.online/index.html", true, 303);
            exit;
        }
    }
}
// mail($recipient, $subject, $message, $mailheader) or die("Error!");
