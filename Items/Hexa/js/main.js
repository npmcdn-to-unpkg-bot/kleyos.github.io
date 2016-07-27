var ul,bl1, bl2;
var liItems, elsDot;
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
	elsDot = document.getElementById('dots').children;

	ul.style.width = parseInt(imageWidth * imageNumber) + 'px';
	prev = document.getElementById("prev");
	next = document.getElementById("next");

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
	var direction,
	elsRect,
	elsBl2;
	var numOfImageToGo = Math.abs(imageToGo - currentImage);
	// slide toward left

	direction = currentImage > imageToGo ? 1 : -1;
	currentPostion = -1 * currentImage * imageWidth;
	var opts = {
		duration:1000,
		delta:function(p){return p;},
		step:function(delta){

			ul.style.left = parseInt(currentPostion + direction * delta * imageWidth * numOfImageToGo) + 'px';

			elsRect	=	liItems[imageToGo].querySelectorAll('#bl1_'+imageToGo)[0].getBoundingClientRect();
			elsBl2	=	liItems[imageToGo].querySelectorAll('#bl2_'+imageToGo)[0];
			elsBl2.style.left = elsRect.right+10 + "px";
			elsDot[currentImage].classList.remove('active');
			elsDot[imageToGo].classList.add('active');
		},
		callback:function(){currentImage = imageToGo;}
	};
	animate(opts);
}

function clickPrev(){
	if (currentImage == 0){
		slideTo(imageNumber - 1);
	}
	else{
		slideTo(currentImage - 1);
	}
}

function clickNext(){
	if (currentImage == imageNumber - 1){
		slideTo(0);
	}
	else{
		slideTo(currentImage + 1);
	}
}

function generatePager(imageNumber){
	var pageNumber;
	var pagerDiv = document.getElementById('dots');
	for (i = 0; i < imageNumber; i++){
		var li = document.createElement('li');
		pageNumber = document.createTextNode(parseInt(i + 1));
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
