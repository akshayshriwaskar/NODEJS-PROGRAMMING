var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "customer2"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

                //database create
//   con.query("CREATE DATABASE customer2", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });

             //table create
// var table = "CREATE TABLE customer2 (name VARCHAR(255), address VARCHAR(255))";
//   con.query(table, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });

    //data insert
var data1 = "INSERT INTO customer2 (name, address) VALUES ('Samarth Mali', 'Nandurbar')";
var data2 = "INSERT INTO customer2 (name, address) VALUES ('Pratik Swami', 'Pune')";
var data3 = "INSERT INTO customer2 (name, address) VALUES ('Bhushan Deshmukh', 'Akola')";
con.query(data1, function (err, result) {
  if (err) throw err;
  console.log( "no. 1 record inserted");
});
con.query(data2, function (err, result) {
  if (err) throw err;
  console.log( "no. 2 record inserted");
});
con.query(data3, function (err, result) {
  if (err) throw err;
  console.log( "no. 3 record inserted");
});


    //delete data
var row = "DELETE FROM customer2 WHERE address = 'Pune'";
con.query(row, function (err, data) {
  if (err) throw err;
  console.log("Number of records deleted: " + data.affectedRows);

});

});