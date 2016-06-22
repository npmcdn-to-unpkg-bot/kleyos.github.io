<!DOCTYPE html>
<html>
<head>
	<title>Студия Красоты</title>
	<meta charset="utf-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css">
	<link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/grids-responsive-min.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script type="text/javascript" src="js/main.js"></script>
</head>
<body>
	<div class="all-content">
		<div class="navigation ">
			<div class="pure-menu pure-menu-horizontal ">
	            <a class="pure-menu-heading" href="index.php">Студия красоты "Изюминка"</a>
	            <a href="#" class="menu-button">Меню </a>
	            <ul class="pure-menu-list">
	                <li class="pure-menu-item"><a href="#tv" class="pure-menu-link">Галерея</a></li>
	                <li class="pure-menu-item"><a href="#serv" class="pure-menu-link">Услуги</a></li>
	                <li class="pure-menu-item"><a href="#" class="pure-menu-link">Цены</a></li>
	                <li class="pure-menu-item"><a href="#conct" class="pure-menu-link">Контакты</a></li>
	            </ul>
	        </div>
		</div>

		<div class="header">
		<div class="pure-g">
			<div class="pure-u-1 pure-u-md-2-3 pure-u-lg-3-5">
				<img class="pure-img" src="img/main.jpg" alt="Salon Izyuminka">				
			</div>
			<div class="pure-u-1 pure-u-md-1-3 pure-u-lg-2-5">
				<div class="pure-g">
					<div class="header-raight">
						<div class="pure-u-1"> 
							<div class="header-top">
								<p id="sale">
										IDEAL TO PRESENT YOUR BEAUTY PRODUCTS, START A FASHION STORE OR DRUG 	STORE, AND ALSO A PERFECT FIT FOR MODEL AGENCIES
								</p>
							</div>
						</div>
						<div class="pure-u-1">
							<div class="header-bottom">
								<form id="f_subscribe" class="pure-form pure-form-stacked" autocomplete="off">
									<p>Подпишись на рассылку наших акций и новостей</p>
									<input name="email" type="email" placeholder="Email" class="rfield">
									<button type="button" class="pure-button pure-button-primary button-xlarge" onclick="generalSendForms('addcomment.php', '#f_subscribe', 'Вы успешно подписаны на наши акции!')">
										Подпишись
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div id="main_service"></div>
	<div id="serv" class="content">
		<div class="pure-g">
			<div class="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
				<div class="services" style="background: #00a8ac">
					<p class="name">Лазерная эпиляция</p>
					<p>для энергичных и решительных современных женщин, стремящихся к молодости, красоте и совершенству тела и души</p>
					<a class="learn-more" href="#main_servise" onclick="showContent('lazer.php', '#main_service')">Узнать больше...</a>
				</div>
			</div>
			<div class="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
				<div class="services">
					<a class="learn-more" href="#main_servise" onclick="showContent('lazer.php', '#main_service')">
						<img class="pure-img" src="img/lazer.jpg" alt="Lazernaya epilyaciya">
					</a>
					<p class="name" style="color: black" align="center">Лазерная эпиляция</p>
					<div class="gallery-blockstars">
                    	<i class="fa fa-star"></i>
                    	<i class="fa fa-star"></i>
                    	<i class="fa fa-star"></i>
                    	<i class="fa fa-star"></i>
                    	<i class="fa fa-star"></i>
                    </div>
					<p class="price" style="color: red" align="center"> <span style="color: black">от</span> 140 грн	
				</div>
			</div>
			<div class="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
				<div class="services" >
					<p class="name">Косметология</p>	
					<a class="learn-more" href="#main_servise">Узнать больше...</a>
				</div>
			</div>
			<div class="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
				<div class="services">
					<a class="learn-more" href="#main_servise"><img class="pure-img" src="img/kosmet.jpg" alt="Salon Izyuminka"></a>
					<p class="name" style="color: black" align="center">Косметология</p>
					<div class="gallery-blockstars">
                    	<i class="fa fa-star"></i>
                    	<i class="fa fa-star"></i>
                    	<i class="fa fa-star"></i>
                    	<i class="fa fa-star"></i>
                    	<i class="fa fa-star-o"></i>
                    </div>
					<p class="price" style="color: red" align="center"> <span style="color: black">от</span> 400 грн
				</div>
			</div>
			<div class="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
				<div class="services">
					<a class="learn-more" href="#main_servise"><img class="pure-img" src="img/pilling.jpg" alt="Salon Izyuminka"></a>
					<p class="name" style="color: black" align="center">Пиллинги</p>
					<div class="gallery-blockstars">
                    	<i class="fa fa-star"></i>
                    	<i class="fa fa-star"></i>
                    	<i class="fa fa-star"></i>
                    	<i class="fa fa-star-o"></i>
                    	<i class="fa fa-star-o"></i>
                    </div>
					<p class="price" style="color: red" align="center"> <span style="color: black">от</span> 250 грн</p>	
				</div>
			</div>
			<div class="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
				<div class="services" style="background: #00a8ac">
					<p class="name">Пиллинги</p>	
					<a class="learn-more" href="#main_servise">Узнать больше...</a>	
				</div>
			</div>
			<div class="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
				<div class="services">
					<a href="#main_servise"><img class="pure-img" src="img/massag.jpg" alt="Salon Izyuminka"></a>
					<p class="name" style="color: black" align="center">Массажи</p>
					<div class="gallery-blockstars">
                    	<i class="fa fa-star"></i>
                    	<i class="fa fa-star"></i>
                    	<i class="fa fa-star"></i>
                    	<i class="fa fa-star"></i>
                    	<i class="fa fa-star"></i>
                    </div>
					<p class="price" style="color: red" align="center"> <span style="color: black">от</span> 300 грн
				</div>
			</div>
			<div class="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
				<div class="services" style="background: #00a8ac">
					<p class="name">Массажи</p>
					<a href="#main_servise">Узнать больше...</a>		
				</div>
			</div>
		</div>
	</div>
	<div id="tv" class="pre-galary"><p class="name">Галерея салона "Изюминка" </p>	</div>	
	<div  class="galary pure-img">
		<div class="slider">
			<ul>
				<li><img class="pure-img" src="img/photo_1.jpg" alt=""></li>
				<li><img class="pure-img" src="img/photo_2.jpg" alt=""></li>
				<li><img class="pure-img" src="img/photo_3.png" alt=""></li>
				<li><img class="pure-img" src="img/photo_4.jpg" alt=""></li>
				<li><img class="pure-img" src="img/photo_5.jpg" alt=""></li>
			</ul>
		</div>
	</div>
