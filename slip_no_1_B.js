var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "samarth"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected");
  var sql = "CREATE TABLE Student_DB (Rno INT(5),Sname VARCHAR(100), Per INT(3))";
  con.query(sql, function (err) {
    if (err) throw err;
    console.log("Table created");
  });
});