var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "student"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "UPDATE student SET Marks = 90 WHERE Roll__num = 1";
  con.query(sql, function (err, result,display) {
    if (err) throw err;
    console.log(result.affectedRows + " record updated");
  });

  con.query("SELECT *, name FROM student", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

