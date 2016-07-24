$(function(){
	var $link_first_level = $('.menu .menu__link'),
		$link_second_level = $('.menu--sub .menu__link');
//submenu
	$link_first_level.on('click', function(e){
		var $submenu = $(this).siblings('.menu--sub');
		e.preventDefault();
		$submenu.slideToggle();
	});
	$link_second_level.on('click', function(e){
		var $submenu = $(this).siblings('.sub-menu');
		e.preventDefault();
		$submenu.slideToggle();
	});

//slider
	$('.slide').slick({
		prevArrow: '<div class="slick-prev"></div>',
		nextArrow: '<div class="slick-next"></div>',
		dotsClass: 'menu-dots',
		dots: true
	});
});