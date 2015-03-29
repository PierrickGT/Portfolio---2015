<?php 

require_once('config.php');

// Sender Info
$name = trim($_POST['name']);
$email = trim($_POST['email']);
$company = trim($_POST['company']);
$message = trim($_POST['message']);

$err = "";

// Check Info
$pattern = "^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$^";
if(!preg_match_all($pattern, $email, $out)) {
    $err = MSG_INVALID_EMAIL; // Invalid email
}
if(!$email) {
    $err = MSG_INVALID_EMAIL; // No Email
}	
if(!$company) {
    $err = MSG_INVALID_COMPANY; // No Company
}
if(!$message) {
    $err = MSG_INVALID_MESSAGE; // No Message
}
if (!$name) {
    $err = MSG_INVALID_NAME; // No name 
}

//define the headers we want passed. Note that they are separated with \r\n
$headers = "From: ".$name." working at ".$company." <".$email.">\r\nReply-To: ".$email."";

if (!$err){

    //send the email
    $sent = mail(TO_EMAIL,SUBJECT,$message,$headers); 

    if ($sent) {
        // If the message is sent successfully print
        echo "SEND"; 
    } else {
        // Display Error Message
        echo MSG_SEND_ERROR; 
    }
} else {
    echo $err; // Display Error Message
}
?>