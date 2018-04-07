// includes the HTTP module
var http = require('http');
var dt = require('./ServerModule.js')


//Creates a server when something accesses port 8080
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end("hello world");
}).listen(8080);
