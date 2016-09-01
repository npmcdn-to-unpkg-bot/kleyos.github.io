$(function() {
 //Slider	
 var $owl =             $("#owl"),
     $nav =             $('.nvgt'),
     $next =            $('#next'),
     $prev =            $('#prev'),
     $collapsServices = $('.slider__collaps'),
     $btnMore =         $('.btn__more'),
     $btnClose =        $('.btn__close');

  	$owl.owlCarousel({
  						items :     1,
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

//Collaps Services

$collapsServices.hide();

$btnMore.on('click', function(event){
    
    var $target =   $(event.target),
        $owlWrap =  $('.owl-wrapper-outer');

    
    $target.next($collapsServices).show();

    $owlWrap.css('overflow-y','auto');

    $owl.trigger('owl.stop'); 

    $nav.toggle();
});

$btnClose.on('click', function(event){
    var $owlWrap =  $('.owl-wrapper-outer');
    
    $collapsServices.hide();

    $owlWrap.css('overflow-y','hidden');
    
    $owl.trigger('owl.play',5000);

    $nav.toggle();
});

//End Collaps

//equalHeights

$('.trust__img').equalHeights();

});