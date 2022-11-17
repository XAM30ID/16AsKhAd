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
		offset -= 100;
		if (offset < -400) {
			offset = 0;
			clearTimeout(timer);
			}		
		sliderLine.style.left = offset + 'vw';
		autoSlider ();
	}, 10000);
}
