var map;
var cle;
var marker;
var infowindow;
var service;

// Initiates Google map
function initMap() {
    cle = {lat: 41.505493, lng: -81.681290};
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: cle
    });
};

window.onload = function() {
    initMap();
};