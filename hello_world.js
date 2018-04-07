getLocation()
id = "demo";
var x = document.getElementById("demo");

/*
navigator.geolocation -> checks if browser is supported. If yes, then run showPosition
if not, print error
*/
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
/*
Prints lat, long, and returns lat and lon
*/
function showPosition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    x.innerHTML = "Latitude: " + lat +
        "<br>Longitude: " + lon;
}

function prinposition() {
    var positionUser = {
        latitude: navigator.geolocation.getCurrentPosition(position.coords.latitude),
        longitude: navigator.geolocation.getCurrentPosition(position.coords.longitude)
    };
    x.innerHTML = positionUser.latitude
}

