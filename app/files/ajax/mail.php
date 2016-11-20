<?php

define('MAILTO', 'info@zeeinbeweging.nl');
//define('MAILTO', 'mail@michielkoning.nl');

if (!isset($_POST['name'])) exit();

$name     = urldecode($_POST['name']);
$mailFrom = urldecode($_POST['email']);
$phone    = urldecode($_POST['phone']);
$message  = urldecode($_POST['message']);

$name     = strip_tags($name);
$mailFrom = strip_tags($mailFrom);
$phone    = strip_tags($phone);
$message  = strip_tags($message);

$mailTo   = MAILTO;

$subject  = 'Bericht ontvangen via zeeinbeweging.nl';

$headers  = "From: " . strip_tags($mailFrom) . "\r\n";
$headers .= "Reply-To: ". strip_tags($mailFrom) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

$body     = '<html><body>';
$body    .= '<table  cellpadding="0" border="0" width="600" style="font-family: Arial">';
$body    .= '<tr>';
$body    .= '<td>Er is een contactformulier ingevuld op <a href="https://zeeinbeweging.nl">zeeinbeweging.nl</a>. De volgende gegevens zijn ingevuld:<br /><br /></td>';
$body    .= '</tr>';
$body    .= '<tr>';
$body    .= '<td>';
$body    .=   '<table rules="all" cellpadding="5" width="100%">';
$body    .=   '<tr style="background: #eee;">';
$body    .=   '<td width="150"><strong>Naam:</strong></td>';
$body    .=   '<td>' . $name . '</td>';
$body    .=   '</tr>';
$body    .=   '<tr>';
$body    .=   '<td><strong>Emailadres:</strong></td>';
$body    .=   '<td>' . $mailFrom . '</td>';
$body    .=   '</tr>';
$body    .=   '<tr style="background: #eee;">';
$body    .=   '<td><strong>Telefoonnumer:</strong></td>';
$body    .=   '<td>' . $phone . '</td></tr>';
$body    .=   '<tr>';
$body    .=   '<td><strong>Bericht:</strong></td>';
$body    .=   '<td>' . $message . '</td>';
$body    .=   '</tr>';
$body    .=   '</table>';
$body    .= '<td>';
$body    .= '</tr>';
$body    .= '</table>';
$body    .= '</body></html>';

mail($mailTo, $subject, $body, $headers);

exit("Bedankt voor het bericht. We zullen zo spoedig mogelijk contact met je opnemen");