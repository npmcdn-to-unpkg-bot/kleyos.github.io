(function($){
   $.fn.simpleToolTips = function()
   {
        var createToolTips = function(i){
            
        $("body").append("<div class='tooltip' id='tooltip"+i+"'><p>"+$(this).attr('title')+"</p></div>");
        $('.tooltip').hide(); 
            var $my_tooltip = $("#tooltip"+i);
            //debugger;
            $(this).removeAttr("title").mouseover(function(){
                $my_tooltip.css({opacity:0.8, display:"none"}).fadeIn(400);
                }).mousemove(function(j){
                    $my_tooltip.css({left:j.pageX+15, top:j.pageY+5});
                        }).mouseout(function(){
                            $my_tooltip.stop(true,true).fadeOut(400);
                             });
        };
        // var showHelp = function(){
        //     $(this).each(function(i){
        //         $my_tooltip.eq(i).css({
        //                 left: $(this).offset().left + 275,
        //                 top: $(this).offset().top,
        //                 display:"block"
        //             });
        //     });
        // }
    
    return this.each(createToolTips);
    };
        
})(jQuery);
