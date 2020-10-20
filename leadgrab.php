<?php
header("Access-Control-Allow-Origin: *");
date_default_timezone_set("Asia/Kolkata");
require_once('functions.php');
/*General information*/
 $full_name  = get_field('fullname');
$email      = get_field('email');
$phone      = get_field('phone');
$city      = get_field('city');
$message      = get_field('message');
if(empty($phone)){
	$phone      = get_field('phone2');
}
else{
	$phone=$phone;
}
$message      = get_field('message');
$experience      = get_field('experience');

$designation      = get_field('designation');
$location      = get_field('location');
$currentcompany  = get_field('currentcompany');
$carlist  = get_field('carlist');
$address  = get_field('address');

$leadutmsource   = get_field('USOURCE');
$leadutmmedium   = get_field('UMEDIUM');
$leadutmcampaign = get_field('UCAMPAIGN');
$leadutmcontent  = get_field('UCONTENT');
$leadutmterm     = get_field('UTERM');
$type     = get_field('page');
$active_page     = get_field('active_page');

$thankyou_page     = get_field('thankyou_page');


if($type==""){
	$type="Website";
}
else{
	$type=$type;
}
if ($leadutmsource=="") {
	$leadutmsource="Website";
}
else{
	$leadutmsource=$leadutmsource;
}

if ($leadutmmedium=="") {
	$leadutmmedium="Web";
}
else{
	$leadutmmedium=$leadutmmedium;
}

if ($leadutmcampaign=="") {
	$leadutmcampaign=$type;
}
else{
	$leadutmcampaign=$leadutmcampaign;
}

if ($experience=="") {
	$udf1="";
}
else{
	$udf1="Experience:".$experience;
}

if ($currentcompany=="") {
	$udf4="";
}
else{
	$udf4="Current Company:".$currentcompany;
}

if ($carlist=="") {
	$udf5="";
}
else{
	$udf5="Applying For:".$carlist;
}

if ($address=="") {
	$message=$message;
}
else{
	$message=$address;
}

/*UTM information*/
$date 			= date('Y-m-d H:i:s', time());
$post_dump		= $_POST;
$post_dump 		= json_encode($post_dump);
$post_dump 		= $post_dump;
$form_page 		= get_form_page_url();


$ip = $_SERVER['REMOTE_ADDR'];
$page_url = $form_page;
$from = 'info@urbanrise.in';
$from_name = 'Urbanrise';

/*Log data in file*/



/*Send Notifications*/

$fre_email=_FRE_Mail($type,$email,$full_name);
function _FRE_Mail($type,$email,$full_name){

ob_start();
?>
<!DOCTYPE html>
<html>
<head>
	<title>Urbanrise</title>
</head>
<body style="font-family:Arial, sans-serif;font-size:13px;color:#000;background: #f4f4f4;line-height:1.5;padding: 30px;">
	<div style="background: #fff;max-width:550px;display: block;margin: 15px auto;padding: 30px;border-bottom: 6px solid #F2BD55;">
		<img src="https://i.imgur.com/7Kyp09F.png" alt="Urbanrise" title="Urbanrise" width="120" style="display: block;margin-bottom:9px;">
		
		
		
		<p style="font-size: 15px;font-weight: normal;margin: 15px 0px 20px;">Dear <strong><?php echo ucwords($full_name); ?></strong>,</p>
		
		

		<p style="margin-top:30px">Thank you for contacting us.</p>
	
		
		
		<p style="margin-bottom: 0px;margin-top:80px">Yours sincerely,<br><strong>Team Urbanrise</strong></p>
	</div>
</body>
</html>
<?php
$fre_message=ob_get_clean();
$subject = 'Thank You - Urbanrise '.ucfirst($type);
$cc_emails = array();
$bcc_emails = array();
$from = 'info@urbanrise.in';
$from_name = 'Urbanrise';
$to = $email;
$subject = $email;
$message = $fre_message ;
// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
// More headers
$headers .= 'From: <info@urbanrise.in>' . "\r\n";
mail($to,$subject,$message,$headers);

//send_email($from, $from_name, $email, ucwords($full_name), $subject,$fre_message, '', NULL, NULL);
}
/*End*/
/*Send client notification mail*/

function _client_notification($full_name,$phone,$email,$type,$page_url,$active_page)
{
	if($active_page=="index")
	{
		$active_page="Home";
	}
	else
	{
		$active_page=$active_page;
	}
ob_start();
?>
<!DOCTYPE html>
<html>
<head>
	<title>Urbanrise</title>
</head>
<body style="font-family:Arial, sans-serif;font-size:13px;color:#000;background: #f4f4f4;line-height:1.5;padding: 30px;">
	<div style="background: #fff;max-width:550px;display: block;margin: 15px auto;padding: 30px;border-bottom: 6px solid #F2BD55;">
		<img src="https://i.imgur.com/7Kyp09F.png" alt="Urbanrise" title="Urbanrise" width="120" style="display: block;margin-bottom:9px;">
		
		<h1 style="font-size: 21px;display:block;margin-bottom: 0;">New Lead<br></h1>		
		<div style="font-size: 13px;color: #333;display:block;margin: 15px 0 15px;max-width:360px;">			
			<p style="margin: 0 0 6px;"><strong>Name: </strong><?php echo ucwords($full_name); ?></p>
			<p style="margin: 0 0 6px;"><strong>Phone: </strong><?php echo $phone; ?></p>
			<p style="margin: 0 0 6px;"><strong>Email: </strong><?php echo $email; ?></p>
			<?php if(!empty($city)) { ?>
			<p style="margin: 0 0 6px;"><strong>City: </strong><?php echo $city; ?></p>
			<?php } ?>			
			
			<?php if(!empty($message)) { ?>
			<p style="margin: 0 0 6px;"><strong>Message: </strong><?php echo $message; ?></p>
			<?php } ?>
		
			<p style="margin: 0 0 6px;"><strong>Date: </strong><?php echo date('M d, Y'); ?></p>

		</div>		
		<p style="margin-bottom: 0px;">Thanks,<br><strong>Admin</strong></p>
	</div>
</body>
</html>
<?php
$email_message = ob_get_clean();
$subject = 'Urbanrise New Lead - '.ucfirst($type);
$cc_emails = array();
$bcc_emails = array();
$cc_emails = array();
$client_email="info@urbanrise.in";
$from = 'info@urbanrise.in';
$from_name = 'Urbanrise';
$to = "info@urbanrise.in";
$subject = "Urbanrise - New Lead";
$message = $email_message ;
// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
// More headers
$headers .= 'From: <info@urbanrise.in>' . "\r\n";
$headers .= 'Cc: alisha@deepredink.com' . "\r\n";
mail($to,$subject,$message,$headers);
//send_email($from,$from_name,$client_email,$client_name,$subject,$email_message,'',$cc_emails,$bcc_emails);
}
$client_notification=_client_notification($full_name,$phone,$email,$type,$page_url,$active_page);
header("Location:../thankyou.html");
//echo json_encode($output);
?>