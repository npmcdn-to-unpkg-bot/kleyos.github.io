function lightFields(block){
	$(block).each(function(){
		var elementCheck = $(this).find('.check').css({'border-color':'#d8512d'});
		
		setTimeout(function(){
			elementCheck.removeAttr('style').removeClass('check');
		}, 5000);
		
	});
}

//проверка на заполненость полей
function emptyFields(form){
	var ch = true,
		em = true,
		tl = true;
	$('.rfield').each(function(){ 
		if ($(this).val() == ""){
			$(this).addClass('check');
			ch = false; 
		}
	});
	
	if(ch != true)
		{
	   		lightFields(form);
    		//alert("Незаполнены поля!");
			$('#alert').html('<div class="alert alert-danger"><a href="#" class="close" data-dismiss="alert">×</a>Заполните обязательные поля.</div>')	
    		return false;
		}
	else {return true;}
}
function emailValid(form){
	var pattern = /^[a-z0-9_-.]+@[a-z0-9-]+\.[a-z]{2,6}$/i,
		em = true;
		if($('#mail').val().search(pattern) != 0){
			$('#mail').addClass('check');
			em = false;
		}
		if (em != true){
			lightFields(form);
			$('#alert').html('<div class="alert alert-danger"><a href="#" class="close" data-dismiss="alert">×</a>Неверный адрес электронной почты.</div>')	
    		return false;
		}
		else {return true;}
}
function dataSubmit(){
	var form = $('#f_feedback_short'),
		pos_mod=$('.modal-dialog').offset(),
		suc = '<div class="alert alert-success"><a href="#" class="close" data-dismiss="alert">×</a>Сообщение успешно отправлено.</div>',
		dang = '<div class="alert alert-danger"><a href="#" class="close" data-dismiss="alert">×</a>Неизвестная ошибка при передаче данных.</div>';
	$('#alert').offset({top:pos_mod.top+150, left:pos_mod.left+150});
	if (emptyFields(form) == true && emailValid(form) == true){
		var data = form.serialize();
		
		$.ajax({
		type: "POST",
		url: "sendContact.php",
		data: data,
		success: function(msg){
			$('#alert').html(suc);
			$('#modal_feedback').modal('hide');
			$(':input').val('');
		},
		error: function(msg){
			$('#alert').html(dang);	
		}
	});
	}
}

$(document).ready(function(){
//вызов формы обратной связи по клику на кнопку	
	$('#btn_feedback, #btn_buy').click(function(){
		$('#modal_feedback').modal();
	});
	
	$('.close').click(function(){
		$(':input').val('');
	})
//разрешить вводить только цифры
	$('#tel').on('keyup', function() {
    	if (this.value.match(/[^0-9]/g)) {
        	this.value = this.value.replace(/[^0-9]/g, '');
    	}
	});

//изменение картинки с рокетой при именении размеров экрана 
	$(window).resize(function(){
		if ($(window).width() <= 900){
		$('#rocket, #img1, #img2, #img3, #img4').css('display', 'none');
		$('#rocket_sm').css('display', 'block').css('margin','0 auto');
	}
	else{
		$('#rocket, #img1, #img2, #img3, #img4').css('display', 'block');
		$('#rocket_sm').css('display', 'none');
	}
	});

//появление подсказки при наведении мыши на круглую картинку
	$('#img1').hover(function(){$('#what1').css('visibility','visible');},function(){$('#what1').css('visibility','hidden');});
	$('#img2').hover(function(){$('#what2').css('visibility','visible');},function(){$('#what2').css('visibility','hidden');});
	$('#img3').hover(function(){$('#what3').css('visibility','visible');},function(){$('#what3').css('visibility','hidden');});
	$('#img4').hover(function(){$('#what4').css('visibility','visible');},function(){$('#what4').css('visibility','hidden');});

//плавный скроллинг по нажатию на ссылку
	$("#all_content").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		//event.preventDefault();

		//забираем идентификатор блока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body').animate({scrollTop: top}, 1000);
	
	});

//кнопки вверх вниз
	if ($(window).scrollTop()>="250") $("#ToTop").fadeIn("slow")
		 $(window).scroll(function(){
  			if ($(window).scrollTop()<="250") $("#ToTop").fadeOut("slow")
   			else $("#ToTop").fadeIn("slow")
 	});

 	if ($(window).scrollTop()<=$(document).height()-"999") $("#OnBottom").fadeIn("slow")
 		$(window).scroll(function(){
  			if ($(window).scrollTop()>=$(document).height()-"999") $("#OnBottom").fadeOut("slow")
   			else $("#OnBottom").fadeIn("slow")
 		});

 $("#ToTop").click(function(){$("html,body").animate({scrollTop:0},"slow")})
 $("#OnBottom").click(function(){$("html,body").animate({scrollTop:$(document).height()},"slow")})
});
