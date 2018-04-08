// includes the HTTP module
var http = require('http').Server(app);
var dt = require('./ServerModule.js');
//var cors = require('cors');
var express = require('express');
var bodyParser = require('body-parser');
var io = require('socket.io')(http);

var players = [];

//setup an express app
var app = express();

  app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
  {extended: true}
));

//app.use(cors);
var server = app.listen(8081, function(){
  console.log('listening to requests on port 8081');
});

io.on('connection', function(socket){
  console.log('user connected');
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/join', (req, res) => {
  res.sendFile(__dirname + '/lobbypage.html');
});

//A get function that adds players into the list of current players
var copcounter = 0;
var robbercounter = 0;
//When using this route
//app.get('/cop/:name_param', (req, res) => {
app.get('/cop', (req, res) => {
  //var my_param = req.params.name_param;
  //Pushes a new JSON object into the players array
  //players.push({'name': my_param, 'lat': 0, 'lng':0 , 'role':'cop'})
  //console.log(players[copcounter]);
  //res.json({'name': 'bob', 'counter': counter, 'lat': 100, 'lng': 50, 'other_people': [1, 1, 2, 3]});
  res.sendFile(__dirname + "/gamepage.html");
  //res.status(200); //OKAY!
  copcounter++;
});

//app.get('/robber/:name_param', (req, res) => {
app.get('/robber', (req, res) => {
  //var my_param = req.params.name_param;
  //players.push({'name': my_param, 'lat': 0, 'lng':0 , 'role':'robber'})
  //console.log(players[robbercounter]);
  res.sendFile(__dirname + "/robbers.html");
  robbercounter++;
})

app.get('/winning', (req, res) => {
  res.sendFile(__dirname + "/winningpage.html");
});

app.get('/losing', (req, res) => {
  res.sendFile(__dirname + "/losingpage.html");
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
