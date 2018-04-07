var mysql = require('mysql');

//Creates the connection to the database
var con = mysql.createConnection({
  host: "localhost",
  user: "Trinityy",
  password: "}R125]ijU_:})I4m",
  database: "CnR"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  //Creates a database
/*  con.query("CREATE DATABASE CnR", function (err, result)
  {
    if (err) throw err;
    console.log("Database created");
  });

  //Creates a Table
  var sql = "CREATE TABLE robbers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), longitude DOUBLE(23,4), latitude DOUBLE(23,4))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("cops deleted");
  });

  con.query("DROP TABLE cops", function(err, result){
    if (err) throw err;
    console.log("cops deleted");
  });

  con.query("DROP TABLE robbers", function(err, result){
    if (err) throw err;
    console.log("robbers created");
  });
  */

//Where for identity:
//0 = No identity
//1 = cop
//2 = Robber
  con.query("CREATE TABLE players (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), longitude DOUBLE(23, 4), latitude DOUBLE (23,4), identity INT(1))", function (err, result) {
    if (err) throw err;
    console.log("players created");
  });

});
