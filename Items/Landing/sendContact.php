<?php
		$txtname = trim($_POST['your_name']);
		$txtemail = trim($_POST['your_email']);
		$txtphone = trim($_POST['your_tel']);
		$txtmessage = trim($_POST['feed_back']);

		// от кого
		 $fromMail = 'apkareal@ukr.net';
		 $fromName = 'MyLanding';

		// Сюда введите Ваш email
		$emailTo = 'olga.erushenko@gmail.com';

		$subject = 'Форма обратной связи';
		//$subject .= '=?utf-8?b?'. base64_encode($subject) .'?=';
		$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n";
		$headers .= "From: ". $fromName ." <". $fromMail ."> \r\n";

		// тело письма
		$body = "Получено письмо с сайта MyLanding\n\nИмя: $txtname\ne-mail: $txtemail \nТелефон: $txtphone \nСообщение: $txtmessage";
		$mail = mail($emailTo, $subject, $body, $headers);
		echo 'ok';
?>