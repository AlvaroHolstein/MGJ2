/* =================================
------------------------------------
	Game Warrior Template
	Version: 1.0
 ------------------------------------ 
 ====================================*/


'use strict';


$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(200).fadeOut("slow");

});

(function($) {

	/*------------------
		Navigation
	--------------------*/
	$('.nav-switch').on('click', function(event) {
		$('.main-menu').slideToggle(400);
		event.preventDefault();
	});


	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	/*------------------
		Hero Slider
	--------------------*/
	$('.hero-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		mouseDrag: false,
		animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
		items: 1,
		autoplay: true
	});
	var dot = $('.hero-slider .owl-dot');
	dot.each(function() {
		var index = $(this).index() + 1;
		if(index < 10){
			$(this).html('0').append(index);
			$(this).append('<span>.</span>');
		}else{
			$(this).html(index);
			$(this).append('<span>.</span>');
		}
	});


	/*------------------
		News Ticker
	--------------------*/
	$('.news-ticker').marquee({
	    duration: 10000,
	    //gap in pixels between the tickers
	    //gap: 200,
	    delayBeforeStart: 0,
	    direction: 'left',
	    duplicated: true
	});

})(jQuery);

/* Parte Nova */
window.onload = () => {
	document.addEventListener('scroll', changeOrientationBar)
}


/* Funções */
function changeOrientationBar() {
	let scrolly = window.scrollY

	/* Ircones */
	let orientationIcons = document.getElementsByClassName('orientationIcons')
	
	/*
	[0] - Mapa
	[1] - Informações
	[2] - Regulamento e Avisos Importantes
	[3] - Inscrições
	 */
	//-----
	//Fazer o mesmo para as outras quando tiverem concluidas
	if(scrolly >= 1092 && scrolly <= 1642){
		orientationIcons[1].style.color = 'red'
		orientationIcons[1].style.backgroundColor = 'blue'
	}
	else {
		orientationIcons[1].style.color = 'unset' 
		orientationIcons[1].style.backgroundColor = 'unset'
	}
}