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

con.query("SELECT * FROM slipno6", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

});