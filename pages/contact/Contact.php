<?php 


$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message \n $yourbrowser";
$recipient = "bassgamer03@gmail.com";
$subject = "$subject";
$mailheader = "From: $email \r\n";
@mail($recipient, $subject, $formcontent, $mailheader);
if ($_POST['test'] == 'value1') {
@mail($email, $subject, $formcontent, $mailheader); 
}
Header("Location: ../")

?>