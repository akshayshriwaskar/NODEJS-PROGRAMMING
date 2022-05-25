var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "slipno17B"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  con.query("CREATE DATABASE IF NOT EXISTS slipno17B", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
  

  var sql = "CREATE TABLE IF NOT EXISTS Employee  (name VARCHAR(255), sal INT(20))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });

  var sql = "INSERT INTO Employee (name, sal) VALUES ?";
  var data = [
    ['samarth', '9000'],
    ['Bhushan', '5000'],
    ['Patik', '7000']
  ];

  con.query(sql, [data] ,function (err, result) {
    if (err) throw err;
    console.log("record inserted");
  });


  con.query("SELECT * FROM Employee ORDER BY sal ASC", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});