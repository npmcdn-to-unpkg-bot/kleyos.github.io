<?php
	$txtname = trim($_POST['your_name']);
	$txtadress = trim($_POST['your_adress']);
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
	$body="Получено письмо с сайта MyLanding\n\nИмя: $txtname\nТелефон: $txtphone\ne-mail: $txtemail \nАдрес: $txtadress \nСообщение: $txtmessage";	
	$mail = mail($emailTo, $subject, $body, $headers);
	echo 'ok';
}
<!-- 		<div id="modal_buy" class="modal fade">
  			<div class="modal-dialog">
    			<div class="modal-content">
      				<div class="modal-header">
        				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
        				<h4 class="modal-title">Оставьте свои данные и MIU будет доставлен вам домой.</h4>
      				</div>
     				<div class="modal-body">
        				<form id="f_feedback_long" name="f_feedback_long" autocomplete="off">
        					<div class="form-group">
    							<label for="your_name">Ваше имя:</label>
    							<input type="text" class="form-control  rfield" name="your_name" placeholder="Введите Ваше имя">
  							</div>
        					<div class="form-group">
    							<label for="your_email">Ваш email:</label>
    							<input type="email" class="form-control rfield" name="your_email" placeholder="Введите Ваш email">
  							</div>
  							<div class="form-group">
    							<label for="your_tel">Ваш телефон:</label>
    							<input type="tel" class="form-control rfield" name="your_tel" placeholder="(000) 000 00 00">
  							</div>
  							<div class="form-group">
    							<label for="your_adress">Ваш адрес:</label>
    							<input type="text" class="form-control rfield" name="your_adress" placeholder="Введите Ваш домашний адрес">
  							</div>
  							<div class="form-group">
    							<label for="feed_back">Если у Вас есть вопросы, напишите их. Мы перезвоним Вам и все уточним.</label>
    							<textarea class="form-control" name="feed_back" placeholder="У Вас есть вопросы или уточнения?"> </textarea>
  							</div>

  							<button type="button" class="btn btn-primary" onclick="">Отправить</button>
  							<button type="reset" class="btn btn-default">Отменить</button>
        				</form>
      				</div>
      			</div>
  			</div>
		</div>		
	</div>	 -->