<!-- </div> -->
<div id="conct" class="contacts">
	<ul class="tabs tabs1">
  		<li class="t1 tab-current"><a>Наш адрес</a></li>
  		<li class="t2"><a>Время работы</a></li>
  		<li class="t3"><a>Обратная связь</a></li>
	</ul>
	<div class="t1">
  		 <address>
	  		 <p><strong>Студия красоты "Изюминка"</strong></p>
	  		 <p>г. Киев, Оболонский пропект, 34</p>
	  		 <p>Салон находится в непосредственной близости от м. Минская, либо м. Героев Днепра.</p>
	  		 <p>093 3616192</p>
	  		 <p>044 3616192</p>
  		</address>
	</div>
	<div class="t2">
 		<address>
 			<p><strong>Студия красоты "Изюминка"</strong></p>
	  		 <p>Работает</p>
	  		 <p>с 7.00 утра</p>	 
	  		 <p>и до </p>
	  		 <p>последнего клиента</p>
	  	</address>
	</div>
	<div class="t3">
 		<address>
 			<form id="f_write_to_us" class="pure-form pure-form-stacked" autocomplete="off">
 				<input name="wr_name" type="text" placeholder="Имя" class="rfield">
 				<input name="wr_email" type="email" placeholder="Email" class="rfield">
 				<textarea name="wr_message" placeholder="Ваше сообщение" class="rfield"></textarea>
 				<button type="botton" class="pure-button pure-button-primary button-xlarge" onclick="generalSendForms('sendContact.php', '#f_write_to_us', 'Ваше письмо успешно отправлено')">
 						Отправить
 				</button>
 			</form>
 		</address>		
	</div>
</div>
		<div class="go-up" id='ToTop'><i class="fa fa-angle-double-up"></i></div>
		<div class="go-down" id='OnBottom'><i class="fa fa-angle-double-down"></i></div>
		<div class="alert"></div>
	</div>
</body>
</html>

