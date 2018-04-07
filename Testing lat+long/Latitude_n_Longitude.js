// attempts to store lat and long into a format that can be used
var y = document.getElementById("lat+lon");
// Stores lat and lon as global variables so that we can manipulate them

var lat = 0;
var lon = 0;

// Function retrives lat + lon and calls printLat
function positionFunc() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(retreiveLatnLon);
    } else {
        y.innerHTML = "you suck";
    }
    printLat(lat, lon);
}

// Retrieves Latitude and Longitude and returns them by hanging the global variable
function retreiveLatnLon(position) {
    lat = position.coords.latitude
    lon = position.coords.longitude
}

// Prints lat + lon
function printLat(lat, lon) {
    y.innerHTML = "latitude ==" + lat + "<br> longitude ==" + lon;
}