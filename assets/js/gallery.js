var cle;
var map;
var marker;
var infowindow;
var service;

// Initiates Google map
function initMap() {
    cle = {lat: 41.505493, lng: -81.681290};
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: cle
    });
};

// Pulls Google Maps results and runs createMarker function
function callback(results, status) {
	if (status === google.maps.places.PlacesServiceStatus.OK) {
		for (var i = 0; i < results.length; i++) {
			createMarker(results[i]);
		}
    }
};

// Creates new marker
function createMarker(place) {
	var placeLoc = place.geometry.location;
	marker = new google.maps.Marker({
		map: map,
		position: place.geometry.location
    });
    google.maps.event.addListener(marker, 'click', function() {
		console.log(place);
        if (place.formatted_address) {
            infowindow.setContent('<div class="infoWindow"><h5>' + place.name + '</h5><p>' + place.formatted_address + '</p><p>' + '<button id="view-more">' + 'View More >>' + '</button>' + '</div>');
        }
        infowindow.open(map, this);
    });
};

window.onload = function() {
    initMap();
};