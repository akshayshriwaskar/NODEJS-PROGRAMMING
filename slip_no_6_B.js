var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "slipno6"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");


  
//                 //database create
//   con.query("CREATE DATABASE slipno6", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });




//              //table create
//  var table = "CREATE TABLE slipno6 (name VARCHAR(255), city VARCHAR(255))"
//    con.query(table, function (err, result) {
//     if (err) throw err;
//      console.log("Table created");
//    });




// //     //data insert
// var data1 = "INSERT INTO slipno6 (name, city) VALUES ('Samarth Mali', 'Nandurbar')";
// var data2 = "INSERT INTO slipno6 (name, city) VALUES ('Pratik Swami', 'Pune')";
// var data3 = "INSERT INTO slipno6 (name, city) VALUES ('Bhushan Deshmukh', 'Akola')";

// con.query(data1, function (err, result) {
//   if (err) throw err;
//   console.log( "no. 1 record inserted");
// });

// con.query(data2, function (err, result) {
//   if (err) throw err;
//   console.log( "no. 2 record inserted");
// });

// con.query(data3, function (err, result) {
//   if (err) throw err;
//   console.log( "no. 3 record inserted");
// });


con.query("SELECT city, name FROM slipno6", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

});