$(function(){
	$('.tabs').lightTabs(
		{
		selector: '.menu__link',
		paragraph: '.tab'
		}
	);
	$('input').simpleToolTips();
	
	$('button').on('click', function(){
        //debugger;
        
        $('input').each(function(i){
        	$('.tooltip').eq(i).css({
        				left: $(this).offset().left + 275,
                        top: $(this).offset().top,
                        display:"block"
                    });
		});
	});

	// $('button').on('click', function(){
	// 	debugger;
	// 	$('input').simpleToolTips('showTip');
	// });


});