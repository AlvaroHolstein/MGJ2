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
// Get the navbar
let navbar = document.getElementById("nav");

// Get the offset position of the navbar
let sticky = navbar.offsetTop;
let timer = null
let contadorImagens = 0
let logo = null
window.onload = () => {
	initialize()
	document.addEventListener('scroll', stickyNavBar)

	/* Teste */
	// timer = window.setInterval(mudarLogo, 1000) //Acho que é em segundos que isto está
	/* diferenciar quando se está a mostrar as informações importantes ou o regulamento */

	if (window.location.pathname == "/index.html" || window.location.pathname == "/") {
		changeTitlesSeccao3()
	}

	if (window.location.pathname == "/contact.html") {
		document.getElementById('form').addEventListener('submit', sendEmail)
	}
}

function sendEmail(eve) {
	eve.preventDefault()
	let form = {
		name: document.getElementById('nome').value,
		user_email: document.getElementById('mail').value,
		subject: document.getElementById('subject').value,
		text: document.getElementById('mensagem').value,
		date: new Date().toISOString().split('T')[0],
		time: new Date().toISOString().split('T')[1]
	};

	console.log(form)
	emailjs.send("gmail", "contact_form", form).
		then(response => {
			console.log('Boa ', response.status, response.text)
		},
			error => {
				console.log('Ups ', error)
			}
		)

	/* Limpar o formulário depois de o submeter */
	document.getElementById('mensagem').value = ""
	document.getElementById('subject').value = ""
	document.getElementById('mail').value = ""
	document.getElementById('nome').value = ""
}


/* Funções */
function stickyNavBar() {


	// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
	} else {
		navbar.classList.remove("sticky");
	}
}

function changeTitlesSeccao3() {
	let containersSeccao3 = document.getElementsByClassName('containersSeccao3')
	let tituloSeccao3 = document.getElementsByClassName('tituloSeccao3')
	if (containersSeccao3[0].className.includes('show')) {
		tituloSeccao3[0].style.fontWeight = 'bold'
		tituloSeccao3[0].style.color = 'rgb(0, 237, 166)'
	}
	else {
		tituloSeccao3[0].style.fontWeight = 'initial'
		tituloSeccao3[0].style.color = 'white'
	}

	if (containersSeccao3[1].className.includes('show')) {
		tituloSeccao3[1].style.fontWeight = 'bold'
		tituloSeccao3[1].style.color = 'rgb(0, 237, 166)'
	}
	else {
		tituloSeccao3[1].style.fontWeight = 'initial'
		tituloSeccao3[1].style.color = 'white'
	}

	for (let i = 0; i < tituloSeccao3.length; i++) {
		tituloSeccao3[i].addEventListener('click', () => {

			if (i == 0) {
				if (!containersSeccao3[0].className.includes('show')) {
					tituloSeccao3[0].style.fontWeight = 'bold'
					tituloSeccao3[0].style.color = 'rgb(0, 237, 166)'
				}
				else {
					tituloSeccao3[0].style.fontWeight = 'initial'
					tituloSeccao3[0].style.color = 'white'
				}
			}
			if (i == 1) {
				if (!containersSeccao3[1].className.includes('show')) {
					tituloSeccao3[1].style.fontWeight = 'bold'
					tituloSeccao3[1].style.color = 'rgb(0, 237, 166)'
				}
				else {
					tituloSeccao3[1].style.fontWeight = 'initial'
					tituloSeccao3[1].style.color = 'white'
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
		orientationIcons[1].style.backgroundColor = 'rgb(255, 179, 32)'
	}
	else {
		// orientationIcons[1].style.color = 'unset'
		orientationIcons[1].style.backgroundColor = 'white'
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
		orientationIcons[2].style.backgroundColor = 'rgb(255, 179, 32)'
	}
	else {
		// orientationIcons[2].style.color = 'unset'
		orientationIcons[2].style.backgroundColor = 'white'
	}

	// console.log(scrolly)
}

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