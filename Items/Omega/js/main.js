$(function() {
 //Slider	
 var $owl =                 $("#owl"),
     $nav =                 $('.nvgt'),
     $next =                $('#next'),
     $prev =                $('#prev'),
     $service =             $('.service'),
     $slider =              $('.slider'),
     $collapsServices =     $('.service .slider__collaps'),
     $collapsServicesAdd =  $('.service--add .slider__collaps'),
     $add =                 $('.service--add'),
     $title =               $('.slider__title'),
     $btnMore =             $('.btn__more'),
     $btnClose =            $('.btn__close');

  	$owl.owlCarousel({
  						items :     1,
              singleItem:true,
  						loop:       true,
  						pagination: false,
              autoPlay: true,
              stopOnHover:true
  					});
  
  $next.on('click', function(){
	  	$owl.trigger('owl.next');
   	});
  
  $prev.on('click', function(){
  		$owl.trigger('owl.prev');
  	});

//End Slider


//equalHeights
$('.trust__img').equalHeights();



//Services tabs.js
var $tab = $('.menu--serv .menu__item');

$tab.on('click', function(e){
  
    event.preventDefault();

});

$('.tabs').lightTabs(
    {
      selector: $tab,
      paragraph: '.serv'
    }
  );
});