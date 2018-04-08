// includes the HTTP module
var http = require('http');
var dt = require('./ServerModule.js');
//var cors = require('cors');
var express = require('express');
var bodyParser = require('body-parser');
//var socket = require('socket.io');

var people = [];

//setup an express app
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
  {extended: true}
));

//app.use(cors);
var server = app.listen(8081, function(){
  console.log('listening to requests on port 8080');
});

app.get('/', (req, res) => {
  res.json({'hi': 'lo'});
});

var counter = 0;
app.get('/hello/:my_param', (req, res) => {
  var my_param = req.params.my_param;
  console.log('endpoint /hello called');
  console.log(my_param);
  res.json({'name': 'bob', 'counter': counter, 'lat': 100, 'lng': 50, 'other_people': [1, 1, 2, 3]});
  counter++;
});

app.post('/test_post', (req, res) => {
  var data = req.body;
  console.log(data);
  res.status(200).json({'post': 'this worked'});

});

//:8080/hello/datastuff

//static files
//app.use(express.static('public'))

//Passes Server to Socket.io
//var io = socket(server);

//listen for event and then fire the callback function
//io.on('connection', function(socket){
//  console.log('a user connected')
//});

/*
//Creates a server when something accesses port 8080
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end("hello world");
}).listen(8080);
*/
