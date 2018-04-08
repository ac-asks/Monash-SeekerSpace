// includes the HTTP module
var http = require('http');
// var dt = require('./ServerModule.js');
//var cors = require('cors');
var express = require('express');
//var bodyParser = require('body-parser');
//var socket = require('socket.io');

var players = [];
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded(
//   {extended: true}
// ));

var server = app.listen(8080, function(){
  console.log('listening to requests on port 8080');
});

app.get('/', (req, res) => {
  console.log('endpoint / called');
  res.send("Hi there");//res.json({'hi': '<text>lo</text>'});
});

//A get function that adds players into the list of current players
var counter = 0;
app.get('/join/:name_param', (req, res) => {
  var my_param = req.params.name_param;
  players.push({'name': my_param, 'lat': 0, 'lng':0 , 'role':'neutral'})
  console.log('player added');
  //res.json({'name': 'bob', 'counter': counter, 'lat': 100, 'lng': 50, 'other_people': [1, 1, 2, 3]});
  res.status(200);
  counter++;
});

// app.post('/test_post', (req, res) => {
//   var data = req.body;
//   console.log(data);
//   res.status(200).json({'post': 'this worked'});
// });

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
