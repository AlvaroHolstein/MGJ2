/* =================================
------------------------------------
	Game Warrior Template
	Version: 1.0
 ------------------------------------ 
 ====================================*/


'use strict';


$(window).on('load', function () {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#preloder").delay(200).fadeOut("slow");

});

(function ($) {

	/*------------------
		Navigation
	--------------------*/
	$('.nav-switch').on('click', function (event) {
		$('.main-menu').slideToggle(400);
		event.preventDefault();
	});


	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function () {
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
	dot.each(function () {
		var index = $(this).index() + 1;
		if (index < 10) {
			$(this).html('0').append(index);
			$(this).append('<span>.</span>');
		} else {
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
let timer = null
window.onload = () => {
	initialize()
	if (window.location.pathname == '/index.html') document.addEventListener('scroll', changeOrientationBar)

	/* Teste */
	window.addEventListener('click', () => {
		let iniciodiv1 = document.getElementById('latestNews').getBoundingClientRect()
		console.log(iniciodiv1)
	})
	timer = window.setInterval(mudarLogo, 1000) //Acho que é em segundos que isto está
	/* diferenciar quando se está a mostrar as informações importantes ou o regulamento */

	if (window.location.pathname == "/index.html") {
		changeTitlesSeccao3()
	}
}


/* Funções */
function changeTitlesSeccao3() {
	let containersSeccao3 = document.getElementsByClassName('containersSeccao3')
	let tituloSeccao3 = document.getElementsByClassName('tituloSeccao3')
	if (containersSeccao3[0].className.includes('show')) {
		tituloSeccao3[0].style.fontWeight = 'bold'
		tituloSeccao3[0].style.color = 'red'
	}
	else {
		tituloSeccao3[0].style.fontWeight = 'initial'
		tituloSeccao3[0].style.color = 'black'
	}

	if (containersSeccao3[1].className.includes('show')) {
		tituloSeccao3[1].style.fontWeight = 'bold'
		tituloSeccao3[1].style.color = 'blue'
	}
	else {
		tituloSeccao3[1].style.fontWeight = 'initial'
		tituloSeccao3[1].style.color = 'black'
	}

	for (let i = 0; i < tituloSeccao3.length; i++) {
		tituloSeccao3[i].addEventListener('click', () => {

			if (i == 0) {
				if (!containersSeccao3[0].className.includes('show')) {
					tituloSeccao3[0].style.fontWeight = 'bold'
					tituloSeccao3[0].style.color = 'red'
				}
				else {
					tituloSeccao3[0].style.fontWeight = 'initial'
					tituloSeccao3[0].style.color = 'black'
				}
			}
			if (i == 1) {
				if (!containersSeccao3[1].className.includes('show')) {
					tituloSeccao3[1].style.fontWeight = 'bold'
					tituloSeccao3[1].style.color = 'blue'
				}
				else {
					tituloSeccao3[1].style.fontWeight = 'initial'
					tituloSeccao3[1].style.color = 'black'
				}
			}
		})
	}
}
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
	/* Nada disto vai poder estar hardcoded....... */

	if (scrolly >= 1092 && scrolly <= 1642) {
		// orientationIcons[1].style.color = 'red'
		orientationIcons[1].style.backgroundColor = 'blue'
	}
	else {
		// orientationIcons[1].style.color = 'unset'
		orientationIcons[1].style.backgroundColor = 'unset'
	}

	/* Para os avisos importantes vou ter que ver quantos têm show e fazer o calculo
	do espaço que ocupam */
	let containersSeccao3 = document.getElementsByClassName('containersSeccao3')
	// console.log(titulosSeccao3)

	let tamanhoDivsAjuda = 0;
	if (containersSeccao3[0].className.includes('show')) {
		// console.log(containersSeccao3[0].clientHeight)
	}
	if (containersSeccao3[1].className.includes('show')) {
		tamanhoDivsAjuda += containersSeccao3[0].clientHeight
	}

	if (scrolly >= 1643 && scrolly <= 1643 + tamanhoDivsAjuda) {
		// orientationIcons[2].style.color = 'red'
		orientationIcons[2].style.backgroundColor = 'blue'
	}
	else {
		// orientationIcons[2].style.color = 'unset'
		orientationIcons[2].style.backgroundColor = 'unset'
	}

	// console.log(scrolly)
}
let contadorImagens = 0
let logo = null
function mudarLogo() {
	let img = document.getElementById('imagemMudar')

	switch (contadorImagens) {
		case 0:
			logo = "img/MGJ/Logo_ciano.png"
			break;
		case 1:
			logo = "img/MGJ/Logo_amarelo.png"
			break;
		case 2:
			logo = "img/MGJ/Logo_magenta.png"
			break;

		case 3:
			logo = "img/MGJ/Logo2_ciano.png"
			break;
		case 4:
			logo = "img/MGJ/Logo2_amarelo.png"
			break;
		case 5:
			logo = "img/MGJ/Logo2_magenta.png"
			break;
	}

	contadorImagens++
	if (contadorImagens == 6) contadorImagens = 0
	img.src = logo
}
/* Mapa */
function initialize() {
	let location = new google.maps.LatLng(41.366858, -8.738309);

	// Posicionar o mapa
	// let map = new google.maps.Map(document.getElementById('map'), {
	// 	center: location,
	// 	zoom: 14,
	// });

	// Posicionar o mapa
	let map = new google.maps.Map(document.getElementById('map'), {
		center: location,
		zoom: 14,
		styles: [
			{
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#1d2c4d"
					}
				]
			},
			{
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#8ec3b9"
					}
				]
			},
			{
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"color": "#1a3646"
					}
				]
			},
			{
				"featureType": "administrative.country",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#4b6878"
					}
				]
			},
			{
				"featureType": "administrative.land_parcel",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#64779e"
					}
				]
			},
			{
				"featureType": "administrative.province",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#4b6878"
					}
				]
			},
			{
				"featureType": "landscape.man_made",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#334e87"
					}
				]
			},
			{
				"featureType": "landscape.natural",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#023e58"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#283d6a"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#6f9ba5"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"color": "#1d2c4d"
					}
				]
			},
			{
				"featureType": "poi.park",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#023e58"
					}
				]
			},
			{
				"featureType": "poi.park",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#3C7680"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#304a7d"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#98a5be"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"color": "#1d2c4d"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#2c6675"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#255763"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#b0d5ce"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"color": "#023e58"
					}
				]
			},
			{
				"featureType": "transit",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#98a5be"
					}
				]
			},
			{
				"featureType": "transit",
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"color": "#1d2c4d"
					}
				]
			},
			{
				"featureType": "transit.line",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#283d6a"
					}
				]
			},
			{
				"featureType": "transit.station",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#3a4762"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#0e1626"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#4e6d70"
					}
				]
			}
		]
	});

	// Ponto no mapa....
	let mark = new google.maps.Marker({
		position: location,
		map: map
	});
}