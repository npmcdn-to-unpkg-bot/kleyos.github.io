function lightFields(f_form){
	$(f_form).each(function(){
		var elementCheck = $(this).find('.check').css({'border-color':'#FF0000'});
		
		setTimeout(function(){
			elementCheck.removeAttr('style').removeClass('check');
		}, 5000);
		
	});
}

//проверка на заполненость полей
function emptyFields(f_form){
	var ch = true;
		
	$(f_form).find('.rfield').each(function(){ 
		if ($(this).val() == ""){
			$(this).addClass('check');
			ch = false; 
		}
	});
	
	if(ch != true)
		{
	   		lightFields(f_form);
			$('.alert').html('<div class="alert alert-danger">Заполните обязательные поля.</div>');
			setTimeout(function(){$('.alert').removeClass('alert-danger').html(" ");}, 5000);	
    		return false;
		}
	else {return true;}
}

function showContent(url_content, block){
	$.ajax({
	    type: "POST",
	    dataType: "html",
	    url: url_content,
		success: function(data) {
				$(block).html(data);
				},
		error:  function(jqXHR, textStatus){
			    alert('Возникла ошибка: ' + textStatus);
			    }
		});
}

//отправка форм переменные
//url_content - файл обработчик формы
//f_form - id формы
//msn - сообщение об успешной отправке.
//т.к. три разных фомы, то сообщение отличаются. 
//но можно сделать и одинаковое и не посылать в функцию
function generalSendForms(url_content, f_form, msn){
	var data, str,
		//координаты формы для вывода сообщения
		p_msn = $(f_form).offset(),
		left_k = parseInt($(f_form).width()-300)/2,
		//сообщение об ошибке и успешной отправке
		suc = '<div class="alert alert-success">'+msn+'</div>',
		dang = '<div class="alert alert-danger">Неизвестная ошибка при передаче данных.</div>';
	
	//проверка на существования поля с электронной почтой
	if ($(f_form).has('input[type="email"]')) {
		str = $(f_form).find('input[type="email"]').val();
		}
	else{
		str = '@';
	}
	//блоку с сообщением задаем нужные координаты
	$('.alert').offset({top:p_msn.top-50, left: p_msn.left+left_k}).width(300);
	
	//проверка на валидность
	//если в поле с email есть собачка
	//и если обяз поля не пустые
	if (emptyFields(f_form)== true) {
		if (str.search("@") != -1) {

			//собираем данные с формы
			data = $(f_form).serialize();
			
			//отправляем на сервер с пом ajax
			$.ajax({
				type: "POST",
				url: url_content,
				data: data,
				//при успешной отправке 
				//выводим сообщение об успехе и через 5 сек
				//оно пропадает
				//очищаются поля формы
				success: function(msg){
					$('.alert').html(suc);
					setTimeout(function(){$('.alert').removeClass('alert-success').html(" ");}, 5000);	
					$(':input').val('');
				},
				//тоже самое при неудаче
				//только форма не очищается
				error: function(msg){
					$('.alert').html(dang);
					setTimeout(function(){$('.alert').removeClass('alert-danger').html(" ");}, 5000);		
				}
			});
		}
	else {
   		lightFields(f_form);
		$('.alert').html('<div class="alert alert-danger">Неправильный адрес электронной почты.</div>');
		setTimeout(function(){$('.alert').removeClass('alert-danger').html(" ");}, 5000);	
		return false;
	}
}	
}

// slider function
function sliderJS (obj, sl) { 
	var ul = $(sl).find("ul"), // находим блок
		bl = $(sl).find("li.slider"+obj), // находим любой из элементов блока
		step = $(bl).width(); // ширина объекта
	$(ul).animate({marginLeft: "-"+step*obj}, 500); // 500 это скорость перемотки
}


$(document).ready(function(){
	
	$(".menu-button").click(function(){
		$(".pure-menu-list").slideToggle(500);
	});

	$(window).resize(function(){
		if ($(window).width() < 750) {
			$('.pure-menu-list').css('display', 'none');
			$('.pure-menu-item').css('display', 'block');
		}
		if ($(window).width() > 750) {
			$(".pure-menu-list").css('display', 'inline-block');
			$('.pure-menu-item').css('display', 'inline-block');
		}
	});


	
//кнопки вверх вниз
	if ($(window).scrollTop()>="250") {
		$("#ToTop").fadeIn("slow");
	}
	if ($(window).scrollTop()<=$(document).height()-"999") {
 		$("#OnBottom").fadeIn("slow")
 	}

	$(window).scroll(function(){
  		if ($(window).scrollTop()<="250") {
  			$("#ToTop").fadeOut("slow");
  		}
   		else {
   			$("#ToTop").fadeIn("slow");
   		}
   		if ($(window).scrollTop()>=$(document).height()-"999") {
   			$("#OnBottom").fadeOut("slow");
   		}
   		else {
   			$("#OnBottom").fadeIn("slow");
   		}

 	});

	 $("#ToTop").click(function(){
	 	$("html,body").animate({scrollTop:0},"slow");
	 });
	 $("#OnBottom").click(function(){
	 	$("html,body").animate({scrollTop:$(document).height()},"slow");
	 });

//плавный скроллинг по нажатию на ссылку
	$(".navigation").on("click","a", function (event) {
	//отменяем стандартный обработчик события	
		event.preventDefault();
	//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),
	//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
	//анимируем переход на расстояние - top за 1500 мс
		$('body').animate({scrollTop: top}, 1000);
	});

});

//форма обратной связи 
 $('ul.tabs li').css('cursor', 'pointer');

	$('ul.tabs.tabs1 li').click(function(){
  		var thisClass = this.className.slice(0,2);
  		$('div.t1').hide();
  		$('div.t2').hide();
  		$('div.t3').hide();
  		$('div.' + thisClass).show();
  		
  		$('ul.tabs.tabs1 li').removeClass('tab-current');
  		$(this).addClass('tab-current');
  });



// slider click navigate
	
// обрабатываем каждый слайдер
	$(".slider").each(function () { 
  		var obj = $(this);
  		$(obj).append("<div class='nav'></div>");
  		$(obj).find("li").each(function () {
   			$(obj).find(".nav").append("<span rel='"+$(this).index()+"'></span>"); // добавляем блок навигации
   			$(this).addClass("slider"+$(this).index());
  		});
  	$(obj).find("span").first().addClass("on"); // делаем активным первый элемент меню
 	});

$('#tv').on("click", ".slider .nav span", function() { 
	
 	var sl = $(this).closest(".slider"),
 		obj; 
 	// находим, в каком блоке был клик
 	$(sl).find("span").removeClass("on"); // убираем активный элемент
 	$(this).addClass("on"); // делаем активным текущий
 	obj = $(this).attr("rel"); // узнаем его номер
 	sliderJS(obj, sl); // слайдим
 	return false;
});

