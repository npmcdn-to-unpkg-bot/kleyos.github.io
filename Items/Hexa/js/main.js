var slide_info = 
	{
		text:  ['Для зала','Для детской','Для кухни','Для спальни'],
				
		price: [50, 60, 70, 80],

		createWrapperBlock: function(){
			var wrap_block 	= document.createElement('div');
			var sl_item 	= document.getElementsByClassName('slider__item');
			var dot_arr 	= document.getElementsByClassName('owl-page');

			
			wrap_block.className = "info-wrapper";

			for (var i = 0, length = dot_arr.length; i < length; i++)
				{	

					if (dot_arr[i].classList.contains("active")){
						var wr 	=  sl_item[i].getElementsByClassName("info-wrapper");
						
						//debugger;
						if (wr.length == 0)
							{
								sl_item[i].appendChild(wrap_block);
								this.createTextBlock(wrap_block,i);
								this.createPriceBlock(wrap_block,i);
							}
						else
							{
								return false;
							}
						
					}
				}
		},
		createTextBlock: function(block, i){
				var text_block = document.createElement('div');
					tx = this.text[i];
				
				text_block.className = "text-block";
				text_block.innerHTML = '<span>'+tx+'</span>'
				
				block.appendChild(text_block);
				
				},
		
		createPriceBlock: function(block, i){
				var price_block = document.createElement('div');
				var pr = this.price[i];

				price_block.className = "price-block";

				price_block.innerHTML = '<span class="prise__small">от <span class="prise__big">'
										+pr+
										' </span><small>$/м<sup>2</sup></small></span>';
				block.appendChild(price_block);
				}

	}

$(function() {
 	
 var $owl = $("#owl");	
  	$owl.owlCarousel({
  						items :     1,
  						loop:       true,
  						pagination: true
  					});
  
  $('#next').on('click', function(){
	  	$owl.trigger('owl.next');
		slide_info.createWrapperBlock();
   	});
  
  $('#prev').on('click', function(){
  		$owl.trigger('owl.prev');
  		slide_info.createWrapperBlock();
  	});

  slide_info.createWrapperBlock();
 
});