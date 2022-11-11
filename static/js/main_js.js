// JavaScript Document

let offset = 0;
const sliderLine = document.querySelector('.sliderTrack');
const itachiWords = document.querySelector('.firstBlockWords');
const itachiPic = document.querySelector('.itachiImg');
let timer;
autoSlider ();

itachiWords.onmouseover = function() {
	itachiPic.style.opacity = '100%';
}


itachiWords.onmouseout = function() {
	itachiPic.style.opacity = '0';
}


function autoSlider () {
	timer = setTimeout(function () {
		offset -= 1980;
		if (offset < -7920) {
			offset = 0;
			clearTimeout(timer);
			}		
		sliderLine.style.left = offset + 'px';
		autoSlider ();
	}, 5000);
}