<?php 


$name = $_POST['floatingName'];

$email = $_POST['floatingEmail'];

$subject = "Verification";

$message = $_POST['message'];
$formcontent="<p style='background: red;'>Verificationcode: $message</p>";
$recipient = "noreply@arvidw.space";
$subject = "$subject";
$mailheader = "Here is your verification ID $name  \r\n";
$header .= "Content-type: text/html\r\n";

@mail($email, $subject, $formcontent, $header);
if ( mail($email, $subject, $formcontent, $header) ) {
    $echo "success"
} else {
    $echo "email not sent"
}



Header("Location: ../")



?>

