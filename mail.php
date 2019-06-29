<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Bericht verstuurd</title>
</head>

<body>
<?php $from = "info@fancammo.com";
	$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$subject = $_POST['subject'];
$formcontent="Nieuw bericht van: $name \n Message: $message";
$recipient1 = "info@fancammo.com";
$recipient2 = $email;
$mailheader = "From: $email \r\n";
mail($recipient1, $subject, $formcontent, $mailheader) or die("Error!");
echo "Form complete, redirecting you now. If it doesn't work <a href='http://fancammo.nl/bericht-verzonden'>click here</a>";
header("Location:http://fancammo.nl/bericht-verzonden");
?>
</body>
</html>