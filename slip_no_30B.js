var mysql = require('mysql');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "hospital_data"
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


con.query("CREATE DATABASE IF NOT EXISTS hospital_data", function (err, result) {
    if (err) throw err;
    console.log("Database created");
});


con.query("CREATE TABLE IF NOT EXISTS hospital (hRef INT(25), hName VARCHAR(255), address VARCHAR(255), contact VARCHAR(255))", function (err, result) {
    if (err) throw err;
    console.log("Table created");
    
});


var sql="INSERT INTO hospital (hRef,hName,address,contact) VALUES ?";
var data = [
    ['001', 'Hospital1', 'karve Nagar', '123456789'],
    ['002', 'Hospital2', 'Kothrud', '123456789'],
    ['003', 'Hospital3', 'Deccan', '123456789'],
    ['004', 'Hospital4', 'Shivaji-Nagar', '123456789'],
  ];


con.query(sql,[data], function (err, result) {
    if (err) throw err;
    console.log("Table created");
});

