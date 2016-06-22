<script type="text/javascript" src="js/main.js"></script>

<?php
$db = mysql_connect("db3.ho.ua","kley","bobrik1483")
	//mysql_select_db("db3.ho.ua",$db);
		or die("Could not connect: " . mysql_error());
    //print ("Connected successfully");
    mysql_select_db("kley",$db) or die ('Can\'t use kley: ' . mysql_error());
?>
<div class="lazer-describe">
	<div class="pre-galary"><p class="name">Лазерная эпиляция</p></div>
	<div class="pure-g">
		<div class="pure-u-1 pure-u-md-1-3">
			<div class="pure-g">
				<div class="pure-u-1">			
					<div class="img-describe">
						<img class="pure-img" src="img/lazer.jpg" alt="Lazernaya epilyaciya">
					</div>
				</div>
				<div class="pure-u-1">			
					<div class="feedback-describe">
						<!-- блок для загрузки отзывов -->
						<div id="feedbacks">
							
							<div class="pre-galary"><p class="name">Отзывы наших клиентов</p></div>
							<?php
								$result = mysql_query("SELECT * FROM Lazer ORDER BY id DESC", $db);
								$comment = mysql_fetch_array($result);

									do{
										echo "<div class='feedbacks'><strong>".$comment['name'].": </strong><small>".$comment['date']."</small><br><em>".$comment['message']."</em><br></div>";


									}while($comment = mysql_fetch_array($result));
						    ?>
						</div> 
						<form id="f_feedback_describe" class="pure-form pure-form-stacked" autocomplete="off">
 							<input name="your_name" type="text" placeholder="Имя" class="rfield">
 							<textarea name="your_message" placeholder="Ваш отзыв" class="rfield"></textarea>
 							<button type="button" class="pure-button pure-button-primary button-xlarge" onclick="generalSendForms('addcomment.php', '#f_feedback_describe', 'Ваш  отзыв скоро появится на сайте!')">
 								Отправить
 							</button>
 						</form>
 						
					</div>
				</div>
			</div>
		</div>
		<div class="pure-u-1 pure-u-md-2-3 main-height">
			<div class="text-describe">
				<p>для энергичных и решительных современных женщин, стремящихся к молодости, красоте и совершенству тела и души</p>
				<p>для энергичных и решительных современных женщин, стремящихся к молодости, красоте и совершенству тела и души</p><p>для энергичных и решительных современных женщин, стремящихся к молодости, красоте и совершенству тела и души</p><p>для энергичных и решительных современных женщин, стремящихся к молодости, красоте и совершенству тела и души</p><p>для энергичных и решительных современных женщин, стремящихся к молодости, красоте и совершенству тела и души</p><p>для энергичных и решительных современных женщин, стремящихся к молодости, красоте и совершенству тела и души</p><p>для энергичных и решительных современных женщин, стремящихся к молодости, красоте и совершенству тела и души</p><p>для энергичных и решительных современных женщин, стремящихся к молодости, красоте и совершенству тела и души</p><p>для энергичных и решительных современных женщин, стремящихся к молодости, красоте и совершенству тела и души</p><p>для энергичных и решительных современных женщин, стремящихся к молодости, красоте и совершенству тела и души</p>
			</div>
		</div>
	</div>
</div>

<script type="text/javascript">
	$(document).ready(function(){
//растягиваем блок .text-describe по размеру сетки
	$('.text-describe').height($('.main-height').height()); 

});
</script>
