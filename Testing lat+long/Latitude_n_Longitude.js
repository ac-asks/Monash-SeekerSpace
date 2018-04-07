// attempts to store lat and long into a format that can be used
var y = document.getElementById("lat+lon");
/* Stores lat and lon as global variables so that we can manipulate them
*/
var lat = 0;
var lon = 0;
// Function retrives lat + lon and calls printLat

printLat();

function positionFunc() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success);
    } else {
        y.innerHTML = "you suck";
    }
}

function everything(position) {
    printLat(latPosition(position), lonPosition(position));
}

function success(position) {
    lat = position.coords.latitude
    lon = position.coords.longitude
}

// Returns current lat
function latPosition(position) {
    var lat = position.coords.latitude;
    return lat;
}
// Returns current lon
function lonPosition(position) {
    var lon = position.coords.longitude;
    return lon;
}
// Prints lat + lon
function printLat(lat, lon) {
    y.innerHTML = "latitude ==" + lat + "<br> longitude ==" + lon;
}
