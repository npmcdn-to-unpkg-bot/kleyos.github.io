<?php
		$txtname = trim($_POST['wr_name']);
		$txtemail = trim($_POST['wr_email']);
		$txtmessage = trim($_POST['wr_message']);

		// от кого
		 $fromMail = 'kley@s3.ho.ua';
		 $fromName = 'Salon';

		// Сюда введите Ваш email
		$emailTo = 'olga.erushenko@gmail.com';

		$subject = 'Форма обратной связи';
		$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n";
		$headers .= "From: ". $fromName ." <". $fromMail ."> \r\n";

		// тело письма
		$body = "Получено письмо с сайта kley.ho.ua/Salon2\n\nИмя: $txtname\ne-mail: $txtemail \nСообщение: $txtmessage";
		$mail = mail($emailTo, $subject, $body, $headers);
		echo 'ok';
?>