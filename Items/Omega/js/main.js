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

//Collaps Services

$collapsServices.hide();

$btnMore.on('click', function(event){
    
    var $target =   $(event.target),
        $index =    $btnMore.index($target);
    
    //debugger
    if ($(window).width()<=991) 
      {
        $collapsServices.eq($index).show();
        $slider.css('overflow-y','auto');
      }
    else
      {
        $add.height($service.height()).show();
        $collapsServicesAdd.eq($index).show('slow');
        $add.css('overflow-y','auto');
      }

    $owl.trigger('owl.stop'); 

    $nav.toggle();

});

$btnClose.on('click', function(event){
    
    if ($(window).width()<=991)
      {
        $collapsServices.hide();
        $slider.css('overflow-y','hidden');
      }
    else
      {
          $collapsServicesAdd.hide();
          $add.hide();
      }

    $owl.trigger('owl.play',5000);

    $nav.toggle();
  });

//End Collaps

//equalHeights

$('.trust__img').equalHeights();

if ($(window).width()>=768) 
  {
      $('.offer').equalHeights();

  }

});