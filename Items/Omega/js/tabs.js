(function($){
   $.fn.lightTabs = function({selector, paragraph})
   {
        var createTabs = function(){
            i = 0;
            showPage = function(i){
                $(paragraph).hide().eq(i).show();
                $(selector).removeClass("active").eq(i).addClass("active");
            }
            showPage(0);
           
            $(selector).each(function(index, element){
                $(element).attr("data-page", i);
                i++;
            });
            $(selector).on('click', function(){
                showPage(parseInt($(this).attr("data-page")));
            });

        };
        return this.each(createTabs);
    };

})(jQuery);

