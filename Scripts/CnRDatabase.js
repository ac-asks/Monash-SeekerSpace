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
  });*/

  //Creates a Table
  var sql = "CREATE TABLE robbers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), longitude DOUBLE(23,4), latitude DOUBLE(23,4))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
