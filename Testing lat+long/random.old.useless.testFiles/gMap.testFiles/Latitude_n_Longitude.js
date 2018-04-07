// attempts to store lat and long into a format that can be used
/* Stores lat and lon as global variables so that we can manipulate them
*/
var lat = 0;
var lon = 0;

// Function retrives lat + lon and calls printLat. getCurrentPosition has 2 calls. 1st is on success.2nd is on failure.
function positionFunc() {
    navigator.geolocation.getCurrentPosition(success, failure);
}
function failure() {
    $('#lat').html("<p>Unable to get location! R u connected to the net? Orusing a bad browser?</p>");
}
// changes global variable lat and lon
function success(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    $('#lat').html(lat + "is the Latitude");
    $('#lon').html(lon + "is the Longitude");
    //Google - API - ready lat long string//
    var coords = new google.maps.LatLng(lat, lon);
    var mapOptions = {
        zoom: 16,
        centre: coords,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var marker = new google.maps.Marker({ map: map, position: coords });

}
