function initialize() {
	let location = new google.maps.LatLng(41.366858, -8.738309);

    // Posicionar o mapa
    let map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 14,
    });

    // Ponto no mapa....
    let mark = new google.maps.Marker({
        position: location,
        map: map
    });
}
window.onload = initialize();