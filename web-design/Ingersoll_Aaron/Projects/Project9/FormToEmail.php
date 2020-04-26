<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Capture information from Form</title>

<link href="style.css" rel="stylesheet" type="text/css">

</head>
<body>

<?php

//print_r($_POST);

$FName = $_POST['FName'];
$LName = $_POST['LName'];
$Email = $_POST['Email'];
$County = $_POST['County'];
$List = $_POST['List'];
$Time = $_POST['Time'];
$Comment = $_POST['Comment'];


print "<p class=\"format\">";
   print "Customer Incident Report";
print "</p>";

print "<p>";
   print "Submition Name: " . $FName . " " . $LName . "<br />";
   $message = "Submition Name: " . $FName . " " . $LName . "\n\n";
print "</p>";

print "<p>";
   print "Email: " . $Email . "<br />";
print "</p>";

print "<p>";
   print "County: " . $County . "<br />";
   $message .= "County: " . $County . "\n\n";
print "</p>";

print "<p>";
   $message .= "Recipe Type: " . $Time . "\n\n";
   print "Recipe Type: " . $Time . "<br />";
print "</p>";

print "<p>";
   $message .= "list: " . $List . "\n\n";
   print "list: " . $List;
print "</p>";

print "<p>";
   print "Comment: " . $Comment;
   $message .=  "\n\nComment: " . $Comment;
print "</p>";
   


//$headers = "MIME-Version: 1.0" . "\r\n";
//$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers = "From: " . $Email . "\r\n";
$headers .= "CC: jan.bentley@uvu.edu";

//mail("jan.bentley@uvu.edu","Customer Incident Report",$message,$headers);
mail("aingy205@gmail.com","Recipe Submission",$message,$headers);

?>

</body>
</html>
