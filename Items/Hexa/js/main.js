var ul,bl1, bl2;
var liItems;
var imageNumber;
var imageWidth,bl1Width;
var prev, next;
var currentPostion = 0, bl1Left;
var currentImage = 0;


function init(){
	ul = document.getElementById('slider');
	liItems = ul.children;
	imageNumber = liItems.length;
	imageWidth = liItems[0].children[0].clientWidth;
	ul.style.width = parseInt(imageWidth * imageNumber) + 'px';
	prev = document.getElementById("prev");
	next = document.getElementById("next");
	// bl1 = document.getElementById("bl1");
	// bl2 = document.getElementById("bl2");

	// bl1Width = bl1.offsetWidth;
	// bl1Left = bl1.offsetLeft;
	
	// bl2Left = bl2.offsetLeft;
	// bl2Left = bl1Width+bl2Left+10;

	//debugger
	prev.addEventListener('click',function(){ 
		clickPrev();
	});
	next.addEventListener('click',function(){ 
		clickNext();
	});
	generatePager(imageNumber);
}

function animate(opts){
	var start = new Date;
	var id = setInterval(function(){
		var timePassed = new Date - start;
		var progress = timePassed / opts.duration;
		if (progress > 1){
			progress = 1;
		}
		var delta = opts.delta(progress);
		opts.step(delta);
		if (progress == 1){
			clearInterval(id);
			opts.callback();
		}
	}, opts.delay || 17);
	//return id;
}
	
function slideTo(imageToGo){
	var direction;
	var numOfImageToGo = Math.abs(imageToGo - currentImage);
	// slide toward left

	direction = currentImage > imageToGo ? 1 : -1;
	currentPostion = -1 * currentImage * imageWidth;
	var opts = {
		duration:1000,
		delta:function(p){return p;},
		step:function(delta){
			ul.style.left = parseInt(currentPostion + direction * delta * imageWidth * numOfImageToGo) + 'px';
		},
		callback:function(){currentImage = imageToGo;}	
	};
	animate(opts);
	// console.log('slideTo work!')
}

function clickPrev(){
	if (currentImage == 0){
		slideTo(imageNumber - 1);
	} 		
	else{
		slideTo(currentImage - 1);
	}
	var rect_bl1 = document.getElementById("bl1_"+(currentImage+1)).getBoundingClientRect();
	var bl2 = document.getElementById("bl2_"+(currentImage+1));
// debugger
	bl2.style.left = rect_bl1.right+10 + "px";
}

function clickNext(){
	if (currentImage == imageNumber - 1){
		slideTo(0);
	}		
	else{
		slideTo(currentImage + 1);
	}
	bl1 = document.getElementById("bl_"+currentImage-1);
	bl2 = document.getElementById("bl2_"+currentImage-1);

	bl1Width = bl1.offsetWidth;
	bl1Left = bl1.offsetLeft;
	
	bl2.offsetLeft = bl1Width+bl1Left+10;
}

function generatePager(imageNumber){	
	var pageNumber;
	var pagerDiv = document.getElementById('dots');
	for (i = 0; i < imageNumber; i++){
		var li = document.createElement('li');
		pageNumber = document.createTextNode(parseInt(i + 1));
		li.appendChild(pageNumber);
		pagerDiv.appendChild(li);
		// add event inside a loop, closure issue.
		li.onclick = function(i){
			return function(){
				slideTo(i);
			}
		}(i);
	}	
	var computedStyle = document.defaultView.getComputedStyle(li, null);
	//border width 1px; offsetWidth = 22
	var liWidth = parseInt(li.offsetWidth);
	var liMargin = parseInt(computedStyle.margin.replace('px',""));
	pagerDiv.style.width = parseInt((liWidth + liMargin * 2) * imageNumber) + 'px';
}
window.onload = init;